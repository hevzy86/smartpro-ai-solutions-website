"use client";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' }
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const handleChange = (lang: string) => {
    // сохраняем query параметры
    const params = new URLSearchParams(searchParams.toString());
    params.set('lng', lang);
    startTransition(() => {
      router.push(pathname + '?' + params.toString());
    });
  };

  const currentLang = searchParams.get('lng') || 'en';

  return (
    <div className="flex gap-2 items-center">
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => handleChange(code)}
          className={`px-3 py-1 rounded-md font-bold border transition-all duration-200 ${currentLang === code ? 'bg-blue-600 text-white border-blue-700' : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-blue-200'}`}
          disabled={isPending}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
