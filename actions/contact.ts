'use server';

import { contactSchema } from '@/schemas';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';
import handlebars from 'handlebars';

export async function contact(values: z.infer<typeof contactSchema>) {

  const parsedValues = contactSchema.parse(values);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "465"),
    secure: true,
    auth: {
      user: process.env.SMTP_USER, 
      pass: process.env.SMTP_PASS,
    },
  });

  // Template d'e-mail en ligne
  const htmlTemplate = `
    <h3>Nouveau message de {{name}}</h3>
    <ul>
      <li>Nom: {{name}}</li>
      <li>Email: {{email}}</li>
      <li>Téléphone: {{phoneNumber}}</li>
      <li>Société: {{company}}</li>
      <li>Service demandé: {{service}}</li>
      <li>Description du projet: {{description}}</li>
    </ul>
  `;

  // Compiler le template
  const compiledTemplate = handlebars.compile(htmlTemplate);
  const htmlToSend = compiledTemplate({
    name: values.name,
    email: values.email,
    phoneNumber: values.phoneNumber || "Non fourni",
    company: values.company || "Non fourni",
    service: values.service,
    description: values.description,
  });

  const mailOptions = {
    from: parsedValues.email,
    to: 'info@mhmdigital.us',
    subject: `Nouveau message de ${parsedValues.name}`,
    html: htmlToSend, 
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true }; 
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
    return { success: false, error: 'Erreur lors de l\'envoi du message.' };
  }
}
