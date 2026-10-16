"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import CompareSection from "@/components/CompareSection";
import CtaBottomSection from "@/components/CtaBottomSection";
import FooterSection from "@/components/FooterSection";

export default function PricingPage() {
  return (
    <main className="main">
      <Navbar />
      <section className="hero-simple-section">
        <div className="container-medium">
          <div className="hero-simple-content">
            <h1 data="show" className="hero-simple-title">
              Pricing plan
            </h1>
            <p data="show" className="hero-simplen-description">
              Honest pricing. No hidden fees. Choose the creative engine that
              matches your ad spend and scale.
            </p>
          </div>
        </div>
      </section>

      {/* Real Webflow Pricing Section */}
      <PricingSection />

      {/* Compare Section */}
      <CompareSection />

      {/* Bottom CTA */}
      <CtaBottomSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
