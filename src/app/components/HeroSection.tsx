export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center pt-16 pb-24 px-4 min-h-[70vh]">
      {/* Logo */}
      <div className="absolute left-0 top-0 p-6">
        <span className="text-2xl font-bold select-none">
          Voice<span className="bg-gradient-to-r from-white via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">ScaleAI</span>
        </span>
      </div>
      {/* Headline */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6 leading-tight">
        Stop <span className="text-red-400 drop-shadow-[0_2px_8px_rgba(255,0,0,0.6)]">bleeding</span> money on customer<br className="hidden md:block" />
        support with our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_2px_12px_rgba(0,255,255,0.7)]">AI Voice Agents</span>
      </h1>
      {/* Subheadline */}
      <p className="text-lg sm:text-2xl text-center max-w-2xl mb-8 text-gray-200">
        Tired of call center <span className="text-red-400">drama</span>? Our AI agents work <span className="text-yellow-300 font-bold">24/7</span>, never quit, and cut <span className="text-green-400 font-bold">costs</span> by <span className="text-blue-400 font-bold">70%</span>.
      </p>
      {/* CTA Button */}
      <a
        href="#book-call"
        className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 hover:from-fuchsia-500 hover:to-blue-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition border-2 border-purple-400"
      >
        Book Your Free Strategy Call
      </a>
    </section>
  );
}
