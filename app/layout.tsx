import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { LanguageProvider } from "./components/LanguageContext";
import { Footer } from "./components/Footer";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center">
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
