"use client";

export default function FAQSection() {
  return (
    <section className="w-full flex justify-center items-center py-16 px-2">
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-white">
          FREQUENTLY ASKED <span className="text-green-400 drop-shadow-[0_2px_8px_rgba(34,197,94,0.7)]">QUESTIONS</span>
        </h2>
        
        <div className="space-y-4">
          <details className="group rounded-lg overflow-hidden text-white">
            <summary className="cursor-pointer px-6 py-4 font-semibold text-lg bg-purple-800/80 group-open:bg-purple-900 transition flex items-center justify-between">
              How quickly can AI voice agents be deployed?
              <span className="ml-2 text-xl">▾</span>
            </summary>
            <div className="bg-[#181c2f] px-6 py-4 text-gray-200">
              Most deployments are completed within 2-4 weeks, including custom training, integration testing, and staff onboarding.
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
      </div>
    </section>
  );
}
