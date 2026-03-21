import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script"; // 1. Import the Script component
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
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground selection:bg-accent/10 selection:text-accent`}
      >
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-CT08TVDGED"
            strategy="afterInteractive"
        />
            <Script id="google-analytics" strategy="afterInteractive">
            {`
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', 'G-CT08TVDGED');
            `}
</Script>
        {children}
      </body>
    </html>
  );
}
