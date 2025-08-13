"use client";

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Project type templates with default values
export default function ComparisonCalculatorSection() {
  const { t } = useTranslation('common');

  const projectTemplates = {
    'call-center': {
      name: t('project_call_center'), // Workflow Automation
      humanCost: 2000,
      dialAttempts: 250, // tasks per day
      answerRate: 90, // completion rate
      callDuration: 5, // avg. task duration
      workingDays: 22,
      aiCostPerMinute: 0.10 // cost per automated minute
    },
    'sales': {
      name: t('project_sales'), // Document/Data Processing
      humanCost: 2500,
      dialAttempts: 180,
      answerRate: 95,
      callDuration: 3,
      workingDays: 22,
      aiCostPerMinute: 0.08
    },
    'support': {
      name: t('project_support'), // Customer Support Automation
      humanCost: 1800,
      dialAttempts: 120,
      answerRate: 85,
      callDuration: 6,
      workingDays: 22,
      aiCostPerMinute: 0.12
    },
    'appointment': {
      name: t('project_appointment'), // Sales/Lead Automation
      humanCost: 1500,
      dialAttempts: 100,
      answerRate: 80,
      callDuration: 10,
      workingDays: 22,
      aiCostPerMinute: 0.15
    },
    'custom': {
      name: t('project_custom'),
      humanCost: 2000,
      dialAttempts: 150,
      answerRate: 90,
      callDuration: 5,
      workingDays: 22,
      aiCostPerMinute: 0.10
    }
  };

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
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8" dangerouslySetInnerHTML={{ __html: t('calculator_title') }} />
        
        {/* Project Type Selector */}
        <div className="mb-8">
          <label className="block text-sm font-semibold mb-3 text-center">{t('select_project_type')}</label>
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
            <label className="block text-sm font-semibold mb-2">{t('input_human_cost')}</label>
            <input 
              type="number" 
              value={humanCost}
              onChange={(e) => setHumanCost(Number(e.target.value))}
              className="w-full rounded-lg bg-[#23253c] border-none text-white px-4 py-2 text-lg focus:ring-2 focus:ring-purple-500" 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">{t('input_dial_attempts')}</label>
            <input 
              type="number" 
              value={dialAttempts}
              onChange={(e) => setDialAttempts(Number(e.target.value))}
              className="w-full rounded-lg bg-[#23253c] border-none text-white px-4 py-2 text-lg focus:ring-2 focus:ring-purple-500" 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">{t('input_answer_rate')}</label>
            <input 
              type="number" 
              value={answerRate}
              onChange={(e) => setAnswerRate(Number(e.target.value))}
              className="w-full rounded-lg bg-[#23253c] border-none text-white px-4 py-2 text-lg focus:ring-2 focus:ring-purple-500" 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">{t('input_call_duration')}</label>
            <input 
              type="number" 
              value={callDuration}
              onChange={(e) => setCallDuration(Number(e.target.value))}
              className="w-full rounded-lg bg-[#23253c] border-none text-white px-4 py-2 text-lg focus:ring-2 focus:ring-purple-500" 
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-2">{t('input_working_days')}</label>
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
          {/* Human Labor Card */}
          <div className="bg-[#23253c] rounded-xl p-6 flex flex-col items-center border border-[#2c314f]">
            <div className="text-3xl font-bold text-red-400 mb-1">${results.humanTotal.toLocaleString()}</div>
            <div className="text-gray-300 mb-2">{t('calc_human_per_month')}</div>
            <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
              {(t('calc_human_bullets', { returnObjects: true }) as string[]).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
            </ul>
          </div>
          {/* AI Automation Card */}
          <div className="bg-[#23253c] rounded-xl p-6 flex flex-col items-center border border-[#2c314f]">
            <div className="text-3xl font-bold text-green-400 mb-1">${results.aiTotal.toLocaleString()}</div>
            <div className="text-gray-300 mb-2">{t('calc_ai_per_month')}</div>
            <ul className="text-gray-400 text-sm list-disc list-inside space-y-1">
              {(t('calc_ai_bullets', { returnObjects: true }) as string[]).map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
            </ul>
          </div>
        </div>

        {/* Savings Display */}
        <div className="text-center bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 rounded-xl p-6 text-white">
          <div className="text-2xl md:text-3xl font-bold mb-2">
            ${results.savings.toLocaleString()} <span className="text-lg font-normal">{t('calc_savings_absolute')}</span> | 
            <span className="ml-2">{results.savingsPercent}%</span> <span className="text-lg font-normal">{t('calc_savings_percent')}</span>
          </div>
          <div className="text-lg mb-2">{t('calc_annual_savings')}: ${(results.savings * 12).toLocaleString()}</div>
          <div className="text-sm mt-2 opacity-90">
            {t('calc_assumptions')}
          </div>
          <div className="text-xs mt-2 opacity-80 space-y-1">
            <div>• {dialAttempts.toLocaleString()} {t('input_dial_attempts').toLowerCase()} × {workingDays} {t('input_working_days').toLowerCase()} = {(dialAttempts * workingDays).toLocaleString()} / {t('input_working_days').toLowerCase()}</div>
            <div>• {answerRate}% {t('input_answer_rate').toLowerCase()} = {Math.round(dialAttempts * workingDays * (answerRate / 100)).toLocaleString()} {t('input_dial_attempts').toLowerCase()} {t('input_answer_rate').toLowerCase()} / {t('input_working_days').toLowerCase()}</div>
            <div>• {t('input_call_duration')}: {callDuration} min</div>
            <div>• Total AI minutes: {Math.round(dialAttempts * workingDays * (answerRate / 100) * callDuration).toLocaleString()} / {t('input_working_days').toLowerCase()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
