"use client";

import React from "react";
import { TrendingUp, Award, Zap, BarChart3, ArrowUpRight } from "lucide-react";
import styles from "./ResultsMetrics.module.css";

export default function ResultsMetrics() {
  const metrics = [
    { label: "Average ROAS Lift", value: "+340%", icon: TrendingUp },
    { label: "Higher Conversion Rate", value: "4.8x", icon: Zap },
    { label: "Watch-Through Rate", value: "+180%", icon: BarChart3 },
    { label: "Direct Revenue Generated", value: "$14M+", icon: Award },
  ];

  return (
    <section id="results" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="pill-badge">
            <span className="pill-badge-dot"></span>
            Performance Data
          </div>
          <h2 className={styles.heading}>RESULTS THAT SPEAK FOR THEMSELVES</h2>
          <p className={styles.subtext}>
            We don’t chase vanity likes. Every creative brief and hook variation
            is engineered for high-intent purchases.
          </p>
        </div>

        {/* Big Spotlight Banner */}
        <div className={styles.spotlightCard}>
          <div className={styles.spotlightContent}>
            <span className={styles.caseBadge}>FEATURED CASE STUDY</span>
            <h3 className={styles.caseTitle}>
              Duskline Apparel: From $45k/mo to $210k/mo with UGC
            </h3>
            <p className={styles.caseDesc}>
              By replacing polished studio ads with raw, authentic creator
              try-ons and emotional hook testing, we scaled Duskline's blended
              ROAS to 4.2x while cutting CAC by 44%.
            </p>

            <div className={styles.caseStats}>
              <div>
                <span className={styles.statBig}>+340%</span>
                <span className={styles.statSub}>ROAS Lift</span>
              </div>
              <div className={styles.divider}></div>
              <div>
                <span className={styles.statBig}>-44%</span>
                <span className={styles.statSub}>Cost Per Acquisition</span>
              </div>
              <div className={styles.divider}></div>
              <div>
                <span className={styles.statBig}>2.8M</span>
                <span className={styles.statSub}>Paid Impressions</span>
              </div>
            </div>
          </div>

          <div className={styles.spotlightMedia}>
            <img
              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fb5829c7a24d41fcec_4.avif"
              alt="Duskline Case Study Preview"
              className={styles.spotlightImg}
            />
            <div className={styles.playTag}>
              <span>4.2x Blended ROAS</span>
            </div>
          </div>
        </div>

        {/* Metric Counter Cards */}
        <div className={styles.metricGrid}>
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <div key={i} className={styles.metricCard}>
                <div className={styles.metricIconWrap}>
                  <Icon size={20} />
                </div>
                <div className={styles.metricValue}>{m.value}</div>
                <div className={styles.metricLabel}>{m.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
