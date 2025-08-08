import { useRef, useEffect, useState } from "react";
import Script from "next/script";
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation('common');
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
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6 leading-tight">
          {t('hero_title')}
        </h1>
        <div className="text-lg sm:text-2xl text-center max-w-2xl mb-8 text-gray-200 flex flex-col gap-2">
          <div className="text-lg sm:text-2xl text-center max-w-2xl mb-8 text-gray-200 flex flex-col gap-2">
  <span>
    {t('hero_desc_2_part1')}
    <span className="text-yellow-300 font-bold drop-shadow-[0_2px_8px_rgba(250,204,21,0.7)]">{t('hero_desc_2_24_7')}</span>
    {t('hero_desc_2_part2')}
    <br />
    {t('hero_desc_2_part3')}
    <span className="text-green-400 font-bold">{t('hero_desc_2_support')}</span>.
  </span>
  <span>
    {t('hero_desc_3_part1')}
    <span className="text-purple-400 font-bold">{t('hero_desc_3_tasks')}</span>
    {t('hero_desc_3_part2')}
  </span>
  <span className="text-cyan-400 font-bold">
    {t('hero_desc_4')}
  </span>
</div>
          
        </div>
      </div>
    </section>
  );
}
