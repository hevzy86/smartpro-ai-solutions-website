"use client";
import { Suspense } from "react";
import CalComScriptLoader from "./components/CalComScriptLoader";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ResultsSection from "./components/ResultsSection";
import ServicesSection from "./components/ServicesSection";
import BookingSection from "./components/BookingSection";
import TransformationSection from "./components/TransformationSection";
import ComparisonCalculatorSection from "./components/ComparisonCalculatorSection";
import PrototypeShowcaseSection from "./components/PrototypeShowcaseSection";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";
import FloatingLanguageSwitcher from "./components/FloatingLanguageSwitcher";

export default function Home() {

  return (
    <div className="font-sans min-h-screen flex flex-col bg-gradient-to-br from-[#0f1020] via-[#18123a] to-[#1a0a2f] text-white">
      <Header />
      <div className="pt-16">
        <CalComScriptLoader />
        <HeroSection />
        <ResultsSection />
        <ServicesSection />
        <ComparisonCalculatorSection />
        <PrototypeShowcaseSection />
        <TransformationSection />
        <BookingSection />
        <FAQSection />
        <FooterSection />
        <Suspense fallback={null}>
          <FloatingLanguageSwitcher />
        </Suspense>
      </div>
    </div>
  );
}
