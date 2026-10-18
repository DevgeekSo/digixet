"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import styles from "./Pricing.module.css";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">(
    "monthly",
  );

  const plans = [
    {
      name: "Starter Plan",
      tag: "Validation",
      desc: "Manage one social media platform and build organic reach.",
      monthlyPrice: "₹9,999",
      quarterlyPrice: "₹8,499",
      popular: false,
      features: [
        "Manage 1 social media platform",
        "15 AI viral reels/shorts per month",
        "15 social creative posts per month",
        "Viral research & trend-based content creation",
        "Monthly performance report",
        "Engagement & reach-focused growth",
      ],
      ctaText: "Get Started",
    },
    {
      name: "Growth Plan",
      tag: "Most Popular",
      desc: "Manage across 3 platforms with daily posting and influencer outreach.",
      monthlyPrice: "₹25,999",
      quarterlyPrice: "₹21,999",
      popular: true,
      features: [
        "Manage across 3 platforms",
        "30 AI viral reels/shorts per month",
        "30 social creative posts per month",
        "Daily posting & active engagement",
        "Influencer marketing & collaboration",
        "Weekly performance insights",
        "Outreach & right audience growth",
      ],
      ctaText: "Scale With Growth",
    },
    {
      name: "Custom Plan",
      tag: "Custom Package",
      desc: "Manage multiple platforms and accounts tailored for your brand.",
      monthlyPrice: "Custom",
      quarterlyPrice: "Custom",
      popular: false,
      features: [
        "Manage multiple platforms & accounts",
        "Customise daily number of posts",
        "UGC videos per month",
        "Creator & influencer marketing / collaboration",
        "Live dashboard + weekly analysis",
        "Paid advertising campaigns",
        "Dedicated account manager & priority support",
      ],
      ctaText: "Get Custom Plan",
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
                <span className={styles.period}>
                  {p.monthlyPrice === "Custom" ? "pricing" : "/ month"}
                </span>
              </div>

              <a
                href={getWhatsAppUrl(`Hi, I want to get started with the ${p.name} (${billingCycle}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className={p.popular ? "btn-primary" : "btn-secondary"}
                style={{ width: "100%", marginBottom: "28px" }}
              >
                <span>{p.ctaText}</span>
                <ArrowRight size={16} />
              </a>

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
