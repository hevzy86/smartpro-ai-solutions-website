export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-16 pb-24 px-4 min-h-[70vh]">
      {/* New Headline & Subheadline */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6 leading-tight">
        Start <span className="text-red-400 drop-shadow-[0_2px_8px_rgba(255,0,0,0.7)]">saving big</span> with <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text drop-shadow-[0_2px_12px_rgba(56,189,248,0.7)]">AI-powered support!</span>
      </h1>
      <div className="text-lg sm:text-2xl text-center max-w-2xl mb-8 text-gray-200 flex flex-col gap-2">
        <span>AI solutions work <span className="text-yellow-300 font-bold drop-shadow-[0_2px_8px_rgba(250,204,21,0.7)]">24/7</span>, never quit, never make mistakes, and dramatically reduce your <span className="text-green-400 font-bold drop-shadow-[0_2px_8px_rgba(34,197,94,0.7)]">support expenses</span>.</span>
        <span>They handle <span className="text-purple-400 font-bold drop-shadow-[0_2px_8px_rgba(192,132,252,0.7)]">repetitive tasks</span> for you — so your team can focus on what matters.</span>
        <span className="font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_2px_12px_rgba(56,189,248,0.7)]">Start saving today — bring AI into your business.</span>
      </div>
    </section>
  );
}
