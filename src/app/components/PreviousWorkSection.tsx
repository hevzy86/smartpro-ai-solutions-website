export default function PreviousWorkSection() {
  const companies = [
    { name: 'Zeta', logo: '/placeholder-logo.svg' },
    { name: 'Reclaimit', logo: '/placeholder-logo.svg' },
    { name: 'Zenta', logo: '/placeholder-logo.svg' },
    { name: 'Ekonova', logo: '/placeholder-logo.svg' },
    { name: 'Future City Flow', logo: '/placeholder-logo.svg' },
    { name: 'AnotherCo', logo: '/placeholder-logo.svg' },
  ];

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-[#181032] via-[#1a0a2f] to-[#0f1020]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">Previous Work Experience</h2>
        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          I've worked with leading companies across various industries, delivering innovative solutions and building robust systems
        </p>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-8 min-w-[600px] md:min-w-[900px] lg:min-w-[1100px] px-2">
            {companies.map((company) => (
              <div key={company.name} className="flex flex-col items-center min-w-[120px]">
                <div className="w-24 h-24 rounded-xl bg-white flex items-center justify-center shadow-lg mb-2 ring-4 ring-fuchsia-500/40 ring-offset-2 ring-offset-[#1a0a2f]" style={{ boxShadow: '0 0 24px 8px #a21caf44' }}>
                  {/* Placeholder logo, swap with <Image /> for real logos */}
                  <span className="text-lg font-bold text-gray-700">{company.name[0]}</span>
                </div>
                <span className="text-white font-semibold mt-1 text-center text-sm">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
