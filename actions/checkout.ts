"use server";

import * as z from 'zod';
import { checkoutSchema } from '@/schemas';
import { db } from '@/lib/db';
import getSession from "@/lib/getSession";
import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';

const sendConfirmationEmail = async (orderDetails: any, userEmail: string) => {

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "465"),
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    transporter.use('compile', hbs({
        viewEngine: {
            extname: '.hbs',
            layoutsDir: path.resolve('./templates'),
            defaultLayout: false,
        },
        viewPath: path.resolve('./templates'),
        extName: '.hbs', 
    }));

    // Préparation des options de l'e-mail
    const mailOptions = {
        from: 'info@mhmdigital.us',
        replyTo: orderDetails.email,
        to: userEmail,
        subject: `Confirmation de votre commande - ID ${orderDetails.id}`,
        template: 'confirmation_email',
        context: {
            name: orderDetails.name,
            orderId: orderDetails.id,
            phoneNumber: orderDetails.phoneNumber,
            price: orderDetails.price,
            billingAddress: orderDetails.billingAddress,
            shippingAddress: orderDetails.shippingAddress,
            packages: orderDetails.packages.join(', '),
        },
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('E-mail de confirmation envoyé avec succès.');
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
    }
};

export const checkOut = async (values: z.infer<typeof checkoutSchema>) => {

    const session = await getSession();

    if (!session) {
        return { error: "User not authenticated!" };
    }

    const validateFields = checkoutSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields!" };
    }

    const { name, email, phoneNumber, packageIds, price, billingAddress, shippingAddress } = validateFields.data;

    const existingUser = await db.user.upsert({
        where: { email },
        update: { name, phoneNumber, billingAddress, shippingAddress },
        create: { name, phoneNumber, email, billingAddress, shippingAddress }
    });

    const packagesData = packageIds.map(packageId => ({
        package: { connect: { id: packageId } }
    }));

    const newOrder = await db.order.create({
        data: {
            price,
            userId: existingUser.id,
            packages: {
                create: packagesData
            }
        }
    });

    await sendConfirmationEmail({
        name,
        phoneNumber,
        email,
        id: newOrder.id,
        price,
        billingAddress,
        shippingAddress,
        packages: packageIds,
    }, email);

    return { orderId: newOrder.id };
};
