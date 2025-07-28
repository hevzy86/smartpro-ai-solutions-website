"use client";
import Image from "next/image";
import Cal, { getCalApi } from "@calcom/embed-react";

import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    // Inject Cal.com floating button script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "30-min-ai-meeting", {origin:"https://app.cal.com"});
      Cal.ns["30-min-ai-meeting"]("floatingButton", {"calLink":"vladimir-rumyantsev-absjms/30-min-ai-meeting","config":{"layout":"month_view"}}); 
      Cal.ns["30-min-ai-meeting"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.body.appendChild(script);
    return () => { script.remove(); };
  }, []);

  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-br from-[#0f1020] via-[#18123a] to-[#1a0a2f] text-white">
      {/* Hero Section */}
      <section className="relative w-full flex flex-col items-center justify-center pt-16 pb-24 px-4 min-h-[70vh]">
        {/* Logo */}
        <div className="absolute left-0 top-0 p-6">
          <span className="text-2xl font-bold select-none">
            Voice<span className="bg-gradient-to-r from-white via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">ScaleAI</span>
          </span>
        </div>
        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6 leading-tight">
          Stop <span className="text-red-400 drop-shadow-[0_2px_8px_rgba(255,0,0,0.6)]">bleeding</span> money on customer<br className="hidden md:block" />
          support with our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_2px_12px_rgba(0,255,255,0.7)]">AI Voice Agents</span>
        </h1>
        {/* Subheadline */}
        <p className="text-lg sm:text-2xl text-center max-w-2xl mb-8 text-gray-200">
          Tired of call center <span className="text-red-400">drama</span>? Our AI agents work <span className="text-yellow-300 font-bold">24/7</span>, never quit, and cut <span className="text-green-400 font-bold">costs</span> by <span className="text-blue-400 font-bold">70%</span>.
        </p>
        {/* CTA Button */}
        <a
          href="#services"
          className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 hover:from-fuchsia-500 hover:to-blue-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition border-2 border-purple-400"
        >
          Book Your Free Strategy Call
        </a>
      </section>

      {/* Our Services Section */}
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

      {/* Book Your Free Strategy Call Section */}
      <section id="book-call" className="w-full py-24 px-4 bg-gradient-to-br from-[#2a1842] via-[#181032] to-[#1a0a2f] flex flex-col items-center">
        <h2 className="text-4xl font-extrabold text-center mb-3">Book Your Free Strategy Call</h2>
        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
          Discover how our AI-powered strategies can transform your business. Schedule a personalized consultation to unlock your company's full potential – <span className="font-bold text-white">100% Free, No Obligations.</span>
        </p>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-3xl md:max-w-4xl rounded-2xl shadow-2xl bg-[#181c2f] overflow-hidden">
            {/* Cal.com React Embed */}
            <Cal
              namespace="30-min-ai-meeting"
              calLink="vladimir-rumyantsev-absjms/30-min-ai-meeting"
              style={{ width: "100%", height: "700px", border: "none", padding: 0, margin: 0 }}
              config={{ layout: "month_view" }}
            />
          </div>
        </div>
      </section>

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
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-2 shadow-xl shadow-pink-500/40" style={{ boxShadow: '0 0 32px 8px #a21caf44' }}>
                  <svg width="56" height="56" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><g><polygon fill="#fff" points="128 16 16 48 32 208 128 240 224 208 240 48"/><polygon fill="#E23237" points="128 32 32 59.2 46.4 200.8 128 224 209.6 200.8 224 59.2"/><polygon fill="#B52E31" points="128 32 128 224 209.6 200.8 224 59.2"/><polygon fill="#fff" points="128 56 72 188 96 188 106 164 150 164 160 188 184 188 128 56"/><polygon fill="#B52E31" points="128 56 128 164 150 164 160 188 184 188 128 56"/><polygon fill="#fff" points="128 80 148 132 108 132"/></g></svg>
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
            <span>© {new Date().getFullYear()} VoiceScale. All rights reserved.</span>
            <nav className="flex gap-6">
              <a href="#services" className="hover:underline">Solutions</a>
              <a href="#" className="hover:underline">Contact</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
