export default function Header() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("book-call");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e] bg-opacity-95 backdrop-blur-sm border-b border-[#262a40]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-white via-purple-400 to-blue-400 bg-clip-text text-transparent">
                VoiceScaleAI
              </span>
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact
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
            className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold text-base hover:from-blue-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Your Free Strategy Call
          </button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
