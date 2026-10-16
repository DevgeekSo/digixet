import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroBanner from "@/components/IntroBanner";
import MarketingAssetSection from "@/components/MarketingAssetSection";
import ServiceCardsSection from "@/components/ServiceCardsSection";
import ResultsShowSection from "@/components/ResultsShowSection";
import CompareSection from "@/components/CompareSection";
import StepSection from "@/components/StepSection";
import GrowthShowcase from "@/components/GrowthShowcase";
import TestimonialPhoneSection from "@/components/TestimonialPhoneSection";
import PricingSection from "@/components/PricingSection";
import CtaBottomSection from "@/components/CtaBottomSection";
import FooterSection from "@/components/FooterSection";

export default function HomePage() {
  return (
    <main className="main">
      {/* Clean modern sticky navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Intro Banner */}
      <IntroBanner />

      {/* Marketing Asset Section */}
      <MarketingAssetSection />

      {/* How We Grow You (4 Colorful Bento Cards) */}
      <ServiceCardsSection />

      {/* Results Show Section */}
      <ResultsShowSection />

      {/* Compare Section (Not all UGC agencies are built the same) */}
      <CompareSection />

      {/* Step Section (Four steps hanging tag cards) */}
      <StepSection />

      {/* Growth Showcase (Real brands, real results) */}
      <GrowthShowcase />

      {/* Testimonial Section with Hand-held Smartphone Mockup */}
      <TestimonialPhoneSection />

      {/* Pricing Section (Honest pricing, no hidden fees) */}
      <PricingSection />

      {/* CTA Bottom Section with Creator Avatars */}
      <CtaBottomSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
