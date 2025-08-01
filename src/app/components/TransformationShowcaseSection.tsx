"use client";

export default function TransformationShowcaseSection() {
  return (
    <section className="w-full flex justify-center items-center py-16 px-2">
      <div className="w-full max-w-4xl bg-[#181c2f] bg-opacity-95 rounded-2xl shadow-2xl p-8 md:p-12 border border-[#262a40] relative">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          TRANSFORMATION <span className="text-green-400 drop-shadow-[0_2px_8px_rgba(34,197,94,0.7)]">SHOWCASE</span>
        </h2>
        
        {/* VoiceScale AI Profile Card */}
        <div className="bg-gradient-to-br from-[#1a1d35] to-[#252847] rounded-2xl p-8 border border-[#2c314f] shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar and Basic Info */}
            <div className="flex flex-col items-center text-center md:text-left">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
  <img
    src="/image_with_text.png"
    alt="Profile Icon"
    width={96}
    height={96}
    className="object-cover w-full h-full"
    loading="eager"
  />
</div>
              <h3 className="text-2xl font-bold text-white mb-2">VoiceScale AI</h3>
              <p className="text-green-400 font-semibold mb-2">AI Sales Agent</p>
              <div className="flex items-center gap-2 text-gray-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Available 24/7 Globally</span>
              </div>
            </div>
            
            {/* Stats and Capabilities */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#23253c] rounded-lg p-4 border border-[#2c314f]">
                <h4 className="text-lg font-semibold text-white mb-2">Performance Stats</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 95% Call Success Rate</li>
                  <li>• 2.3s Average Response Time</li>
                  <li>• 40% Conversion Rate</li>
                  <li>• 99.9% Uptime</li>
                </ul>
              </div>
              
              <div className="bg-[#23253c] rounded-lg p-4 border border-[#2c314f]">
                <h4 className="text-lg font-semibold text-white mb-2">Capabilities</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Multi-language Support</li>
                  <li>• CRM Integration</li>
                  <li>• Real-time Analytics</li>
                  <li>• Custom Voice Training</li>
                </ul>
              </div>
              
              <div className="bg-[#23253c] rounded-lg p-4 border border-[#2c314f] md:col-span-2">
                <h4 className="text-lg font-semibold text-white mb-2">Recent Achievement</h4>
                <p className="text-sm text-gray-300">
                  &quot;Generated $2.4M in qualified leads for a SaaS client in Q4 2023, 
                  with a 300% ROI compared to their previous human agent setup.&quot;
                </p>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 hover:from-fuchsia-500 hover:to-blue-500 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition">
              See Demo
            </button>
            <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold px-8 py-3 rounded-lg transition">
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
