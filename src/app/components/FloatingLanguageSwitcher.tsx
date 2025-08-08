"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import i18n from '../i18n';

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];

export default function FloatingLanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Определяем текущий язык из URL (lng=)
  let currentLang = searchParams.get("lng") || "en";
  if (!LANGUAGES.some(l => l.code === currentLang)) currentLang = "en";

  // Закрытие меню при клике вне
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Смена языка с сохранением query

  const handleSelect = (code: string) => {
    setOpen(false);
    i18n.changeLanguage(code);
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set("lng", code);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div
      ref={ref}
      className="z-[999999999] fixed bottom-4 left-4 md:bottom-6 md:left-10 flex flex-col items-start"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 rounded-full px-6 py-4 shadow-lg text-white font-semibold text-base hover:scale-105 transition focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50 active:scale-95"
        style={{ minWidth: 80 }}
        aria-haspopup="listbox"
        aria-expanded={open}
      >

        <span className="font-semibold leading-5 antialiased">{LANGUAGES.find(l => l.code === currentLang)?.label || "EN"}</span>
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="mt-2 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 rounded-xl shadow-lg py-2 px-2 flex flex-col gap-2 animate-fade-in z-50 border border-gray-700">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full text-left rounded-lg px-4 py-2 font-semibold transition-colors ${currentLang === lang.code ? "bg-blue-600 text-white" : "text-gray-200 hover:bg-blue-500/70"}`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
