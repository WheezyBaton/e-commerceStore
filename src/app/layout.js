// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import ClientProviders from "@/components/ClientProviders";
import "./globals.css";

const geistSans = Geist({
      variable: "--font-geist-sans",
      subsets: ["latin"],
});

const geistMono = Geist_Mono({
      variable: "--font-geist-mono",
      subsets: ["latin"],
});

export const metadata = {
      title: "FakeStore E-commerce",
      description: "Nowoczesny sklep internetowy zbudowany w Next.js",
};

export default function RootLayout({ children }) {
      return (
            <html lang="en">
                  <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                        <ClientProviders>{children}</ClientProviders>
                  </body>
            </html>
      );
}
