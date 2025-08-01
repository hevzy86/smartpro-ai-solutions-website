"use client";

export default function FooterSection() {
  return (
    <footer id="footer" className="w-full bg-[#0f1020] py-8 pb-28 sm:pb-8 px-4 border-t border-[#262a40]">
      <div className="max-w-6xl mx-auto relative">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-gray-300 whitespace-nowrap">© {new Date().getFullYear()} SmartProAI Solutions. All Rights Reserved.</span>
          <nav className="flex gap-6 justify-center mt-2 sm:mt-0 mr-0 sm:mr-32 lg:mr-40 xl:mr-52 2xl:mr-64">
            <a href="#services" className="text-gray-300 hover:text-white hover:underline transition">
              Solutions
            </a>
            <a href="#" className="text-gray-300 hover:text-white hover:underline transition">
              Contact
            </a>
            <a href="#" className="text-gray-300 hover:text-white hover:underline transition">
              Privacy Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
