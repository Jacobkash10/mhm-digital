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
        <h2>Confirmation de votre commande</h2>
        <p>Bonjour {{name}},</p>
        <p>Merci pour votre commande. Voici les détails :</p>
        <ul>
            <li>ID de la commande : {{orderId}}</li>
            <li>Téléphone : {{phoneNumber}}</li>
            <li>Montant total : {{price}}€</li>
            <li>Adresse de facturation : {{billingAddress}}</li>
            <li>Adresse de livraison : {{shippingAddress}}</li>
            <li>Paquets commandés : {{packages}}</li>
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
        shippingAddress: orderDetails.shippingAddress,
        packages: orderDetails.packages.join(', '),
    });

    const mailOptions = {
        from: 'info@mhmdigital.us',
        replyTo: orderDetails.email,
        to: userEmail,
        subject: `Confirmation de votre commande - ID ${orderDetails.id}`,
        html: clientHtmlToSend,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('E-mail de confirmation envoyé avec succès.');
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail de confirmation:', error);
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
        <h2>Nouvelle commande reçue</h2>
        <p>Un utilisateur a passé une nouvelle commande. Voici les détails :</p>
        <ul>
            <li>Nom du client : {{name}}</li>
            <li>E-mail du client : {{email}}</li>
            <li>Téléphone : {{phoneNumber}}</li>
            <li>ID de la commande : {{orderId}}</li>
            <li>Montant total : {{price}}€</li>
            <li>Adresse de facturation : {{billingAddress}}</li>
            <li>Adresse de livraison : {{shippingAddress}}</li>
            <li>Paquets commandés : {{packages}}</li>
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
        shippingAddress: orderDetails.shippingAddress,
        packages: orderDetails.packages.join(', '),
    });

    const mailOptions = {
        from: 'info@mhmdigital.us',
        to: 'info@mhmdigital.us',
        subject: `Nouvelle commande - ID ${orderDetails.id}`,
        html: adminHtmlToSend,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('E-mail récapitulatif envoyé à l\'admin avec succès.');
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail à l\'admin:', error);
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

    const { name, email, phoneNumber, packageIds, price, billingAddress, shippingAddress } = validateFields.data;

    // Mise à jour ou création de l'utilisateur dans la base de données
    const existingUser = await db.user.upsert({
        where: { email },
        update: { name, phoneNumber, billingAddress, shippingAddress },
        create: { name, phoneNumber, email, billingAddress, shippingAddress }
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
        shippingAddress,
        packages: packageIds,
    }, email);

    await sendAdminEmail({
        name,
        phoneNumber,
        email,
        id: newOrder.id,
        price,
        billingAddress,
        shippingAddress,
        packages: packageIds,
    });

    return { orderId: newOrder.id };
};
