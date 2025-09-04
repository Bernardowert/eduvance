import type { Metadata } from "next";
import { Plus_Jakarta_Sans as Jakarta } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const jakarta = Jakarta({
  variable: "--font-Jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Eduvance - Best Learning Platform",
  description: "Best Learning Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
