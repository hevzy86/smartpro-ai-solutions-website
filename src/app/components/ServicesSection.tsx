"use client";

import { useEffect, useState, useRef } from "react";
import { useTranslation } from 'react-i18next';

export default function ServicesSection() {
  const { t } = useTranslation('common');
  return (
    <section
      id="services"
      className="relative w-full py-24 px-4 bg-[#181032] overflow-hidden"
    >
      {/* Content above Vanta Globe */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div
            className="w-full h-full bg-grid-pattern opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
        <h3 className="text-4xl font-extrabold text-center mb-3">
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">
            {t('services')}
          </span>
        </h3>
        <p className="text-center text-gray-300 mb-14 max-w-2xl mx-auto">
          {t('services_intro')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-[#1a1a2e] rounded-2xl p-8 shadow-2xl flex flex-col h-full border border-green-500/30 shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300">
            <div className="mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 8V4H8"></path>
                  <rect
                    width="16"
                    height="12"
                    x="4"
                    y="8"
                    rx="2"
                  ></rect>
                  <path d="M2 14h2"></path>
                  <path d="M20 14h2"></path>
                  <path d="M15 13v2"></path>
                  <path d="M9 13v2"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-white text-2xl font-bold mb-4">
              {t('services_card1_title')}
            </h3>
            <p className="text-gray-300 text-lg mb-4 font-medium">
              {t('services_card1_subtitle')}
            </p>
            <div className="flex-grow">
              <p className="text-gray-400 mb-8 leading-relaxed">
                {t('services_card1_desc')}
              </p>
            </div>
            <ul className="text-green-300 font-medium space-y-2 list-disc list-outside ml-5 mt-auto">
              <li>{t('services_card1_point1')}</li>
              <li>{t('services_card1_point2')}</li>
              <li>{t('services_card1_point3')}</li>
              <li>{t('services_card1_point4')}</li>
            </ul>
          </div>
          {/* Card 2 */}
          <div className="bg-[#1a1a2e] rounded-2xl p-8 shadow-2xl flex flex-col h-full border border-yellow-500/30 shadow-yellow-500/20 hover:shadow-yellow-500/40 transition-all duration-300">
            <div className="mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#facc15"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    fill="#facc15"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-white text-2xl font-bold mb-4">
              {t('services_card2_title')}
            </h3>
            <p className="text-gray-300 text-lg mb-4 font-medium">
              {t('services_card2_subtitle')}
            </p>
            <div className="flex-grow">
              <p className="text-gray-400 mb-8 leading-relaxed">
                {t('services_card2_desc')}
              </p>
            </div>
            <ul className="text-yellow-300 font-medium space-y-2 list-disc list-outside ml-5 mt-auto">
              <li>{t('services_card2_point1')}</li>
              <li>{t('services_card2_point2')}</li>
              <li>{t('services_card2_point3')}</li>
              <li>{t('services_card2_point4')}</li>
            </ul>
          </div>
          {/* Card 3 */}
          <div className="bg-[#1a1a2e] rounded-2xl p-8 shadow-2xl flex flex-col h-full border border-blue-500/30 shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300">
            <div className="mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="3"
                  ></rect>
                  <path d="M8 8h8v8H8z"></path>
                </svg>
              </div>
            </div>
            <h3 className="text-white text-2xl font-bold mb-4">
              {t('services_card3_title')}
            </h3>
            <p className="text-gray-300 text-lg mb-4 font-medium">
              {t('services_card3_subtitle')}
            </p>
            <div className="flex-grow">
              <p className="text-gray-400 mb-8 leading-relaxed">
                {t('services_card3_desc')}
              </p>
            </div>
            <ul className="text-blue-300 font-medium space-y-2 list-disc list-outside ml-5 mt-auto">
              <li>{t('services_card3_point1')}</li>
              <li>{t('services_card3_point2')}</li>
              <li>{t('services_card3_point3')}</li>
              <li>{t('services_card3_point4')}</li>
            </ul>
          </div>
          {/* Card 4 */}
          <div className="bg-[#1a1a2e] rounded-2xl p-8 shadow-2xl flex flex-col h-full border border-purple-500/30 shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300">
            <div className="mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d6aaff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="2"
                    fill="none"
                    stroke="#d6aaff"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-white text-2xl font-bold mb-4">
              {t('services_card4_title')}
            </h3>
            <p className="text-gray-300 text-lg mb-4 font-medium">
              {t('services_card4_subtitle')}
            </p>
            <div className="flex-grow">
              <p className="text-gray-400 mb-8 leading-relaxed">
                {t('services_card4_desc')}
              </p>
            </div>
            <ul className="text-purple-300 font-medium space-y-2 list-disc list-outside ml-5 mt-auto">
              <li>{t('services_card4_point1')}</li>
              <li>{t('services_card4_point2')}</li>
              <li>{t('services_card4_point3')}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
