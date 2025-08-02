import { useRef, useEffect, useState } from "react";
import Script from "next/script";

export default function HeroSection() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof window.VANTA.NET> | null>(null);

  useEffect(() => {
    function initVanta() {
      if (
        typeof window !== "undefined" &&
        window.VANTA &&
        window.VANTA.NET &&
        vantaRef.current
      ) {
        if (vantaEffect) vantaEffect.destroy();
        const effect = window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3fffed,
          backgroundColor: 0x23153c,
          points: 10.0,
          maxDistance: 22.0,
          spacing: 18.0,
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
    <section
      className="relative w-full flex flex-col items-center justify-center pt-16 pb-24 px-4 min-h-[70vh] overflow-hidden"
      style={{ zIndex: 1, backgroundColor: "#23153c" }}
    >
      {/* Vanta.NET Animated Grid Background */}
      <Script src="/three.min.js" strategy="beforeInteractive" />
      <Script src="/vanta.net.min.js" strategy="beforeInteractive" />
      <div
        id="vanta-hero"
        ref={vantaRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{ pointerEvents: "none" }}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        {/* New Headline & Subheadline */}
        {/* New Headline & Subheadline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6 leading-tight">
          Transform Your Business with AI Innovation
        </h1>
        <div className="text-lg sm:text-2xl text-center max-w-2xl mb-8 text-gray-200 flex flex-col gap-2">
          <span>
            AI solutions work{" "}
            <span className="text-yellow-300 font-bold drop-shadow-[0_2px_8px_rgba(250,204,21,0.7)]">24/7</span>, never quit, never make mistakes, and<br />
            dramatically reduce your{" "}
            <span className="text-green-400 font-bold">support expenses</span>.
          </span>
          <span>
            They handle{" "}
            <span className="text-purple-400 font-bold">repetitive tasks</span>{" "}for you — so your team can focus on what matters.
          </span>
          <span className="text-cyan-400 font-bold">
            Start saving today — bring AI into your business.
          </span>
        </div>
      </div>
    </section>
  );
}
