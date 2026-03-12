import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import localFont from "next/font/local";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rizzerv",
  description: "Rizzerv",
};

// Configured for the Condensed set as requested
const agenda = localFont({
  src: [
    {
      path: "../public/agenda/fonnts.com-Agenda_One_Condensed_Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/agenda/fonnts.com-Agenda_RegularCondensed.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/agenda/fonnts.com-Agenda_MediumCondensed.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/agenda/fonnts.com-Agenda_SemiboldCondensed.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/agenda/fonnts.com-Agenda_One_Condensed_Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/agenda/fonnts.com-Agenda_One_Condensed_Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-agenda",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Navbar and Footer MUST be inside the body */}
      <body className={`${openSans.variable} ${agenda.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
