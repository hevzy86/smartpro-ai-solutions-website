"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const API = "https://app.smartproaisolutions.com/api/testimonials";

interface Testimonial {
  id: number;
  name: string;
  company: string | null;
  city: string | null;
  rating: number | null;
  quote: string | null;
  result_metric: string | null;
}

export default function TestimonialsSection() {
  const { t } = useTranslation("common");
  const [items, setItems] = useState<Testimonial[]>([]);

  useEffect(() => {
    let alive = true;
    fetch(API)
      .then((r) => (r.ok ? r.json() : { testimonials: [] }))
      .then((d) => { if (alive) setItems(d.testimonials || []); })
      .catch(() => {});
    return () => { alive = false; };
  }, []);

  // Hide the whole section until there is at least one approved review.
  if (items.length === 0) return null;

  return (
    <section id="testimonials" className="w-full px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white text-center mb-3">
          {t("testimonials_heading")}
        </h2>
        <p className="text-base sm:text-lg text-gray-300 text-center mb-12">
          {t("testimonials_sub")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((r) => (
            <div
              key={r.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur flex flex-col"
            >
              <div className="text-yellow-400 text-lg mb-3">
                {"★".repeat(r.rating || 5)}
                <span className="text-gray-600">{"★".repeat(5 - (r.rating || 5))}</span>
              </div>
              {r.result_metric && (
                <div className="text-fuchsia-400 font-bold mb-2">{r.result_metric}</div>
              )}
              <p className="text-gray-200 leading-relaxed flex-1">“{r.quote}”</p>
              <div className="mt-4 text-sm text-gray-400">
                <span className="text-white font-semibold">{r.name}</span>
                {r.company ? ` · ${r.company}` : ""}
                {r.city ? ` · ${r.city}` : ""}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
