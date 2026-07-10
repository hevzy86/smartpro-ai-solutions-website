import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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

import { I18nProvider } from "./i18n-provider";
import SmartProChatButton from "./components/SmartProChatButton";

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
        <I18nProvider>
          {children}
        </I18nProvider>
        <SmartProChatButton />
        <Script
          id="nextbot-chat-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function () {
  const s = document.createElement("script");
  s.src = "https://app.nextbot.ru/chat-widget-bundle-ver3.js";
  s.async = true;
  s.onload = function () {
    initializeChatWidget({
      agentId: "88d0985c-c7e4-4e19-9cca-0a344c422861",
      server: "https://app.nextbot.ru",
      chatIconNumberSvg: "1",
      chatIconLineColor: "transparent",
      chatIconBackgroundColor: "transparent",
      secondsToAutoinvite: "0",
      messageAutoInvite: "Hi, you can ask me a question",
      bgColorAutoInvite: "#9ecceb",
      textColorAutoInvite: "#000000",
      widgetBottom: "30",
      widgetRight: "30",
    });
  };
  s.onerror = function () {
    console.error("Не удалось загрузить chat-widget-bundle-ver3.js");
  };
  document.head.appendChild(s);
})();`,
          }}
        />
      </body>
    </html>
  );
}
