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
        <Script
          id="nextbot-pulse-decoration"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function() {
  var style = document.createElement('style');
  style.textContent = \`
    @keyframes sp-pulse {
      0% { transform: scale(1); opacity: 0.5; }
      100% { transform: scale(2.2); opacity: 0; }
    }
    #sp-chat-deco { position: fixed; bottom: 30px; right: 30px; width: 56px; height: 56px; z-index: 999998; pointer-events: none; }
    #sp-chat-deco::before, #sp-chat-deco::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background: #1a73e8;
      animation: sp-pulse 2s ease-out infinite;
    }
    #sp-chat-deco::after { animation-delay: 1s; }
    #sp-chat-label {
      position: fixed;
      bottom: 14px;
      right: 18px;
      z-index: 999998;
      pointer-events: none;
      font-size: 10px;
      font-weight: 600;
      color: #fff;
      background: rgba(26,115,232,0.85);
      border-radius: 999px;
      padding: 2px 8px;
      letter-spacing: 0.03em;
      white-space: nowrap;
    }
  \`;
  document.head.appendChild(style);
  var deco = document.createElement('div');
  deco.id = 'sp-chat-deco';
  document.body.appendChild(deco);
  var label = document.createElement('div');
  label.id = 'sp-chat-label';
  label.textContent = 'Talk to AI';
  document.body.appendChild(label);
})();`
          }}
        />
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
      chatIconLineColor: "#fff",
      chatIconBackgroundColor: "#1a73e8",
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
