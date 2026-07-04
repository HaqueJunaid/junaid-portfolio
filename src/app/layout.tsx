import type { Metadata } from "next";
import "./globals.css";
import { Archivo } from "next/font/google";
import { ThemeProvider } from "@/app/provider/theme-provider";

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            `,
          }}
        />
      </head>
      <body className={`antialiased text-stone-900 bg-stone-100 dark:text-stone-100 dark:bg-stone-950 transition-colors duration-300 ${archivo.variable} font-sans`}>
        <ThemeProvider>
          {/* <LenisScrollProvider> */}
            {children}
          {/* </LenisScrollProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
