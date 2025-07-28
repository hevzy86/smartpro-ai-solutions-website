export default function BookingSection() {
  return (
    <section id="book-call" className="w-full py-24 px-4 bg-gradient-to-br from-[#2a1842] via-[#181032] to-[#1a0a2f] flex flex-col items-center">
      <h2 className="text-4xl font-extrabold text-center mb-3">Book Your Free Strategy Call</h2>
      <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
        Discover how our AI-powered strategies can transform your business. Schedule a personalized consultation to unlock your company's full potential – <span className="font-bold text-white">100% Free, No Obligations.</span>
      </p>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-3xl md:max-w-4xl rounded-2xl shadow-2xl bg-[#181c2f] overflow-hidden">
          <div id="my-cal-inline-30-min-ai-meeting" style={{ width: '100%', minHeight: '700px', overflow: 'auto' }} />
        </div>
      </div>
    </section>
  );
}
