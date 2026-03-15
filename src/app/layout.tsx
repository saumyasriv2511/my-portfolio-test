import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Saumya Srivastava | Marketing Data Science & AI Strategy",
  description: "Senior independent consultant bridging the gap between marketing strategy and data execution at scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-black text-zinc-100 selection:bg-teal-500/30 selection:text-teal-200`}
      >
        {children}
      </body>
    </html>
  );
}
