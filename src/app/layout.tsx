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
      100% { transform: scale(2.4); opacity: 0; }
    }
    #sp-chat-deco {
      position: fixed; bottom: 30px; right: 30px;
      width: 56px; height: 56px;
      z-index: 999998; pointer-events: none;
      transition: opacity 0.25s;
    }
    #sp-chat-deco::before, #sp-chat-deco::after {
      content: ''; position: absolute; inset: 0;
      border-radius: 50%; background: #1a73e8;
      animation: sp-pulse 2s ease-out infinite;
    }
    #sp-chat-deco::after { animation-delay: 1s; }
    #sp-chat-label {
      position: fixed; bottom: 118px; right: 10px;
      z-index: 999998; pointer-events: none;
      font-size: 12px; font-weight: 700; color: #fff;
      background: linear-gradient(135deg, #1a73e8 0%, #6c3fc5 100%);
      border-radius: 12px; padding: 7px 14px;
      letter-spacing: 0.02em; white-space: nowrap;
      box-shadow: 0 4px 16px rgba(26,115,232,0.45);
      animation: sp-label-pulse 2.5s ease-in-out infinite;
      transition: opacity 0.25s;
    }
    @keyframes sp-label-pulse {
      0%, 100% { box-shadow: 0 4px 16px rgba(26,115,232,0.45); }
      50% { box-shadow: 0 4px 24px rgba(108,63,197,0.7); }
    }
    #sp-chat-label::after {
      content: ''; position: absolute;
      bottom: -7px; right: 22px;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-top: 7px solid #6c3fc5;
    }
  \`;
  document.head.appendChild(style);

  var deco = document.createElement('div');
  deco.id = 'sp-chat-deco';
  document.body.appendChild(deco);

  var label = document.createElement('div');
  label.id = 'sp-chat-label';
  label.textContent = 'Ask AI anything';
  document.body.appendChild(label);

  // Toggle label+deco when user clicks the nextbot widget area (bottom-right 160px)
  var isOpen = false;
  document.addEventListener('click', function(e) {
    if (e.clientX > window.innerWidth - 160 && e.clientY > window.innerHeight - 160) {
      isOpen = !isOpen;
      deco.style.opacity = isOpen ? '0' : '1';
      label.style.opacity = isOpen ? '0' : '1';
    }
  }, true);

  var attempts = 0;
  var interval = setInterval(function() {
    attempts++;
    var all = document.querySelectorAll('*');
    for (var i = 0; i < all.length; i++) {
      var el = all[i];
      var cs = window.getComputedStyle(el);
      if (cs.position !== 'fixed') continue;
      var rect = el.getBoundingClientRect();
      if (rect.right > window.innerWidth * 0.6 && rect.bottom > window.innerHeight * 0.6 && rect.width > 20 && rect.width < 150) {
        foundBtn = el;
        el.style.transform = 'scale(1.35)';
        el.style.transformOrigin = 'center center';
        clearInterval(interval);
        break;
      }
    }
    if (attempts > 20) clearInterval(interval);
  }, 500);
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
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Y7TRDL36VJ"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-Y7TRDL36VJ');`}
        </Script>
        {/* Microsoft Clarity */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "xq3s68cnxf");`}
        </Script>
      </body>
    </html>
  );
}
