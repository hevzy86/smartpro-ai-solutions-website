export default function TechnologySection() {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-[#181032] via-[#1a0a2f] to-[#0f1020]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">Built with Cutting-Edge Technology</h2>
        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          We leverage the latest AI and web technologies to deliver exceptional results for our clients
        </p>
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-12 min-w-[700px] md:min-w-[900px] lg:min-w-[1100px] px-2">
            {/* n8n */}
            <div className="flex flex-col items-center min-w-[120px]">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-300 flex items-center justify-center mb-2 shadow-xl shadow-pink-500/40" style={{ boxShadow: '0 0 32px 8px #a21caf44' }}>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="56" height="56"><title>n8n</title><path fill="#fff" d="M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623a1.263 1.263 0 0 1 1.2459-1.0555h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263m0 1.2632a1.263 1.263 0 0 1 1.2631 1.2631 1.263 1.263 0 0 1-1.2631 1.2632 1.263 1.263 0 0 1-1.2632-1.2632 1.263 1.263 0 0 1 1.2632-1.2631M2.5263 10.7368A1.263 1.263 0 0 1 3.7895 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 1.2632 12a1.263 1.263 0 0 1 1.2631-1.2632m6.3158 0A1.263 1.263 0 0 1 10.1053 12a1.263 1.263 0 0 1-1.2632 1.2632A1.263 1.263 0 0 1 7.579 12a1.263 1.263 0 0 1 1.2632-1.2632m10.1053 3.7895a1.263 1.263 0 0 1 1.2631 1.2632 1.263 1.263 0 0 1-1.2631 1.2631 1.263 1.263 0 0 1-1.2632-1.2631 1.263 1.263 0 0 1 1.2632-1.2632"/></svg>
              </div>
              <span className="text-white font-semibold mt-1 text-center text-sm">n8n</span>
            </div>
            {/* Next.js */}
            <div className="flex flex-col items-center min-w-[120px]">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-400 flex items-center justify-center mb-2 shadow-xl shadow-gray-500/40" style={{ boxShadow: '0 0 32px 8px #88888844' }}>
                <svg width="56" height="56" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><circle cx="128" cy="128" r="128" fill="#fff"/><path d="M 71.8 133.9 C 71.8 134.7 71.7 135.5 71.7 136.3 C 71.7 156.6 87.6 172.5 107.9 172.5 C 123.5 172.5 135.6 163.3 139.7 150.2 L 128.6 146.6 C 126.5 152.9 120.1 157.5 112.5 157.5 C 104.7 157.5 98.2 151 98.2 143.2 C 98.2 135.4 104.7 128.9 112.5 128.9 C 117.1 128.9 121.1 131.2 123.3 134.8 L 134.2 131.2 C 130.6 123.6 122.5 118.2 112.5 118.2 C 92.2 118.2 76.3 134.1 76.3 154.4 C 76.3 174.7 92.2 190.6 112.5 190.6 C 132.8 190.6 148.7 174.7 148.7 154.4 C 148.7 134.1 132.8 118.2 112.5 118.2 C 92.2 118.2 76.3 134.1 76.3 154.4 C 76.3 174.7 92.2 190.6 112.5 190.6 C 132.8 190.6 148.7 174.7 148.7 154.4 C 148.7 134.1 132.8 118.2 112.5 118.2 Z" fill="#000"/><path d="M 193.5 128.7 C 193.5 148.9 177.6 164.8 157.3 164.8 C 137 164.8 121.1 148.9 121.1 128.7 C 121.1 108.4 137 92.5 157.3 92.5 C 177.6 92.5 193.5 108.4 193.5 128.7 Z" fill="#000"/></svg>
              </div>
              <span className="text-white font-semibold mt-1 text-center text-sm">Next.js</span>
            </div>
            {/* MySQL */}
            <div className="flex flex-col items-center min-w-[120px]">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-2 shadow-xl shadow-blue-500/40" style={{ boxShadow: '0 0 32px 8px #06b6d444' }}>
                <svg width="56" height="56" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g><ellipse cx="128" cy="128" rx="128" ry="128" fill="#fff"/><path d="M128 42C78.2 42 37 83.2 37 133c0 49.8 41.2 91 91 91s91-41.2 91-91c0-49.8-41.2-91-91-91zm0 167c-41.9 0-76-34.1-76-76s34.1-76 76-76 76 34.1 76 76-34.1 76-76 76zm0-137c-33.7 0-61 27.3-61 61s27.3 61 61 61 61-27.3 61-61-27.3-61-61-61zm0 112c-28.1 0-51-22.9-51-51s22.9-51 51-51 51 22.9 51 51-22.9 51-51 51z" fill="#00758f"/></g></svg>
              </div>
              <span className="text-white font-semibold mt-1 text-center text-sm">MySQL</span>
            </div>
            {/* Python */}
            <div className="flex flex-col items-center min-w-[120px]">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-yellow-400 to-green-400 flex items-center justify-center mb-2 shadow-xl shadow-yellow-400/40" style={{ boxShadow: '0 0 32px 8px #facc1544' }}>
                <svg width="56" height="56" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g><ellipse cx="128" cy="128" rx="128" ry="128" fill="#fff"/><path d="M178.6 128.1c0-10.2-8.3-18.5-18.5-18.5h-44.2c-10.2 0-18.5 8.3-18.5 18.5v44.2c0 10.2 8.3 18.5 18.5 18.5h44.2c10.2 0 18.5-8.3 18.5-18.5v-44.2zm-62.7 0c0-5.4 4.4-9.8 9.8-9.8h44.2c5.4 0 9.8 4.4 9.8 9.8v44.2c0 5.4-4.4 9.8-9.8 9.8h-44.2c-5.4 0-9.8-4.4-9.8-9.8v-44.2z" fill="#3776ab"/></g></svg>
              </div>
              <span className="text-white font-semibold mt-1 text-center text-sm">Python</span>
            </div>
            {/* React Native */}
            <div className="flex flex-col items-center min-w-[120px]">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-2 shadow-xl shadow-blue-400/40" style={{ boxShadow: '0 0 32px 8px #3b82f644' }}>
                <svg width="56" height="56" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g><ellipse cx="128" cy="128" rx="128" ry="128" fill="#fff"/><path d="M128 56c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm0 132c-33.1 0-60-26.9-60-60s26.9-60 60-60 60 26.9 60 60-26.9 60-60 60zm0-109.1c-27.1 0-49.1 22-49.1 49.1s22 49.1 49.1 49.1 49.1-22 49.1-49.1-22-49.1-49.1-49.1zm0 86.2c-20.5 0-37.1-16.6-37.1-37.1s16.6-37.1 37.1-37.1 37.1 16.6 37.1 37.1-16.6 37.1-37.1 37.1z" fill="#61dafb"/></g></svg>
              </div>
              <span className="text-white font-semibold mt-1 text-center text-sm">React Native</span>
            </div>
            {/* Vapi */}
            <div className="flex flex-col items-center min-w-[120px]">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center mb-2 shadow-xl shadow-green-400/40" style={{ boxShadow: '0 0 32px 8px #34d39944' }}>
                <svg width="56" height="56" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g><ellipse cx="128" cy="128" rx="128" ry="128" fill="#fff"/><text x="50%" y="50%" textAnchor="middle" fill="#14f1c6" dy=".3em" fontSize="32" fontFamily="Arial, Helvetica, sans-serif">VAPI</text></g></svg>
              </div>
              <span className="text-white font-semibold mt-1 text-center text-sm">Vapi</span>
            </div>
            {/* Retell */}
            <div className="flex flex-col items-center min-w-[120px]">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-700 to-fuchsia-400 flex items-center justify-center mb-2 shadow-xl shadow-purple-500/40" style={{ boxShadow: '0 0 32px 8px #a21caf44' }}>
                <svg width="56" height="56" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g><ellipse cx="128" cy="128" rx="128" ry="128" fill="#fff"/><text x="50%" y="50%" textAnchor="middle" fill="#6d28d9" dy=".3em" fontSize="22" fontFamily="Arial, Helvetica, sans-serif">Retell AI</text></g></svg>
              </div>
              <span className="text-white font-semibold mt-1 text-center text-sm">Retell</span>
            </div>
            {/* Angular */}
            <div className="flex flex-col items-center min-w-[120px]">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-red-400 to-orange-400 flex items-center justify-center mb-2 shadow-xl shadow-red-400/40" style={{ boxShadow: '0 0 32px 8px #f8717144' }}>
                <svg width="56" height="56" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g><ellipse cx="128" cy="128" rx="128" ry="128" fill="#fff"/><path d="M128 36l89.6 154.9H38.4L128 36zm0 22.3L56.2 172.9h143.6L128 58.3zm0 19.1l47.3 82.5H80.7L128 77.4z" fill="#fff"/><path d="M128 36l89.6 154.9H38.4L128 36zm0 22.3L56.2 172.9h143.6L128 58.3zm0 19.1l47.3 82.5H80.7L128 77.4z" fill="#e44d26"/></g></svg>
              </div>
              <span className="text-white font-semibold mt-1 text-center text-sm">Angular</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
