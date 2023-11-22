import type { Metadata } from "next";
import { Ubuntu, Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "./components";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const ubuntuMono = Ubuntu_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: '--font-ubuntu-mono'
});

export const metadata: Metadata = {
  title: "Quickipedia",
  description: "Created by complot team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" bg-primary">
      <body className={ubuntu.className}>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
