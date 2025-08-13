import { useRef, useEffect, useState } from "react";
import Script from "next/script";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation("common");
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<ReturnType<
    typeof window.VANTA.NET
  > | null>(null);

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
          color: 0x444466, // much less contrast
          backgroundColor: 0x23153c,
          points: 4.0, // fewer points
          maxDistance: 40.0, // more spread out
          spacing: 35.0, // more spacing
          showDots: false,
          opacity: 0.18, // much lower opacity
        });
        setVantaEffect(effect);
      } else {
        setTimeout(initVanta, 100);
      }
    }

    initVanta();
    return () => {
      if (vantaEffect && typeof vantaEffect.destroy === "function")
        vantaEffect.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center pt-16 pb-24 px-4 min-h-[70vh] overflow-hidden"
      style={{ zIndex: 1, backgroundColor: "#23153c" }}
    >
      {/* Vanta.NET Animated Grid Background */}
      <Script
        src="/three.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/vanta.net.min.js"
        strategy="beforeInteractive"
      />
      <div
        id="vanta-hero"
        ref={vantaRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{ pointerEvents: "none" }}
      ></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        {/* New Headline & Subheadline */}
        {/* New Headline & Subheadline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: t("hero_title") }} />
        <div className="text-lg sm:text-2xl text-center max-w-2xl mb-8 text-gray-200">
          <span dangerouslySetInnerHTML={{ __html: t("hero_desc") }} />
        </div>
        <button
          onClick={() => {
            const bookingSection = document.getElementById("book-call");
            if (bookingSection) {
              bookingSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="w-full mt-6 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white text-2xl md:text-3xl font-extrabold shadow-lg hover:from-blue-500 hover:to-pink-500 transition-all duration-300 max-w-xl mx-auto"
          style={{ whiteSpace: "normal" }}
        >
          {t("book_my_free_call")}
        </button>
      </div>
    </section>
  );
}
