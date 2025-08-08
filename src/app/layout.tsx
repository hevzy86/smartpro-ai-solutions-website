import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smartproaisolutions.io"),
  title: "SmartPro AI Solutions — AI Voice & Digital Agents for Business Automation",
  description: "SmartPro AI Solutions: Voice and digital AI agents for business automation, cost reduction, and efficiency boost. Try a free demo!",
  openGraph: {
    title: "SmartPro AI Solutions — AI Voice & Digital Agents for Business Automation",
    description: "SmartPro AI Solutions: Voice and digital AI agents for business automation, cost reduction, and efficiency boost. Try a free demo!",
    images: [
      "/icons/NewSmartProAiSolutions.png"
    ],
    url: "https://smartprosolutions.io/",
    siteName: "SmartPro AI Solutions"
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartPro AI Solutions — AI Voice & Digital Agents for Business Automation",
    description: "SmartPro AI Solutions: Voice and digital AI agents for business automation, cost reduction, and efficiency boost. Try a free demo!",
    images: [
      "/icons/NewSmartProAiSolutions.png"
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
