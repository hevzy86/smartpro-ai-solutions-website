"use client";
import { useEffect } from 'react';
import CalComScriptLoader from "./components/CalComScriptLoader";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import BookingSection from "./components/BookingSection";
import ComparisonSection from "./components/ComparisonSection";
import TransformationSection from "./components/TransformationSection";
import PreviousWorkSection from "./components/PreviousWorkSection";
import TechnologySection from "./components/TechnologySection";

export default function Home() {


  const openCalWidget = () => {
    // Look for the Cal.com widget loaded by CalComScriptLoader
    const calWidget = document.querySelector('[data-cal-namespace]') || document.querySelector('.cal-embed');
    if (calWidget) {
      calWidget.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll to top where CalComScriptLoader typically loads
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-br from-[#0f1020] via-[#18123a] to-[#1a0a2f] text-white">
      <CalComScriptLoader />
      <HeroSection />
      <ServicesSection />
      <BookingSection />
      <ComparisonSection />
      <TransformationSection />
      <PreviousWorkSection />
      <TechnologySection />

      {/* Comparison Card Section */}
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

      {/* Transformation Section */}
      <section className="w-full py-20 px-2 bg-gradient-to-br from-[#181032] via-[#1a0a2f] to-[#0f1020] flex justify-center">
        <div className="w-full max-w-5xl flex flex-col gap-8">
          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-6">
            Transforming Businesses Through <span className="bg-gradient-to-r from-blue-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">AI Innovation</span>
            <div className="w-36 h-1 mx-auto mt-2 bg-gradient-to-r from-blue-400 via-fuchsia-400 to-purple-400 rounded-full"></div>
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Card */}
            <div className="flex-1 bg-gradient-to-br from-[#21274a] to-[#181c2f] rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center min-w-[260px]">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-fuchsia-500 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-white">VS</span>
              </div>
              <div className="text-xl font-bold mb-1">VoiceScale AI</div>
              <div className="text-blue-400 font-semibold mb-6">AI Solutions Architect</div>
              <div className="w-full flex flex-col gap-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-300">Experience</span> <span className="font-bold text-white">5+ Years</span></div>
                <div className="flex justify-between"><span className="text-gray-300">Background</span> <span className="font-bold text-white">Enterprise SaaS</span></div>
                <div className="flex justify-between"><span className="text-gray-300">Cost Reduction</span> <span className="font-bold text-green-400">Up to 70%</span></div>
              </div>
            </div>
            {/* Problem & Solution Cards */}
            <div className="flex-[2] flex flex-col gap-6">
              <div className="bg-gradient-to-br from-[#4b1e2f] to-[#2c1222] rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-red-400 text-xl">&#9888;</span>
                  <span className="text-lg font-bold text-white">The Problem We Solve</span>
                </div>
                <div className="text-gray-200 text-base">
                  Traditional customer support is a <span className="text-red-400 font-semibold">cost center</span> that drains profits. Human agents are expensive, inconsistent, and limited by availability. Companies lose money every day they delay implementing AI solutions.
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#232a4a] to-[#181c2f] rounded-2xl p-6 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-blue-400 text-xl">&#9904;</span>
                  <span className="text-lg font-bold text-white">Our Solution</span>
                </div>
                <div className="text-gray-200 text-base mb-4">
                  I architect custom <span className="text-blue-400 font-semibold">AI voice agents</span> that work 24/7, handle complex customer interactions, and scale infinitely. Built on proven enterprise architecture patterns, these solutions deliver <span className="text-green-400 font-semibold">up to 70% cost reduction</span> within 30 days.
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 bg-[#22253c] rounded-xl py-4 flex flex-col items-center">
                    <div className="text-2xl font-bold text-blue-400">24/7</div>
                    <div className="text-gray-300 text-sm">Availability</div>
                  </div>
                  <div className="flex-1 bg-[#22253c] rounded-xl py-4 flex flex-col items-center">
                    <div className="text-2xl font-bold text-green-400">70%</div>
                    <div className="text-gray-300 text-sm">Cost Cut</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Expertise Areas */}
          <div className="w-full mt-4">
            <div className="bg-gradient-to-br from-[#21274a] to-[#181c2f] rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-purple-400"></span>
                <span className="text-white font-medium">Enterprise SaaS Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-blue-400"></span>
                <span className="text-white font-medium">AI Voice Agent Development</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-green-400"></span>
                <span className="text-white font-medium">Cost Optimization Strategies</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-yellow-400"></span>
                <span className="text-white font-medium">Scalable System Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Work Experience Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-[#181032] via-[#1a0a2f] to-[#0f1020]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Previous Work Experience</h2>
          <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
            I've worked with leading companies across various industries, delivering innovative solutions and building robust systems
          </p>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-8 min-w-[600px] md:min-w-[900px] lg:min-w-[1100px] px-2">
              {/* Example company cards, replace src with real logos as needed */}
              {[
                { name: 'Zeta', logo: '/placeholder-logo.svg' },
                { name: 'Reclaimit', logo: '/placeholder-logo.svg' },
                { name: 'Zenta', logo: '/placeholder-logo.svg' },
                { name: 'Ekonova', logo: '/placeholder-logo.svg' },
                { name: 'Future City Flow', logo: '/placeholder-logo.svg' },
                { name: 'AnotherCo', logo: '/placeholder-logo.svg' },
              ].map((company, idx) => (
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

      {/* Built with Cutting-Edge Technology Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-[#181032] via-[#1a0a2f] to-[#0f1020]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Built with Cutting-Edge Technology</h2>
          <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
            We leverage the latest AI and web technologies to deliver exceptional results for our clients
          </p>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-12 min-w-[700px] md:min-w-[900px] lg:min-w-[1100px] px-2">
              {/* Technology icons and names */}
              <div className="flex flex-col items-center min-w-[120px]">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-300 flex items-center justify-center mb-2 shadow-xl shadow-pink-500/40">
                  <span className="text-white font-bold text-lg">n8n</span>
                </div>
                <span className="text-white font-semibold mt-1 text-center text-sm">n8n</span>
              </div>
              <div className="flex flex-col items-center min-w-[120px]">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-400 flex items-center justify-center mb-2 shadow-xl shadow-gray-500/40">
                  <span className="text-white font-bold text-lg">Next</span>
                </div>
                <span className="text-white font-semibold mt-1 text-center text-sm">Next.js</span>
              </div>
              <div className="flex flex-col items-center min-w-[120px]">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-2 shadow-xl shadow-blue-500/40">
                  <span className="text-white font-bold text-lg">SQL</span>
                </div>
                <span className="text-white font-semibold mt-1 text-center text-sm">MySQL</span>
              </div>
              <div className="flex flex-col items-center min-w-[120px]">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-yellow-400 to-green-400 flex items-center justify-center mb-2 shadow-xl shadow-yellow-400/40">
                  <span className="text-white font-bold text-lg">Py</span>
                </div>
                <span className="text-white font-semibold mt-1 text-center text-sm">Python</span>
              </div>
              <div className="flex flex-col items-center min-w-[120px]">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-2 shadow-xl shadow-blue-400/40">
                  <span className="text-white font-bold text-lg">RN</span>
                </div>
                <span className="text-white font-semibold mt-1 text-center text-sm">React Native</span>
              </div>
              <div className="flex flex-col items-center min-w-[120px]">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-green-400 to-teal-400 flex items-center justify-center mb-2 shadow-xl shadow-green-400/40">
                  <span className="text-white font-bold text-lg">VAPI</span>
                </div>
                <span className="text-white font-semibold mt-1 text-center text-sm">Vapi</span>
              </div>
              <div className="flex flex-col items-center min-w-[120px]">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-700 to-fuchsia-400 flex items-center justify-center mb-2 shadow-xl shadow-purple-500/40">
                  <span className="text-white font-bold text-sm">Retell</span>
                </div>
                <span className="text-white font-semibold mt-1 text-center text-sm">Retell</span>
              </div>
              <div className="flex flex-col items-center min-w-[120px]">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-2 shadow-xl shadow-pink-500/40">
                  <span className="text-white font-bold text-lg">NG</span>
                </div>
                <span className="text-white font-semibold mt-1 text-center text-sm">Angular</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with FAQ */}
      <footer className="w-full bg-gray-900 text-gray-100 text-center mt-auto pt-12 pb-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 px-4">
          {/* FAQ Section (footer) */}
          <section className="w-full max-w-2xl">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <details className="group rounded-lg overflow-hidden text-white">
                <summary className="cursor-pointer px-6 py-4 font-semibold text-lg bg-purple-800/80 group-open:bg-purple-900 transition flex items-center justify-between">
                  How quickly can I deploy AI voice agents in my business?
                  <span className="ml-2 text-xl">▾</span>
                </summary>
                <div className="bg-[#181c2f] px-6 py-4 text-gray-200">
                  Most clients are up and running within 1-2 weeks, depending on integration needs and call volume. We handle setup, training, and support throughout the process.
                </div>
              </details>
              <details className="group rounded-lg overflow-hidden text-white">
                <summary className="cursor-pointer px-6 py-4 font-semibold text-lg bg-purple-800/80 group-open:bg-purple-900 transition flex items-center justify-between">
                  Will AI voice agents work with my existing systems?
                  <span className="ml-2 text-xl">▾</span>
                </summary>
                <div className="bg-[#181c2f] px-6 py-4 text-gray-200">
                  Yes! Our solutions are designed for seamless integration with your current CRM, helpdesk, or telephony systems. We provide custom API and workflow support.
                </div>
              </details>
              <details className="group rounded-lg overflow-hidden text-white">
                <summary className="cursor-pointer px-6 py-4 font-semibold text-lg bg-purple-800/80 group-open:bg-purple-900 transition flex items-center justify-between">
                  How much can I save by switching to AI agents?
                  <span className="ml-2 text-xl">▾</span>
                </summary>
                <div className="bg-[#181c2f] px-6 py-4 text-gray-200">
                  Clients typically see up to 70% cost reduction compared to traditional call centers, with improved scalability and 24/7 coverage.
                </div>
              </details>
              <details className="group rounded-lg overflow-hidden text-white">
                <summary className="cursor-pointer px-6 py-4 font-semibold text-lg bg-purple-800/80 group-open:bg-purple-900 transition flex items-center justify-between">
                  Is the AI able to handle complex or industry-specific conversations?
                  <span className="ml-2 text-xl">▾</span>
                </summary>
                <div className="bg-[#181c2f] px-6 py-4 text-gray-200">
                  Absolutely. Our AI is trained for your specific use case and can handle industry jargon, compliance requirements, and complex workflows.
                </div>
              </details>
              <details className="group rounded-lg overflow-hidden text-white">
                <summary className="cursor-pointer px-6 py-4 font-semibold text-lg bg-purple-800/80 group-open:bg-purple-900 transition flex items-center justify-between">
                  What support do you provide after launch?
                  <span className="ml-2 text-xl">▾</span>
                </summary>
                <div className="bg-[#181c2f] px-6 py-4 text-gray-200">
                  We offer ongoing monitoring, optimization, and support to ensure your AI agents deliver the best results and adapt to your evolving needs.
                </div>
              </details>
            </div>
          </section>
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
            <span> 2023 VoiceScale. All rights reserved.</span>
            <nav className="flex gap-6">
              <a href="#services" className="hover:underline">Solutions</a>
              <a href="#" className="hover:underline">Contact</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </nav>
          </div>
        </div>
      </footer>

      {/* Custom Floating Book my Cal Button */}
      <button
        onClick={openCalWidget}
        className="custom-book-my-cal-btn z-[999999999999] fixed md:bottom-6 bottom-4 flex h-16 origin-center bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 cursor-pointer items-center rounded-full py-4 px-6 text-base outline-none drop-shadow-md transition focus:outline-none focus:ring-4 focus:ring-gray-600 focus:ring-opacity-50 active:scale-95 md:right-10 right-4 text-white font-semibold hover:scale-105"
      >
        <div className="mr-3 flex items-center justify-center">
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        </div>
        <div className="font-semibold leading-5 antialiased">Book my Cal</div>
      </button>
    </div>
  );
}
