"use client";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  // Helper for smooth scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("book-call");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-[#262a40]">
      <div className="max-w-7xl mx-auto px-2 sm:px-2 md:px-6 lg:px-8">
        <div className="relative flex items-center h-16 w-full">
          {/* Mobile: logo+brand, button, burger in one row */}
          <div className="flex items-center w-full md:hidden gap-x-2 justify-between">
            <div className="flex items-center gap-1 select-none flex-shrink-0">
              <img
                src="/icons/MyLogo.png"
                alt="SmartPro AI Solutions Logo"
                className="h-[38px] w-[38px] object-contain p-0 m-0"
                style={{
                  background: "transparent",
                  aspectRatio: "1/1",
                  padding: 0,
                  margin: 0,
                  objectFit: "contain",
                }}
                draggable="false"
              />
              <span className="text-sm sm:text-base font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent whitespace-nowrap" style={{lineHeight:'1.1'}}>
                SmartPro AI Solutions
              </span>
            </div>
            <button
              onClick={scrollToBooking}
              className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 py-2 rounded-md font-semibold text-sm shadow-md hover:from-blue-600 hover:to-pink-600 transition-all duration-300 mx-1 flex-1 max-w-[140px]"
              style={{whiteSpace:'nowrap'}}
            >
              Book Call
            </button>
            <button
              className="group flex flex-col justify-center items-center w-12 h-12 p-0 bg-transparent border-none focus:outline-none flex-none"
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              <div className="w-9 h-1.5 mb-1 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300"></div>
              <div className="w-9 h-1.5 mb-1 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300"></div>
              <div className="w-9 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300"></div>
            </button>
          </div>

          {/* Desktop: Logo, nav, button */}
          <div className="hidden md:flex items-center gap-1 select-none">
            <img
              src="/icons/MyLogo.png"
              alt="SmartPro AI Solutions Logo"
              className="h-[44px] w-[44px] object-contain p-0 m-0"
              style={{
                background: "transparent",
                aspectRatio: "1/1",
                padding: 0,
                margin: 0,
                objectFit: "contain",
              }}
              draggable="false"
            />
            <span className="text-lg md:text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent whitespace-nowrap" style={{lineHeight:'1.1'}}>
              SmartPro AI Solutions
            </span>
      
          </div>

          {/* Center: Navigation */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <a
              href="#"
              className="text-white hover:text-blue-400 transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToTop();
              }}
            >
              On Top
            </a>
            <a
              href="#prototypes-showcase"
              className="text-white hover:text-blue-400 hover:underline transition"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("prototypes-showcase");
                if (section) section.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Solutions
            </a>
            <a
              href="#footer"
              className="text-white hover:text-blue-400 transition-colors duration-200"
              onClick={(e) => {
                e.preventDefault();
                const footer = document.getElementById("footer");
                if (footer) footer.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Us
            </a>
            <a
              href="#faq"
              className="text-white hover:text-blue-400 transition-colors duration-200"
            >
              FAQ
            </a>
          </nav>

          {/* Right: Book a Free Call Button */}
          <div className="hidden md:flex items-center ml-auto">
            <button
              onClick={scrollToBooking}
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-10 py-2 rounded-xl font-bold text-lg shadow-xl hover:from-blue-600 hover:to-pink-600 transition-all duration-300"
              style={{minWidth:'260px', fontSize:'1.25rem', letterSpacing: '0.01em'}}
            >
              Book Your Free Strategy Call
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="fixed top-16 left-0 right-0 bg-black/80 backdrop-blur border-b border-[#262a40] p-4 md:hidden z-50">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-blue-400"
                >
                  On Top
                </a>
                <a
                  href="#prototypes-showcase"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-blue-400"
                >
                  Solutions
                </a>
                <a
                  href="#footer"
                  onClick={(e) => {
                    e.preventDefault();
                    const footer = document.getElementById("footer");
                    if (footer) footer.scrollIntoView({ behavior: "smooth" });
                    setMobileMenuOpen(false);
                  }}
                  className="text-white hover:text-blue-400"
                >
                  Contact Us
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-blue-400"
                >
                  FAQ
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
