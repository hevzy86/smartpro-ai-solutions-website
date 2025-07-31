"use client";

import { useState, useEffect } from 'react';

// Project type templates with default values
const projectTemplates = {
  'call-center': {
    name: 'Call Center',
    humanCost: 2000,
    dialAttempts: 250,
    answerRate: 30,
    callDuration: 2,
    workingDays: 22,
    aiCostPerMinute: 0.15
  },
  'sales': {
    name: 'Sales Outreach',
    humanCost: 2500,
    dialAttempts: 150,
    answerRate: 25,
    callDuration: 5,
    workingDays: 22,
    aiCostPerMinute: 0.20
  },
  'support': {
    name: 'Customer Support',
    humanCost: 1800,
    dialAttempts: 100,
    answerRate: 80,
    callDuration: 8,
    workingDays: 22,
    aiCostPerMinute: 0.12
  },
  'appointment': {
    name: 'Appointment Setting',
    humanCost: 1500,
    dialAttempts: 200,
    answerRate: 35,
    callDuration: 3,
    workingDays: 22,
    aiCostPerMinute: 0.18
  },
  'custom': {
    name: 'Custom Project',
    humanCost: 2000,
    dialAttempts: 250,
    answerRate: 30,
    callDuration: 2,
    workingDays: 22,
    aiCostPerMinute: 0.15
  }
};

export default function ComparisonCalculatorSection() {
  const [mounted, setMounted] = useState(false);
  const [projectType, setProjectType] = useState('call-center');
  const [humanCost, setHumanCost] = useState(2000);
  const [dialAttempts, setDialAttempts] = useState(250);
  const [answerRate, setAnswerRate] = useState(30);
  const [callDuration, setCallDuration] = useState(2);
  const [workingDays, setWorkingDays] = useState(22);
  const [results, setResults] = useState({ humanTotal: 2000, aiTotal: 297, savings: 1703, savingsPercent: 85 });

  // Ensure component is mounted on client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Recalculate when any input changes
  useEffect(() => {
    const template = projectTemplates[projectType as keyof typeof projectTemplates];
    
    // Human agent costs (fixed monthly)
    const humanTotal = humanCost;
    
    // AI agent calculations
    const totalDialsPerMonth = dialAttempts * workingDays;
    const answeredCallsPerMonth = totalDialsPerMonth * (answerRate / 100);
    const totalMinutesPerMonth = answeredCallsPerMonth * callDuration;
    const aiTotal = Math.round(totalMinutesPerMonth * template.aiCostPerMinute);
    
    // Savings calculation
    const savings = humanTotal - aiTotal;
    const savingsPercent = Math.round((savings / humanTotal) * 100);
    
    setResults({
      humanTotal,
      aiTotal,
      savings,
      savingsPercent
    });
  }, [projectType, humanCost, dialAttempts, answerRate, callDuration, workingDays]);

  // Prevent hydration mismatch by not rendering interactive elements until mounted
  if (!mounted) {
    return (
      <section id="comparison" className="w-full flex justify-center items-center py-16 px-2">
        <div className="w-full max-w-4xl bg-[#181c2f] bg-opacity-95 rounded-2xl shadow-2xl p-8 md:p-12 border border-[#262a40] relative">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
            HUMAN AGENTS <span className="text-green-400 drop-shadow-[0_2px_8px_rgba(34,197,94,0.7)]">vs AI AGENTS</span>
          </h2>
          <div className="text-center text-gray-400">Loading calculator...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="comparison" className="w-full flex justify-center items-center py-16 px-2">
      <div className="w-full max-w-4xl bg-[#181c2f] bg-opacity-95 rounded-2xl shadow-2xl p-8 md:p-12 border border-[#262a40] relative">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8">
          HUMAN AGENTS <span className="text-green-400 drop-shadow-[0_2px_8px_rgba(34,197,94,0.7)]">vs AI AGENTS</span>
        </h2>
        
        {/* Project Type Selector */}
        <div className="mb-8">
          <label className="block text-sm font-semibold mb-3 text-center">Select Project Type</label>
          <div className="flex flex-wrap justify-center gap-2">
            {Object.entries(projectTemplates).map(([key, template]) => (
              <button
                key={key}
                onClick={() => setProjectType(key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  projectType === key
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                    : 'bg-[#23253c] text-gray-300 hover:bg-[#2c314f]'
                }`}
              >
                {template.name}
              </button>
            ))}
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Human Agent Monthly Cost ($)</label>
            <input 
              type="number" 
              value={humanCost}
              onChange={(e) => setHumanCost(Number(e.target.value))}
              className="w-full rounded-lg bg-[#23253c] border-none text-white px-4 py-2 text-lg focus:ring-2 focus:ring-purple-500" 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Dial Attempts per Day</label>
            <input 
              type="number" 
              value={dialAttempts}
              onChange={(e) => setDialAttempts(Number(e.target.value))}
              className="w-full rounded-lg bg-[#23253c] border-none text-white px-4 py-2 text-lg focus:ring-2 focus:ring-purple-500" 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Answer Rate (%)</label>
            <input 
              type="number" 
              value={answerRate}
              onChange={(e) => setAnswerRate(Number(e.target.value))}
              className="w-full rounded-lg bg-[#23253c] border-none text-white px-4 py-2 text-lg focus:ring-2 focus:ring-purple-500" 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Avg. Call Duration (min)</label>
            <input 
              type="number" 
              value={callDuration}
              onChange={(e) => setCallDuration(Number(e.target.value))}
              className="w-full rounded-lg bg-[#23253c] border-none text-white px-4 py-2 text-lg focus:ring-2 focus:ring-purple-500" 
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-2">Working Days per Month</label>
            <input 
              type="number" 
              value={workingDays}
              onChange={(e) => setWorkingDays(Number(e.target.value))}
              className="w-full rounded-lg bg-[#23253c] border-none text-white px-4 py-2 text-lg focus:ring-2 focus:ring-purple-500" 
            />
          </div>
        </div>

        {/* Results Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Human Agent Card */}
          <div className="bg-[#23253c] rounded-xl p-6 flex flex-col items-center border border-[#2c314f]">
            <div className="text-3xl font-bold text-red-400 mb-1">${results.humanTotal.toLocaleString()}</div>
            <div className="text-gray-300 mb-2">per month</div>
            <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
              <li>Fixed monthly cost regardless of call volume</li>
              <li>Limited scalability</li>
              <li>Variable quality and script adherence</li>
              <li>Human fatigue and turnover</li>
            </ul>
          </div>
          {/* AI Agent Card */}
          <div className="bg-[#23253c] rounded-xl p-6 flex flex-col items-center border border-[#2c314f]">
            <div className="text-3xl font-bold text-green-400 mb-1">${results.aiTotal.toLocaleString()}</div>
            <div className="text-gray-300 mb-2">per month</div>
            <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
              <li>Pay only for actual talk time</li>
              <li>Unlimited scaling capability</li>
              <li>100% script consistency</li>
              <li>24/7 availability with no fatigue</li>
            </ul>
          </div>
        </div>

        {/* Savings Display */}
        <div className="text-center bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 rounded-xl p-6 text-white">
          <div className="text-2xl md:text-3xl font-bold mb-2">
            ${results.savings.toLocaleString()} <span className="text-lg font-normal">Absolute Savings</span> | 
            <span className="ml-2">{results.savingsPercent}%</span> <span className="text-lg font-normal">Cost Reduction</span>
          </div>
          <div className="text-lg mb-2">Annual Savings: ${(results.savings * 12).toLocaleString()}</div>
          <div className="text-sm mt-2 opacity-90">
            Calculation Assumptions:
          </div>
          <div className="text-xs mt-2 opacity-80 space-y-1">
            <div>• {dialAttempts.toLocaleString()} dial attempts per day ({(dialAttempts * workingDays).toLocaleString()} per month)</div>
            <div>• {answerRate}% answer rate ({Math.round(dialAttempts * workingDays * (answerRate / 100)).toLocaleString()} answered calls per month)</div>
            <div>• Average call duration: {callDuration} minutes</div>
            <div>• Total AI minutes: {Math.round(dialAttempts * workingDays * (answerRate / 100) * callDuration).toLocaleString()} per month</div>
            <div>• Working days: {workingDays} per month</div>
          </div>
        </div>
      </div>
    </section>
  );
}
