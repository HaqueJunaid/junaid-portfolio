import type { Metadata } from "next";
// @ts-ignore
import "./globals.css";
import { Archivo } from "next/font/google";
import LenisScrollProvider from "./provider/lenis-provider";

const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-archivo"
})

export const metadata: Metadata = {
  title: "Junaid Haque — Fullstack DevOps Engineer",
  description: "Fullstack developer and DevOps engineer building scalable web platforms, CI/CD pipelines, and cloud infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased text-stone-900 bg-stone-100 ${archivo.variable} font-sans`}>
        {/* <LenisScrollProvider> */}
          {children}
        {/* </LenisScrollProvider> */}
      </body>
    </html>
  );
}
