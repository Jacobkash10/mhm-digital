'use server';

import { contactSchema } from '@/schemas';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';

export async function contact(values: z.infer<typeof contactSchema>) {

  const parsedValues = contactSchema.parse(values);

  const transporter = nodemailer.createTransport({
    host: 'nodels2-fr.n0c.com',
    port: 465,
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

  const mailOptions = {
    from: parsedValues.email,
    to: 'info@mhmdigital.us',
    subject: `Nouveau message de ${parsedValues.name}`,
    template: 'contact_email',
    context: { 
      name: parsedValues.name,
      email: parsedValues.email,
      phoneNumber: parsedValues.phoneNumber || "Non fourni",
      company: parsedValues.company || "Non fourni",
      service: parsedValues.service,
      description: parsedValues.description,
    },
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true }; 
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
    return { success: false, error: 'Erreur lors de l\'envoi du message.' };
  }
}
