"use client";
import { useTranslation } from "react-i18next";

function scrollToBooking() {
  document.getElementById("book-call")?.scrollIntoView({ behavior: "smooth" });
}

export default function ResultsSection() {
  const { t } = useTranslation("common");

  const stats = [
    { value: "$20,000+", accent: "text-fuchsia-400", label: t("results_stat1_label") },
    { value: "24/7", accent: "text-blue-400", label: t("results_stat2_label") },
    { value: "< 5 sec", accent: "text-green-400", label: t("results_stat3_label") },
    { value: "40% → 3%", accent: "text-purple-400", label: t("results_stat4_label") },
  ];

  return (
    <section id="results" className="w-full px-4 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="text-2xl sm:text-4xl font-extrabold text-white mb-4 leading-tight"
          dangerouslySetInnerHTML={{ __html: t("results_heading") }}
        />
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-12">
          {t("results_sub")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur transition hover:border-white/25 hover:bg-white/[0.08]"
            >
              <div className={`text-3xl sm:text-4xl font-extrabold mb-3 ${s.accent}`}>
                {s.value}
              </div>
              <div className="text-sm text-gray-300 leading-relaxed">{s.label}</div>
            </div>
          ))}
        </div>

        <button
          onClick={scrollToBooking}
          className="rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 px-8 py-4 text-base font-semibold text-white drop-shadow-md transition hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-500/40"
        >
          {t("book_my_free_call")}
        </button>
      </div>
    </section>
  );
}
