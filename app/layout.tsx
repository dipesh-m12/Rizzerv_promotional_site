import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rizzerv",
  description: "Rizzerv",
};

const agenda = localFont({
  src: [
    {
      path: "../public/agenda/ufonts.com_agenda-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/agenda/ufonts.com_agenda-lightitalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/agenda/ufonts.com_agenda-lightcondensed.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/agenda/ufonts.com_agenda-lightextracondensed.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/agenda/ufonts.com_agenda-lightultracondensed.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/agenda/ufonts.com_agenda-mediumcondensed.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/agenda/ufonts.com_agenda-mediumextracondensed.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/agenda/ufonts.com_agenda-mediumultracondensed.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/agenda/ufonts.com_agenda-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/agenda/ufonts.com_agenda-boldcondensed.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/agenda/ufonts.com_agenda-boldextracondensed.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/agenda/ufonts.com_agenda-boldultracondensed.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/agenda/ufonts.com_agenda-black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/agenda/ufonts.com_agenda-thinultracondensed.ttf",
      weight: "100",
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
      <Navbar />
      <body className={`${openSans.variable} ${agenda.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
