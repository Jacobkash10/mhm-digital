'use server';

import * as z from 'zod';
import { checkoutSchema } from '@/schemas';
import { db } from '@/lib/db';
import getSession from "@/lib/getSession";
import nodemailer from 'nodemailer';
import handlebars from 'handlebars';

// Fonction pour envoyer l'email de confirmation au client
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

    // Template d'e-mail pour le client
    const clientTemplate = `
        <h2>Order confirmation</h2>
        <p>Hello {{name}},</p>
        <p>Thank you for your order. Here are the details :</p>
        <ul>
            <li>Order ID : {{orderId}}</li>
            <li>Phone number : {{phoneNumber}}</li>
            <li>Total price : {{price}}€</li>
            <li>Billing address : {{billingAddress}}</li>
            <li>Billing address city : {{billingCity}}</li>
            <li>Shipping address : {{shippingAddress}}</li>
            <li>Shipping address city : {{shippingCity}}</li>
            <li>Packages ordered : {{packages}}</li>
        </ul>
        <p>Nous vous contacterons bientôt pour plus de détails.</p>
        <p>Cordialement,</p>
        <p>L'équipe de MHM Digital</p>
    `;

    // Compiler le template
    const compiledClientTemplate = handlebars.compile(clientTemplate);
    const clientHtmlToSend = compiledClientTemplate({
        name: orderDetails.name,
        orderId: orderDetails.id,
        phoneNumber: orderDetails.phoneNumber,
        price: orderDetails.price,
        billingAddress: orderDetails.billingAddress,
        billingCity: orderDetails.billingCity,
        shippingAddress: orderDetails.shippingAddress,
        shippingCity: orderDetails.shippingCity,
        packages: orderDetails.packages.join(', '),
    });

    const mailOptions = {
        from: 'info@mhmdigital.us',
        replyTo: orderDetails.email,
        to: userEmail,
        subject: `Order confirmation - ID ${orderDetails.id}`,
        html: clientHtmlToSend,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Confirmation e-mail sent successfully.');
    } catch (error) {
        console.error('Error sending confirmation e-mail : ', error);
    }
};

// Fonction pour envoyer l'email récapitulatif à l'admin (info@mhmdigital.us)
const sendAdminEmail = async (orderDetails: any) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "465"),
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    // Template d'e-mail pour l'admin
    const adminTemplate = `
        <h2>New order received</h2>
        <p>A user has placed a new order. Here are the details :</p>
        <ul>
            <li>Client name : {{name}}</li>
            <li>Client email : {{email}}</li>
            <li>Phone number : {{phoneNumber}}</li>
            <li>Order ID : {{orderId}}</li>
            <li>Total price : {{price}}€</li>
            <li>Billing address : {{billingAddress}}</li>
            <li>Billing address city : {{billingCity}}</li>
            <li>Shipping address : {{shippingAddress}}</li>
            <li>Shipping address city : {{shippingCity}}</li>
            <li>Packages ordered : {{packages}}</li>
        </ul>
    `;

    // Compiler le template
    const compiledAdminTemplate = handlebars.compile(adminTemplate);
    const adminHtmlToSend = compiledAdminTemplate({
        name: orderDetails.name,
        email: orderDetails.email,
        phoneNumber: orderDetails.phoneNumber,
        orderId: orderDetails.id,
        price: orderDetails.price,
        billingAddress: orderDetails.billingAddress,
        billingCity: orderDetails.billingCity,
        shippingAddress: orderDetails.shippingAddress,
        shippingCity: orderDetails.shippingCity,
        packages: orderDetails.packages.join(', '),
    });

    const mailOptions = {
        from: 'info@mhmdigital.us',
        to: 'info@mhmdigital.us',
        subject: `New order - ID ${orderDetails.id}`,
        html: adminHtmlToSend,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Summary e-mail successfully sent to l\'admin.');
    } catch (error) {
        console.error('Error sending l\'e-mail to l\'admin : ', error);
    }
};

// Fonction checkOut pour traiter la commande
export const checkOut = async (values: z.infer<typeof checkoutSchema>) => {
    const session = await getSession();

    if (!session) {
        return { error: "User not authenticated!" };
    }

    const validateFields = checkoutSchema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields!" };
    }

    const { 
        name, 
        email, 
        phoneNumber, 
        packageIds, 
        price, 
        billingAddress, 
        billingCity, 
        billingPostal, shippingAddress, shippingCity, shippingPostal } = validateFields.data;

    // Mise à jour ou création de l'utilisateur dans la base de données
    const existingUser = await db.user.upsert({
        where: { email },
        update: { name, phoneNumber, billingAddress, shippingAddress, billingCity, billingPostal, shippingCity, shippingPostal },
        create: { name, phoneNumber, email, billingAddress, shippingAddress, billingCity, billingPostal, shippingCity, shippingPostal }
    });

    // Préparation des données de commande
    const packagesData = packageIds.map(packageId => ({
        package: { connect: { id: packageId } }
    }));

    // Création de la commande dans la base de données
    const newOrder = await db.order.create({
        data: {
            price,
            userId: existingUser.id,
            packages: {
                create: packagesData
            }
        }
    });

    // Envoi des deux e-mails (client et admin)
    await sendConfirmationEmail({
        name,
        phoneNumber,
        email,
        id: newOrder.id,
        price,
        billingAddress,
        billingCity,
        billingPostal,
        shippingAddress,
        shippingCity,
        shippingPostal,
        packages: packageIds,
    }, email);

    await sendAdminEmail({
        name,
        phoneNumber,
        email,
        id: newOrder.id,
        price,
        billingAddress,
        billingCity,
        billingPostal,
        shippingAddress,
        shippingCity,
        shippingPostal,
        packages: packageIds,
    });

    return { orderId: newOrder.id };
};
