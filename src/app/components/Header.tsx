import NeonLogoIcon from "./NeonLogoIcon";

import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("book-call");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e] bg-opacity-95 backdrop-blur-sm border-b border-[#262a40]">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2 select-none">
  <img
    src="/smartPro4.png"
    alt="Smart Pro Solutions Logo"
    className="h-[54px] w-[100px] object-contain p-0 m-0"
    style={{ background: 'transparent', aspectRatio: '100/54', padding: 0, margin: 0, objectFit: 'contain' }}
    draggable="false"
  />
  <span className="text-2xl font-bold bg-gradient-to-r from-white via-purple-400 to-blue-400 bg-clip-text text-transparent">
    Smart <span className="font-extrabold">Pro Solutions</span>
  </span>
</div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              onClick={e => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}
            >
              On Top
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Solutions
            </a>
            <a
              href="#footer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
              onClick={e => {
                e.preventDefault();
                const footer = document.getElementById('footer');
                if (footer) footer.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us
            </a>
            <a
              href="#faq"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              FAQ
            </a>
          </nav>

          {/* Book a Free Call Button */}
          <button
            onClick={scrollToBooking}
            className="hidden md:block bg-gradient-to-r from-blue-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold text-base hover:from-blue-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Your Free Strategy Call
          </button>
          {/* Mobile Book Call Button (hidden) */}
          {/* <button
            onClick={scrollToBooking}
            className="md:hidden fixed top-20 right-4 z-40 w-[90vw] max-w-xs bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold text-base shadow-lg"
            style={{minWidth:'200px'}}
          >
            Book Your Free Strategy Call
          </button> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="group flex flex-col justify-center items-center w-12 h-12 p-0 bg-transparent border-none focus:outline-none" onClick={()=>setMobileMenuOpen(v=>!v)}>
              <div className="w-9 h-1.5 mb-1 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300"></div>
              <div className="w-9 h-1.5 mb-1 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300"></div>
              <div className="w-9 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300"></div>
            </button>
            {mobileMenuOpen && (
              <div className="absolute top-16 right-4 bg-[#23253c] rounded-xl shadow-lg p-6 flex flex-col gap-4 z-50 w-[80vw] max-w-xs">
                <a href="#" onClick={e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'});setMobileMenuOpen(false);}} className="text-gray-300 hover:text-white">On Top</a>
                <a href="#services" onClick={()=>setMobileMenuOpen(false)} className="text-gray-300 hover:text-white">Solutions</a>
                <a href="#footer" onClick={e=>{e.preventDefault();const footer=document.getElementById('footer');if(footer)footer.scrollIntoView({behavior:'smooth'});setMobileMenuOpen(false);}} className="text-gray-300 hover:text-white">Contact Us</a>
                <a href="#faq" onClick={()=>setMobileMenuOpen(false)} className="text-gray-300 hover:text-white">FAQ</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
