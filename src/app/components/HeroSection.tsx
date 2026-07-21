import { useRef, useEffect, useState } from "react";
import Script from "next/script";
import { useTranslation } from "react-i18next";

// Maps the ?industry= param (raw slug from cold-email UTM, e.g. "roofing-contractors")
// to a noun that fits the headline "Never miss another ___ again."
// Falls back to a generic noun for direct visits or unknown industries.
function getHeroNoun(param: string | null, lang: string): string {
  const fallback = lang === "ru" ? "клиента" : "customer";
  if (!param || lang === "ru") return fallback;
  const s = param.toLowerCase();
  if (s.includes("roof")) return "roofing job";
  if (/hvac|heat|air|cooling/.test(s)) return "service call";
  if (s.includes("plumb")) return "plumbing job";
  if (/restaurant|food|cafe|pizza|dining/.test(s)) return "reservation";
  if (/salon|barber|spa|hair|nail|beauty/.test(s)) return "booking";
  if (/auto|car|dealer|motor/.test(s)) return "sale";
  if (/dent|medical|clinic|doctor|health/.test(s)) return "appointment";
  if (/clean|maid/.test(s)) return "cleaning job";
  return fallback;
}

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function HeroSection() {
  const { t, i18n } = useTranslation("common");
  const [noun, setNoun] = useState(() => getHeroNoun(null, "en"));
  const vantaRef = useRef<HTMLDivElement>(null);

  // Read ?industry= on the client after mount (avoids SSR/hydration mismatch).
  useEffect(() => {
    const industry = new URLSearchParams(window.location.search).get("industry");
    setNoun(getHeroNoun(industry, i18n.language));
  }, [i18n.language]);
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
        <h1
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6 leading-tight"
          dangerouslySetInnerHTML={{ __html: t("hero_title", { noun }) }}
        />
        <div className="text-lg sm:text-2xl text-center max-w-2xl mb-10 text-gray-200">
          <span dangerouslySetInnerHTML={{ __html: t("hero_desc") }} />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => scrollToId("book-call")}
            className="rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 px-8 py-4 text-base font-semibold text-white drop-shadow-md transition hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-500/40"
          >
            {t("book_my_free_call")}
          </button>
          <button
            onClick={() => scrollToId("prototypes-showcase")}
            className="rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-white/20"
          >
            {t("hero_see_in_action")}
          </button>
        </div>
      </div>
    </section>
  );
}
