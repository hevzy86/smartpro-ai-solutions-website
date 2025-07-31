import { useEffect, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    VANTA: any;
  }
}


type VantaEffect = {
  destroy: () => void;
};

export default function HeroSection() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    function initVanta() {
      if (typeof window !== "undefined" && window.VANTA && window.VANTA.NET) {
        if (vantaEffect) vantaEffect.destroy();
        const effect = window.VANTA.NET({
          el: "#vanta-hero",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xdd3fff,
        });
        setVantaEffect(effect);
      } else {
        setTimeout(initVanta, 100);
      }
    }
    initVanta();
    return () => {
      if (vantaEffect && typeof vantaEffect.destroy === "function") vantaEffect.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Script src="/three.min.js" strategy="beforeInteractive" />
      <Script src="/vanta.net.min.js" strategy="beforeInteractive" />
      <section
        className="relative w-full flex flex-col items-center justify-center pt-16 pb-24 px-4 min-h-[70vh] overflow-hidden"
        style={{ zIndex: 1, backgroundColor: "#23153c" }}
      >
        <div id="vanta-hero" className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          {/* New Headline & Subheadline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6 leading-tight">
            Start{" "}
            <span className="text-red-400 drop-shadow-[0_2px_8px_rgba(255,0,0,0.7)]">
              saving big
            </span>{" "}
            with{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text drop-shadow-[0_2px_12px_rgba(56,189,248,0.7)]">
              AI-powered support!
            </span>
          </h1>
          <div className="text-lg sm:text-2xl text-center max-w-2xl mb-8 text-gray-200 flex flex-col gap-2">
            <span>
              AI solutions work{" "}
              <span className="text-yellow-300 font-bold drop-shadow-[0_2px_8px_rgba(250,204,21,0.7)]">
                24/7
              </span>
              , never quit, never make mistakes, and
              <br />
              dramatically reduce your{" "}
              <span className="text-green-400 font-bold">
                support expenses
              </span>
              .
            </span>
            <span>
              They handle{" "}
              <span className="text-purple-400 font-bold">
                repetitive tasks
              </span>{" "}
              for you — so your team can focus on what matters.
            </span>
            <span className="text-cyan-400 font-bold">
              Start saving today — bring AI into your business.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
