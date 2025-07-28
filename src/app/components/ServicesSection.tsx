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
          <div className="bg-[#19172a] rounded-2xl p-8 shadow-lg flex flex-col h-full">
            <div className="mb-4"><span className="inline-block text-3xl text-green-400"><svg width='32' height='32' fill='none' viewBox='0 0 24 24'><path fill='#22d3ee' d='M12 2a10 10 0 100 20 10 10 0 000-20zm0 18.5A8.5 8.5 0 113.5 12 8.51 8.51 0 0112 20.5z'/><path fill='#22d3ee' d='M12 7a1 1 0 011 1v5h3a1 1 0 110 2h-4a1 1 0 01-1-1V8a1 1 0 011-1z'/></svg></span></div>
            <h3 className="text-white text-xl font-bold mb-2">AI-Powered Voice Agents</h3>
            <p className="text-gray-300 mb-4">Get a 24/7 AI receptionist for your business.<br/>Smart voice agents that handle client calls, schedule appointments, and answer questions automatically.</p>
            <ul className="text-yellow-300 font-medium space-y-2 list-disc list-inside">
              <li>Automated Call Handling</li>
              <li>Smart Scheduling</li>
              <li>FAQ Management</li>
              <li>Chatbots and Chat Agents</li>
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
          <div className="bg-[#19172a] rounded-2xl p-8 shadow-lg flex flex-col h-full">
            <div className="mb-4"><span className="inline-block text-3xl text-blue-400"><svg width='32' height='32' fill='none' viewBox='0 0 24 24'><rect x='4' y='4' width='16' height='16' rx='3' stroke='#38bdf8' strokeWidth='2'/><path d='M8 8h8v8H8z' fill='#38bdf8'/></svg></span></div>
            <h3 className="text-white text-xl font-bold mb-2">Workflow & Document Automation</h3>
            <p className="text-gray-300 mb-4">Streamline your business processes.<br/>Custom automation solutions that save time and reduce operational costs.</p>
            <ul className="text-yellow-300 font-medium space-y-2 list-disc list-inside">
              <li>Contract review</li>
              <li>Billing workflows</li>
              <li>Case-management tasks</li>
              <li>AI powered websites, mobile apps</li>
            </ul>
          </div>
          {/* Card 4 */}
          <div className="bg-[#19172a] rounded-2xl p-8 shadow-lg flex flex-col h-full">
            <div className="mb-4"><span className="inline-block text-3xl text-fuchsia-400"><svg width='32' height='32' fill='none' viewBox='0 0 24 24'><path d='M12 2l4 8h-8l4-8zm0 20v-4m0 0h4m-4 0H8' stroke='#a21caf' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/></svg></span></div>
            <h3 className="text-white text-xl font-bold mb-2">Custom MVP Development</h3>
            <p className="text-gray-300 mb-4">Launch your product in weeks, not months.<br/>We build and deploy your MVP quickly to validate your ideas and start generating revenue.</p>
            <ul className="text-yellow-300 font-medium space-y-2">
              <li>⭐ Rapid Prototyping</li>
              <li>⭐ AI Integration</li>
              <li>⭐ Scalable Architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
