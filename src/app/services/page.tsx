"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import IntroBanner from "@/components/IntroBanner";
import AllServicesCardsSection from "@/components/AllServicesCardsSection";
import MarketingAssetSection from "@/components/MarketingAssetSection";
import CompareSection from "@/components/CompareSection";
import StepSection from "@/components/StepSection";
import ResultsShowSection from "@/components/ResultsShowSection";
import CtaBottomSection from "@/components/CtaBottomSection";
import FooterSection from "@/components/FooterSection";

export default function ServicesPage() {
  return (
    <main className="main">
      <Navbar />

      {/* Services Hero Section */}
      <section className="hero-simple-section">
        <div className="container-medium">
          <div className="hero-simple-content">
            <h1 data="show" className="hero-simple-title">
              Our Services
            </h1>
            <p data="show" className="hero-simplen-description">
              From full-funnel creator UGC production, influencer seeding, and
              AI automation to high-ROAS paid ads across Meta &amp; Google,
              discover how we grow leading DTC and high-growth brands.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Banner */}
      <IntroBanner />

      {/* All 8 Services Matching Website Signature UI */}
      <AllServicesCardsSection />

      {/* Marketing Asset Section */}
      <MarketingAssetSection />

      {/* Compare Section */}
      <CompareSection />

      {/* Step Section */}
      <StepSection />

      {/* Results Show Section */}
      <ResultsShowSection />

      {/* Bottom CTA */}
      <CtaBottomSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
