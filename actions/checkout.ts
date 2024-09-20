'use server';

import * as z from 'zod';
import { checkoutSchema } from '@/schemas';
import { db } from '@/lib/db';
import getSession from "@/lib/getSession";
import nodemailer from 'nodemailer';
import handlebars from 'handlebars';

// Fonction pour envoyer l'email de confirmation avec un template inline
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

    // Template d'e-mail intégré en HTML
    const htmlTemplate = `
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
    const compiledTemplate = handlebars.compile(htmlTemplate);
    const htmlToSend = compiledTemplate({
        name: orderDetails.name,
        orderId: orderDetails.id,
        phoneNumber: orderDetails.phoneNumber,
        price: orderDetails.price,
        billingAddress: orderDetails.billingAddress,
        shippingAddress: orderDetails.shippingAddress,
        packages: orderDetails.packages.join(', '),
    });

    const mailOptions = {
        from: 'info@mhmdigital.us',  // Adresse de l'expéditeur
        replyTo: orderDetails.email,  // Adresse de réponse (celle de l'utilisateur)
        to: userEmail,  // Destinataire (l'utilisateur)
        subject: `Confirmation de votre commande - ID ${orderDetails.id}`,
        html: htmlToSend,  // Contenu HTML compilé
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('E-mail de confirmation envoyé avec succès.');
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
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

    // Envoi de l'email de confirmation
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
