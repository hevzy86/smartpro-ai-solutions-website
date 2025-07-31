"use client";
import CalComScriptLoader from "./components/CalComScriptLoader";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import BookingSection from './components/BookingSection';
import TransformationSection from './components/TransformationSection';
import PreviousWorkSection from './components/PreviousWorkSection';
import TechnologySection from './components/TechnologySection';
import ComparisonCalculatorSection from './components/ComparisonCalculatorSection';
import TransformationShowcaseSection from './components/TransformationShowcaseSection';
import PrototypeShowcaseSection from './components/PrototypeShowcaseSection';
import FAQSection from './components/FAQSection';
import FooterSection from './components/FooterSection';
import FloatingBookButton from './components/FloatingBookButton';

export default function Home() {
  const openCalWidget = () => {
    // Scroll to the booking section
    const bookingSection = document.getElementById('book-call');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-br from-[#0f1020] via-[#18123a] to-[#1a0a2f] text-white">
      <Header />
      <div className="pt-16">
        <CalComScriptLoader />
        <HeroSection />
        <ServicesSection />
        <ComparisonCalculatorSection />
        <PrototypeShowcaseSection />
        <BookingSection />
        <TransformationSection />
        <PreviousWorkSection />
        <TechnologySection />
        <TransformationShowcaseSection />
        <FAQSection />
        <FooterSection />
        <FloatingBookButton onClick={openCalWidget} />
      </div>
    </div>
  );
}
