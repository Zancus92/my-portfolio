import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: 'swap',
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: 'swap',
});

export const metadata = {
    title: "Zanco Simone | Visual Storyteller",
    description: "Portfolio fotografico di Zanco Simone. Catturare momenti, raccontare storie.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="it" className="scroll-smooth">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white selection:bg-white selection:text-black`}
        >
        {children}
        </body>
        </html>
    );
}