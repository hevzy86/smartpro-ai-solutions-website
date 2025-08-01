import NeonLogoIcon from "./NeonLogoIcon";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full py-24 px-4 bg-[#181032] relative"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="w-full h-full bg-grid-pattern opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-3">
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">
            Our Services
          </span>
        </h2>
        <p className="text-center text-gray-300 mb-14 max-w-2xl mx-auto">
          We turn ideas into profitable products using cutting-edge technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-[#1a1a2e] rounded-2xl p-8 shadow-2xl flex flex-col h-full border border-green-500/30 shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300">
            {/* Green Robot Icon */}
            <div className="mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 8V4H8"></path>
                  <rect
                    width="16"
                    height="12"
                    x="4"
                    y="8"
                    rx="2"
                  ></rect>
                  <path d="M2 14h2"></path>
                  <path d="M20 14h2"></path>
                  <path d="M15 13v2"></path>
                  <path d="M9 13v2"></path>
                </svg>
              </div>
            </div>

            <h3 className="text-white text-2xl font-bold mb-4">
              AI-Powered Voice Agents
            </h3>

            <p className="text-gray-300 text-lg mb-4 font-medium">
              Get a 24/7 AI receptionist for your business.
            </p>

            <div className="flex-grow">
              <p className="text-gray-400 mb-8 leading-relaxed">
                Smart voice agents that handle client calls, schedule
                appointments, and answer questions automatically.
              </p>
            </div>

            <ul className="text-green-300 font-medium space-y-2 list-disc list-outside ml-5 mt-auto">
              <li>Automated Call Handling</li>
              <li>Smart Scheduling</li>
              <li>FAQ Management</li>
              <li>Transcription Recording</li>
            </ul>
          </div>
          {/* Card 2 */}
          <div className="bg-[#1a1a2e] rounded-2xl p-8 shadow-2xl flex flex-col h-full border border-yellow-500/30 shadow-yellow-500/20 hover:shadow-yellow-500/40 transition-all duration-300">
            {/* Yellow Circle Icon */}
            <div className="mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-yellow-400"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#facc15"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    fill="#facc15"
                  />
                </svg>
              </div>
            </div>

            <h3 className="text-white text-2xl font-bold mb-4">
              Lead Generation Automation
            </h3>

            <p className="text-gray-300 text-lg mb-4 font-medium">
              Get high-quality leads on autopilot.
            </p>

            <div className="flex-grow">
              <p className="text-gray-400 mb-8 leading-relaxed">
                AI-powered systems that identify and engage potential clients around the clock.
              </p>
            </div>
            <ul className="text-yellow-300 font-medium space-y-2 list-disc list-outside ml-5 mt-auto">
              <li>AI Lead Scoring</li>
              <li>Personalized Outreach</li>
              <li>Smart Follow-Ups</li>
              <li>Business automation solutions - lead generation</li>
            </ul>
          </div>
          {/* Card 3 */}
          <div className="bg-[#1a1a2e] rounded-2xl p-8 shadow-2xl flex flex-col h-full border border-blue-500/30 shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300">
            {/* Blue Document Icon */}
            <div className="mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="3"
                  ></rect>
                  <path d="M8 8h8v8H8z"></path>
                </svg>
              </div>
            </div>

            <h3 className="text-white text-2xl font-bold mb-4">
              Workflow & Business Process Automation
            </h3>

            <p className="text-gray-300 text-lg mb-4 font-medium">
              Automate repetitive tasks, documents, and internal workflows.
            </p>

            <div className="flex-grow">
              <p className="text-gray-400 mb-8 leading-relaxed">
                Custom solutions designed to eliminate manual work, reduce
                costs, and scale operations effortlessly.
              </p>
            </div>

            <ul className="text-blue-300 font-medium space-y-2 list-disc list-outside ml-5 mt-auto">
              <li>Contract & document automation</li>
              <li>Billing & approval workflows</li>
              <li>Task and case management</li>
              <li>
                AI-powered tools for internal processes and customer interaction
              </li>
            </ul>
          </div>
          {/* Card 4 */}
          <div className="bg-[#1a1a2e] rounded-2xl p-8 shadow-2xl flex flex-col h-full border border-purple-500/30 shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300">
            {/* Yellow Brain Icon */}
            <div className="mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
  {/* NeonLogoIcon for Our Solution */}
  <NeonLogoIcon size={48} className="drop-shadow-xl" />
</div>
            </div>

            <h3 className="text-white text-2xl font-bold mb-4">
  Our Solution
</h3>
<p className="text-gray-300 text-lg mb-4 font-medium">
  We deploy AI Solutions that deliver instant, reliable customer interactions 24/7. Built on enterprise-grade architecture, our solutions reduce support costs by up to 70% in the first month—no downtime, no mistakes, no limits.
</p>

            <ul className="text-purple-300 font-medium space-y-2 list-disc list-outside ml-5 mt-auto">
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
