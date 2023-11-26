import type { Metadata } from "next";
import { Ubuntu, Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "./components";
import { UserProvider } from "@auth0/nextjs-auth0/client";

//installed this: npm install tw-elements
//second step: import this to have access to elements
//import "tw-elements/dist/css/tw-elements.min.css";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const ubuntuMono = Ubuntu_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu-mono",
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
    <html lang="en" className=" bg-rose-100">
      <UserProvider>
        <body className={ubuntu.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}
