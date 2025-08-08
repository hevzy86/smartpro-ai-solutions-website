"use client";

import { useTranslation } from 'react-i18next';

export default function FAQSection() {
  const { t } = useTranslation('common');
  return (
    <section id="faq" className="w-full flex justify-center items-center py-16 px-2">
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-white">
          {t('faq')}
        </h2>
        
        <div className="space-y-4">
          <details className="group rounded-lg overflow-hidden text-white">
            <summary className="cursor-pointer px-6 py-4 font-semibold text-lg bg-purple-800/80 group-open:bg-purple-900 transition flex items-center justify-between">
              {t('faq_q1')}
              <span className="ml-2 text-xl">▾</span>
            </summary>
            <div className="bg-[#181c2f] px-6 py-4 text-gray-200">
              {t('faq_a1')}
            </div>
          </details>
          
          <details className="group rounded-lg overflow-hidden text-white">
            <summary className="cursor-pointer px-6 py-4 font-semibold text-lg bg-purple-800/80 group-open:bg-purple-900 transition flex items-center justify-between">
              {t('faq_q2')}
              <span className="ml-2 text-xl">▾</span>
            </summary>
            <div className="bg-[#181c2f] px-6 py-4 text-gray-200">
              {t('faq_a2')}
            </div>
          </details>
          
          <details className="group rounded-lg overflow-hidden text-white">
            <summary className="cursor-pointer px-6 py-4 font-semibold text-lg bg-purple-800/80 group-open:bg-purple-900 transition flex items-center justify-between">
              {t('faq_q3')}
              <span className="ml-2 text-xl">▾</span>
            </summary>
            <div className="bg-[#181c2f] px-6 py-4 text-gray-200">
              {t('faq_a3')}
            </div>
          </details>
          
          <details className="group rounded-lg overflow-hidden text-white">
            <summary className="cursor-pointer px-6 py-4 font-semibold text-lg bg-purple-800/80 group-open:bg-purple-900 transition flex items-center justify-between">
              {t('faq_q4')}
              <span className="ml-2 text-xl">▾</span>
            </summary>
            <div className="bg-[#181c2f] px-6 py-4 text-gray-200">
              {t('faq_a4')}
            </div>
          </details>
          
          <details className="group rounded-lg overflow-hidden text-white">
            <summary className="cursor-pointer px-6 py-4 font-semibold text-lg bg-purple-800/80 group-open:bg-purple-900 transition flex items-center justify-between">
              {t('faq_q5')}
              <span className="ml-2 text-xl">▾</span>
            </summary>
            <div className="bg-[#181c2f] px-6 py-4 text-gray-200">
              {t('faq_a5')}
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
