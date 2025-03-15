import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import ThemeProvider from "./components/ThemeProvider";
import ThemeToggle from "./components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChatGenius AI",
  description: "AI-powered automation platform",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        <Navbar /> {/* Navbar at the top */}
        <ThemeProvider>
          <header className="p-4 flex justify-between items-center border-b">
            <h1>Dashboard</h1>
            <ThemeToggle />
          </header>
          <main className="p-5">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
