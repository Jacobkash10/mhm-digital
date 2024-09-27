import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from 'next-auth/react'
import { auth } from "@/auth";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"],
weight: ['200', '300', '400', '500', '600', '700', '800'] ,
variable: '--font-jetBrainsMomo'
 });

export const metadata: Metadata = {
  title: "MHM Digital Agency",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await auth()

  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <SessionProvider session={session}>
        <Navbar />
        <div>
          {children}
        </div>
        <Footer />
        <Toaster />
        </SessionProvider>
        </body>
    </html>
  );
}
