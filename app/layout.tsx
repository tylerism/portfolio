import type { Metadata } from "next";
import { Chivo_Mono } from "next/font/google";
import "./globals.css";

const inter = Chivo_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pugh Power",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navigation">
        <nav className="navbar">
            <div className="nav-logo">Pugh Power</div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/resume">Resume</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        {children}
       </body>
    </html>
  );
}
