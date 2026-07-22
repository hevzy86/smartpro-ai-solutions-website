"use client";
import { useState } from "react";
import Link from "next/link";

const API = "https://app.smartproaisolutions.com/api/testimonials";

export default function ReviewPage() {
  const [rating, setRating] = useState(5);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const f = e.currentTarget;
    const data = {
      name: (f.elements.namedItem("name") as HTMLInputElement).value,
      company: (f.elements.namedItem("company") as HTMLInputElement).value,
      city: (f.elements.namedItem("city") as HTMLInputElement).value,
      industry: (f.elements.namedItem("industry") as HTMLInputElement).value,
      problem: (f.elements.namedItem("problem") as HTMLTextAreaElement).value,
      solution: (f.elements.namedItem("solution") as HTMLTextAreaElement).value,
      result_metric: (f.elements.namedItem("result_metric") as HTMLInputElement).value,
      consent: (f.elements.namedItem("consent") as HTMLInputElement).checked,
      website: (f.elements.namedItem("website") as HTMLInputElement).value, // honeypot
      rating,
    };
    try {
      const r = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!r.ok) {
        const j = await r.json().catch(() => ({}));
        setErrorMsg(j.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("done");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  const inputCls =
    "w-full rounded-lg bg-white/5 border border-white/15 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400";

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1020] via-[#18123a] to-[#1a0a2f] text-white">
      <div className="max-w-xl mx-auto px-4 py-12">
        <Link href="/" className="text-blue-400 text-sm hover:underline">← smartproaisolutions.io</Link>

        {status === "done" ? (
          <div className="mt-10 text-center">
            <div className="text-5xl mb-4">🙏</div>
            <h1 className="text-3xl font-extrabold mb-3">Thank you!</h1>
            <p className="text-gray-300">
              Your review has been sent for review. We really appreciate you taking the time.
            </p>
            <Link
              href="/"
              className="inline-block mt-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 px-8 py-3 font-semibold"
            >
              Back to site
            </Link>
          </div>
        ) : (
          <>
            <h1 className="text-3xl sm:text-4xl font-extrabold mt-6 mb-2">Leave a review</h1>
            <p className="text-gray-300 mb-8">
              Takes 2 minutes. Please be specific — what was the problem, and what changed?
            </p>

            <form onSubmit={onSubmit} className="space-y-5">
              {/* honeypot: hidden from humans, bots fill it */}
              <input
                type="text" name="website" tabIndex={-1} autoComplete="off"
                className="hidden" aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="name" required placeholder="Your name *" className={inputCls} />
                <input name="company" placeholder="Business name" className={inputCls} />
                <input name="city" placeholder="City, State" className={inputCls} />
                <input name="industry" placeholder="Type of business (e.g. Roofing)" className={inputCls} />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Rating</label>
                <div className="flex gap-1 text-3xl">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n} type="button" onClick={() => setRating(n)}
                      className={n <= rating ? "text-yellow-400" : "text-gray-600"}
                      aria-label={`${n} stars`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                name="problem" rows={2} className={inputCls}
                placeholder="What was the problem before SmartPro? (e.g. missing calls when on a job)"
              />
              <textarea
                name="solution" required rows={2} className={inputCls}
                placeholder="What does SmartPro do for you now? *"
              />
              <input
                name="result_metric" className={inputCls}
                placeholder="Any specific result? (e.g. 5 extra jobs booked last month)"
              />

              <label className="flex items-start gap-3 text-sm text-gray-300">
                <input type="checkbox" name="consent" required className="mt-1" />
                <span>I allow SmartPro AI Solutions to publish this review with my name, business, and city on their website.</span>
              </label>

              {status === "error" && <p className="text-red-400 text-sm">{errorMsg}</p>}

              <button
                type="submit" disabled={status === "sending"}
                className="w-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 px-8 py-4 font-semibold disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Submit review"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
