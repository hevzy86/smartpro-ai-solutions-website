import NeonLogoIcon from "./NeonLogoIcon";

export default function TransformationSection() {
  return (
    <section className="w-full py-20 px-2 bg-gradient-to-br from-[#181032] via-[#1a0a2f] to-[#0f1020] flex justify-center">
      <div className="w-full max-w-5xl flex flex-col gap-8">
        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-6">
          Transform Your Business with <span className="bg-gradient-to-r from-blue-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">AI Innovation</span>
          <div className="w-36 h-1 mx-auto mt-2 bg-gradient-to-r from-blue-400 via-fuchsia-400 to-purple-400 rounded-full"></div>
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Card */}
          <div className="flex-1 bg-gradient-to-br from-[#21274a] to-[#181c2f] rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center min-w-[260px]">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-fuchsia-500 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-white">VS</span>
            </div>
            <div className="text-xl font-bold mb-1">SmartPro AI</div>
            <div className="text-blue-400 font-semibold mb-6">AI Solutions Architect</div>
            <div className="w-full flex flex-col gap-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-300">Experience</span> <span className="font-bold text-white">5+ Years</span></div>
              <div className="flex justify-between"><span className="text-gray-300">Expertise</span> <span className="font-bold text-white">Enterprise SaaS, Automation</span></div>
              <div className="flex justify-between"><span className="text-gray-300">Cost Savings</span> <span className="font-bold text-green-400">Up to 70%</span></div>
            </div>
          </div>
          {/* Problem & Solution Cards */}
          <div className="flex-[2] flex flex-col gap-6">
            <div className="bg-gradient-to-br from-[#4b1e2f] to-[#2c1222] rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-400 text-xl">&#9888;</span>
                <span className="text-lg font-bold text-fuchsia-400">The Problems We Solve</span>
              </div>
              <div className="text-gray-200 text-base">
                We help businesses integrate AI into their existing systems or build custom solutions from scratch. Our AI solutions automate repetitive tasks and <span className='text-green-400 font-semibold'>reduce costs</span> — so your team can focus on what <span className='text-fuchsia-400 font-semibold'>truly matters</span>.
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#232a4a] to-[#181c2f] rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-400 text-xl mr-2">🧠</span>
                <span className="text-lg font-bold text-green-400">Our Solutions</span>
              </div>
              <div className="text-gray-200 text-base mb-4">
                We deploy <span className="text-blue-400 font-semibold">AI Solutions</span> that deliver <span className="text-green-400 font-semibold">instant</span>, <span className="text-blue-400 font-semibold">reliable</span> customer interactions <span className="text-fuchsia-400 font-semibold">24/7</span>. Built on <span className="text-blue-400 font-semibold">enterprise-grade</span> architecture, our solutions <span className="text-green-400 font-semibold">reduce support costs</span> by up to <span className="text-green-400 font-semibold">70%</span> in the first month—<span className="text-blue-400 font-semibold">no downtime</span>, <span className="text-fuchsia-400 font-semibold">no mistakes</span>, <span className="text-blue-400 font-semibold">no limits</span>.
              </div>
              <div className="flex gap-4">
                <div className="flex-1 bg-[#22253c] rounded-xl py-4 flex flex-col items-center">
                  <div className="text-2xl font-bold text-blue-400">24/7</div>
                  <div className="text-gray-300 text-sm">Instant Response</div>
                </div>
                <div className="flex-1 bg-[#22253c] rounded-xl py-4 flex flex-col items-center">
                  <div className="text-2xl font-bold text-green-400">70%</div>
                  <div className="text-gray-300 text-sm">Up to 70% Cost Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Expertise Areas */}
        <div className="w-full mt-4">
  <div className="bg-gradient-to-br from-[#21274a] to-[#181c2f] rounded-2xl p-6 flex flex-row flex-nowrap justify-center items-center space-x-12 shadow-lg">
    <div className="flex-1 flex items-center gap-2 justify-center">
      <span className="inline-block w-3 h-3 rounded-full bg-purple-400 shrink-0"></span>
      <span className="text-white font-medium">Flexible SaaS Architecture</span>
    </div>
    <div className="flex-1 flex items-center gap-2 justify-center">
      <span className="inline-block w-3 h-3 rounded-full bg-blue-400 shrink-0"></span>
      <span className="text-white font-medium">AI Voice Agent Development</span>
    </div>
    <div className="flex-1 flex items-center gap-2 justify-center">
      <span className="inline-block w-3 h-3 rounded-full bg-green-400 shrink-0"></span>
      <span className="text-white font-medium">Business Automation</span>
    </div>
    <div className="flex-1 flex items-center gap-2 justify-center last:ml-0">
      <span className="inline-block w-3 h-3 rounded-full bg-fuchsia-400 shrink-0"></span>
      <span className="text-white font-medium">AI Integration</span>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}
