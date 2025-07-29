export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-24 px-4 bg-[#181032] relative">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-grid-pattern opacity-30" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize:'40px 40px'}}></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-3">
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">Our Services</span>
        </h2>
        <p className="text-center text-gray-300 mb-14 max-w-2xl mx-auto">
          We turn ideas into profitable products using cutting-edge technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-[#1a1a2e] rounded-2xl p-8 shadow-2xl flex flex-col h-full border border-[#262a40]">
            {/* Green Robot Icon */}
            <div className="mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M12 8V4H8"></path>
                  <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                  <path d="M2 14h2"></path>
                  <path d="M20 14h2"></path>
                  <path d="M15 13v2"></path>
                  <path d="M9 13v2"></path>
                </svg>
              </div>
            </div>
            
            <h3 className="text-white text-2xl font-bold mb-4">AI-Powered Voice Agents</h3>
            
            <p className="text-gray-300 text-lg mb-4 font-medium">
              Get a 24/7 AI receptionist for your business.
            </p>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              Smart voice agents that handle client calls, schedule appointments, and answer questions automatically.
            </p>
            
            <ul className="text-yellow-300 font-medium space-y-2 list-disc list-inside">
              <li>Automated Call Handling</li>
              <li>Smart Scheduling</li>
              <li>FAQ Management</li>
              <li>Transcription Recording</li>
            </ul>
          </div>
          {/* Card 2 */}
          <div className="bg-[#19172a] rounded-2xl p-8 shadow-lg flex flex-col h-full">
            <div className="mb-4"><span className="inline-block text-3xl text-yellow-400"><svg width='32' height='32' fill='none' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10' stroke='#facc15' strokeWidth='2'/><circle cx='12' cy='12' r='3' fill='#facc15'/></svg></span></div>
            <h3 className="text-white text-xl font-bold mb-2">Lead Generation Automation</h3>
            <p className="text-gray-300 mb-4">Get high-quality leads on autopilot.<br/>AI-powered systems that identify and engage potential clients around the clock.</p>
            <ul className="text-yellow-300 font-medium space-y-2 list-disc list-inside">
              <li>AI Lead Scoring</li>
              <li>Personalized Outreach</li>
              <li>Smart Follow-Ups</li>
              <li>Business automation solutions - lead generation</li>
            </ul>
          </div>
          {/* Card 3 */}
          <div className="bg-[#1a1a2e] rounded-2xl p-8 shadow-2xl flex flex-col h-full border border-[#262a40]">
            {/* Blue Document Icon */}
            <div className="mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="3"></rect>
                  <path d="M8 8h8v8H8z"></path>
                </svg>
              </div>
            </div>
            
            <h3 className="text-white text-2xl font-bold mb-4">Workflow & Business Process Automation</h3>
            
            <p className="text-gray-300 text-lg mb-4 font-medium">
              Automate repetitive tasks, documents, and internal workflows.
            </p>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              Custom solutions designed to eliminate manual work, reduce costs, and scale operations effortlessly.
            </p>
            
            <ul className="text-yellow-300 font-medium space-y-2 list-disc list-inside">
              <li>Contract & document automation</li>
              <li>Billing & approval workflows</li>
              <li>Task and case management</li>
              <li>AI-powered tools for internal processes and customer interaction</li>
            </ul>
          </div>
          {/* Card 4 */}
          <div className="bg-[#1a1a2e] rounded-2xl p-8 shadow-2xl flex flex-col h-full border border-[#262a40]">
            {/* Yellow Brain Icon */}
            <div className="mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                  <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                  <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                  <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                  <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                  <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                  <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                  <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                </svg>
              </div>
            </div>
            
            <h3 className="text-white text-2xl font-bold mb-4">Custom AI Solutions</h3>
            
            <p className="text-gray-300 text-lg mb-4 font-medium">
              Tailored AI-driven products for web, mobile, and internal systems.
            </p>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              We design and build custom websites, integrate AI into your existing workflows, and deliver mobile apps for iOS and Android — fast, secure, and scalable.
            </p>
            
            <ul className="text-yellow-300 font-medium space-y-2 list-disc list-inside">
              <li>AI-Powered Web Platforms</li>
              <li>iOS & Android App Development</li>
              <li>Integration with Existing Business Systems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
