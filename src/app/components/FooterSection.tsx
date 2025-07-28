"use client";

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#0f1020] py-8 px-4 border-t border-[#262a40]">
      <div className="max-w-6xl mx-auto">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-gray-300">© 2023 VoiceScale. All rights reserved.</span>
          <nav className="flex gap-6">
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
