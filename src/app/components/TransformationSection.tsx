export {};

import React, { useState, useEffect, useRef } from "react";
import Script from "next/script";
import { useTranslation } from 'react-i18next';

export default function TransformationSection() {
  const { t } = useTranslation('common');
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<{
    destroy: () => void;
  } | null>(null);

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
          el: "#vanta-transformation",
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x23243a, // even darker color for less contrast
          backgroundColor: 0x23153c,
          points: 2.0, // minimum points
          maxDistance: 80.0, // much more spread out
          spacing: 60.0, // much more spacing
          showDots: false,
          opacity: 0.08, // very low opacity
        });
        setVantaEffect(effect);
      } else {
        setTimeout(initVanta, 100);
      }
    }
    initVanta();
    return () => {
      vantaEffect?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Script
        src="/three.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/vanta.net.min.js"
        strategy="beforeInteractive"
      />
      <section className="w-full py-20 px-2 bg-gradient-to-br from-[#181032] via-[#1a0a2f] to-[#0f1020] flex justify-center relative overflow-hidden">
        {/* Vanta Globe Animated Background */}
        <div
          ref={vantaRef}
          id="vanta-transformation"
          className="absolute inset-0 w-full h-full z-0"
        />
        {/* Main Content */}
        <div className="w-full max-w-5xl flex flex-col gap-8 relative z-10">
          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-6" dangerouslySetInnerHTML={{ __html: t('transformation_headline') }} />
            <div className="w-36 h-1 mx-auto mt-2 bg-gradient-to-r from-blue-400 via-fuchsia-400 to-purple-400 rounded-full"></div>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Card */}
            <div className="flex-1 bg-gradient-to-br from-[#21274a] to-[#181c2f] rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center min-w-[260px]">
              <div className="mb-4 flex justify-center items-center">
                <img
                  src="/icons/MyLogo.png"
                  alt="SmartPro AI Logo"
                  width={160}
                  height={160}
                  className="object-contain"
                  loading="eager"
                />
              </div>
              <div
                className="text-3xl font-extrabold mb-1 bg-gradient-to-r from-white via-purple-400 to-blue-400 bg-clip-text text-transparent text-center"
                style={{ letterSpacing: "0.01em" }}
                dangerouslySetInnerHTML={{ __html: t('transformation_left_title') }}
              />
              <div className="text-blue-400 font-semibold mb-6">
                {t('transformation_left_role')}
              </div>
              <div className="w-full flex flex-col gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">{t('transformation_left_experience')}</span>{" "}
                  <span className="font-bold text-white">{t('transformation_left_experience_value')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">{t('transformation_left_expertise')}</span>
                  <span className="font-bold text-white text-right w-full block">
                    {t('transformation_left_expertise_value')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">{t('transformation_left_cost_savings')}</span>{" "}
                  <span className="font-bold text-green-400">{t('transformation_left_cost_savings_value')}</span>
                </div>
              </div>
            </div>
            {/* Problem & Solution Cards */}
            <div className="flex-[2] flex flex-col gap-6">
              <div className="bg-gradient-to-br from-[#4b1e2f] to-[#2c1222] rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-400 text-xl">&#9888;</span>
                  <span className="text-lg font-bold text-fuchsia-400">
                    {t('transformation_problems_title')}
                  </span>
                </div>
                <div className="text-gray-200 text-base" dangerouslySetInnerHTML={{ __html: t('transformation_problems_desc') }} />
              </div>
              <div className="bg-gradient-to-br from-[#232a4a] to-[#181c2f] rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-blue-400 text-xl mr-2">🧠</span>
                  <span className="text-lg font-bold text-green-400">
                    {t('transformation_left_our_solutions')}
                  </span>
                </div>
                <div className="text-gray-200 text-base mb-4" dangerouslySetInnerHTML={{ __html: t('transformation_left_desc') }} />
                <div className="flex gap-4">
                  <div className="flex-1 bg-[#22253c] rounded-xl py-4 flex flex-col items-center">
                    <div className="text-2xl font-bold text-blue-400">{t('transformation_left_247')}</div>
                    <div className="text-gray-300 text-sm">
                      {t('transformation_left_247_desc')}
                    </div>
                  </div>
                  <div className="flex-1 bg-[#22253c] rounded-xl py-4 flex flex-col items-center">
                    <div className="text-2xl font-bold text-green-400">{t('transformation_left_savings')}</div>
                    <div className="text-gray-300 text-sm">
                      {t('transformation_left_savings_desc')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Expertise Areas */}
          <div className="w-full mt-4">
            <div className="bg-gradient-to-br from-[#21274a] to-[#181c2f] rounded-2xl p-6 flex flex-col sm:flex-row flex-wrap justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-12 shadow-lg">
              <div className="flex-1 flex items-center gap-2 justify-center">
                <span className="inline-block w-3 h-3 rounded-full bg-purple-400 shrink-0"></span>
                <span className="text-white font-medium whitespace-nowrap">
                  {t('transformation_expertise1')}
                </span>
              </div>
              <div className="flex-1 flex items-center gap-2 justify-center">
                <span className="inline-block w-3 h-3 rounded-full bg-blue-400 shrink-0"></span>
                <span className="text-white font-medium whitespace-nowrap">
                  {t('transformation_expertise2')}
                </span>
              </div>
              <div className="flex-1 flex items-center gap-2 justify-center">
                <span className="inline-block w-3 h-3 rounded-full bg-green-400 shrink-0"></span>
                <span className="text-white font-medium whitespace-nowrap">
                  {t('transformation_expertise3')}
                </span>
              </div>
              <div className="flex-1 flex items-center gap-2 justify-center last:ml-0">
                <span className="inline-block w-3 h-3 rounded-full bg-fuchsia-400 shrink-0"></span>
                <span className="text-white font-medium whitespace-nowrap">
                  {t('transformation_expertise4')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
