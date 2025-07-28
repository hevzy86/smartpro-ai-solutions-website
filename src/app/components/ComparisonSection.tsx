export default function ComparisonSection() {
  return (
    <section id="comparison" className="w-full flex justify-center items-center py-16 px-2">
      <div className="w-full max-w-3xl bg-[#181c2f] bg-opacity-95 rounded-2xl shadow-2xl p-8 md:p-12 border border-[#262a40] relative">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
          HUMAN AGENTS <span className="text-green-400 drop-shadow-[0_2px_8px_rgba(34,197,94,0.7)]">vs AI AGENTS</span>
        </h2>
        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Human Agent Monthly Cost ($)</label>
            <input type="number" className="w-full rounded-lg bg-[#23253c] border-none text-white px-4 py-2 text-lg focus:ring-2 focus:ring-purple-500" defaultValue={2000} />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Dial Attempts per Day</label>
            <input type="number" className="w-full rounded-lg bg-[#23253c] border-none text-white px-4 py-2 text-lg focus:ring-2 focus:ring-purple-500" defaultValue={250} />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Answer Rate (%)</label>
            <input type="number" className="w-full rounded-lg bg-[#23253c] border-none text-white px-4 py-2 text-lg focus:ring-2 focus:ring-purple-500" defaultValue={30} />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Avg. Call Duration (min)</label>
            <input type="number" className="w-full rounded-lg bg-[#23253c] border-none text-white px-4 py-2 text-lg focus:ring-2 focus:ring-purple-500" defaultValue={2} />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-2">Working Days per Month</label>
            <input type="number" className="w-full rounded-lg bg-[#23253c] border-none text-white px-4 py-2 text-lg focus:ring-2 focus:ring-purple-500" defaultValue={22} />
          </div>
        </div>
        {/* Compare Button */}
        <div className="flex justify-center mb-8">
          <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 hover:from-fuchsia-500 hover:to-blue-500 text-white font-bold px-8 py-2 rounded-lg shadow-lg text-lg border-2 border-purple-400 transition">
            Compare
          </button>
        </div>
        {/* Results Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-[#23253c] rounded-xl p-6 flex flex-col items-center border border-[#2c314f]">
            <div className="text-3xl font-bold text-red-400 mb-1">$2000</div>
            <div className="text-gray-300 mb-2">per month</div>
            <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
              <li>Fixed monthly cost regardless of call volume</li>
              <li>Limited scalability</li>
              <li>Variable quality and script adherence</li>
              <li>Human fatigue and turnover</li>
            </ul>
          </div>
          <div className="bg-[#23253c] rounded-xl p-6 flex flex-col items-center border border-[#2c314f]">
            <div className="text-3xl font-bold text-green-400 mb-1">$297</div>
            <div className="text-gray-300 mb-2">per month</div>
            <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
              <li>Pay only for actual talk time</li>
              <li>Unlimited scaling capability</li>
              <li>100% script consistency</li>
              <li>24/7 availability with no fatigue</li>
            </ul>
          </div>
        </div>
        {/* Savings Row */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-blue-600 rounded-xl text-center p-6 flex flex-col md:flex-row items-center justify-center gap-4">
            <span className="text-3xl font-bold text-white">$1703</span>
            <span className="text-lg text-white opacity-80">Absolute Savings</span>
            <span className="hidden md:block text-3xl text-white">|</span>
            <span className="text-3xl font-bold text-white">85%</span>
            <span className="text-lg text-white opacity-80">Cost Reduction</span>
          </div>
        </div>
        {/* Assumptions */}
        <div className="bg-[#23253c] rounded-xl p-4 text-gray-300 text-sm">
          <div className="font-semibold mb-2">Calculation Assumptions:</div>
          <ul className="list-disc list-inside space-y-1">
            <li>250 dial attempts per day (5,500 per month)</li>
            <li>30% answer rate (1,650 answered calls per month)</li>
            <li>Average call duration: 2 minutes</li>
            <li>Total AI minutes: 3,300 per month</li>
            <li>Working days: 22 per month</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
