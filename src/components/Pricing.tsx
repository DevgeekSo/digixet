"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import styles from "./Pricing.module.css";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">(
    "monthly",
  );

  const plans = [
    {
      name: "Starter Plan",
      tag: "Validation",
      desc: "For brands just getting started with authentic UGC creative.",
      monthlyPrice: "$1,999",
      quarterlyPrice: "$1,699",
      popular: false,
      features: [
        "4 Vetted Creators per month",
        "8 Final Polished UGC Videos",
        "16 Hook & CTA Variations",
        "Raw Footage Included",
        "Full Digital Ad Usage Rights",
        "10-Day Delivery Guarantee",
      ],
      ctaText: "Get Started",
    },
    {
      name: "Growth Plan",
      tag: "Most Popular",
      desc: "For scaling brands needing a steady stream of fresh ad creative.",
      monthlyPrice: "$3,999",
      quarterlyPrice: "$3,399",
      popular: true,
      features: [
        "8 Vetted Creators per month",
        "16 Final Polished UGC Videos",
        "32 Hook & Angle Variations",
        "Bi-weekly Creative Strategy Calls",
        "Competitor Ad Angle Teardowns",
        "Whitelisting / Spark Ads Setup",
        "7-Day Delivery Guarantee",
        "Dedicated Creative Strategist",
      ],
      ctaText: "Scale With Growth",
    },
    {
      name: "Agency Plan",
      tag: "Full-Service",
      desc: "Complete end-to-end creator department for 7-figure brands.",
      monthlyPrice: "$6,999",
      quarterlyPrice: "$5,999",
      popular: false,
      features: [
        "16+ Vetted Creators per month",
        "32 Final Polished UGC Videos",
        "64 Hook Variations for Meta & TikTok",
        "Daily Organic Account Posting & Repurposing",
        "Multi-angle Scriptwriting & Storyboards",
        "Full Whitelisting & Creator Spark Access",
        "Priority 24/7 Slack Channel",
        "Custom Monthly Reporting Dashboard",
      ],
      ctaText: "Book Agency Call",
    },
  ];

  return (
    <section id="pricing" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="pill-badge">
            <span className="pill-badge-dot"></span>
            Transparent Pricing
          </div>
          <h2 className={styles.heading}>INVEST IN CONTENT THAT CONVERTS</h2>
          <p className={styles.subtext}>
            No hidden creator fees. No contracts. Pause or cancel anytime.
          </p>

          {/* Toggle */}
          <div className={styles.toggleWrap}>
            <button
              className={`${styles.toggleBtn} ${billingCycle === "monthly" ? styles.toggleActive : ""}`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`${styles.toggleBtn} ${billingCycle === "quarterly" ? styles.toggleActive : ""}`}
              onClick={() => setBillingCycle("quarterly")}
            >
              Quarterly <span className={styles.saveTag}>Save 15%</span>
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {plans.map((p, i) => (
            <div
              key={i}
              className={`${styles.card} ${p.popular ? styles.popularCard : ""}`}
            >
              {p.popular && (
                <div className={styles.badgePopular}>
                  <Sparkles size={14} />
                  <span>MOST POPULAR</span>
                </div>
              )}

              <div className={styles.cardHeader}>
                <span className={styles.planTag}>{p.tag}</span>
                <h3 className={styles.planName}>{p.name}</h3>
                <p className={styles.planDesc}>{p.desc}</p>
              </div>

              <div className={styles.priceWrap}>
                <span className={styles.price}>
                  {billingCycle === "monthly"
                    ? p.monthlyPrice
                    : p.quarterlyPrice}
                </span>
                <span className={styles.period}>/ month</span>
              </div>

              <Link
                href="#contact"
                className={p.popular ? "btn-primary" : "btn-secondary"}
                style={{ width: "100%", marginBottom: "28px" }}
              >
                <span>{p.ctaText}</span>
                <ArrowRight size={16} />
              </Link>

              <div className={styles.featuresList}>
                <span className={styles.featuresTitle}>WHAT'S INCLUDED:</span>
                {p.features.map((feat, fIdx) => (
                  <div key={fIdx} className={styles.featureItem}>
                    <div className={styles.checkIcon}>
                      <Check size={14} />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
