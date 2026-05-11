import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NicheSpy — Know What's Working for Any Creator",
  description:
    "Drop any YouTube or TikTok channel URL. Get a full intelligence report — top content, winning keywords, audience demographics, and content gaps — in 30 seconds.",
  keywords: [
    "YouTube analytics",
    "TikTok analytics",
    "creator intelligence",
    "competitor analysis",
    "content strategy",
    "channel research",
  ],
  openGraph: {
    title: "NicheSpy — Spy on Any Channel in 30 Seconds",
    description:
      "AI-powered competitor analysis for YouTube and TikTok creators.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🕵️</text></svg>" />
      </head>
      <body className="bg-[#030712] text-[#f9fafb] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
