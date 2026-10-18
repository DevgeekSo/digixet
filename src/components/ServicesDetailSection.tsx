"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Share2,
  Video,
  Users,
  TrendingUp,
  Bot,
  Film,
  UserCheck,
  Megaphone,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import styles from "./ServicesDetailSection.module.css";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface ServiceItem {
  id: string;
  category: "all" | "organic" | "content" | "creators" | "paid_ai";
  categoryLabel: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  tools: string[];
  metricLabel: string;
  metricValue: string;
  colorClass: string;
  accentClass: string;
  icon: React.ElementType;
}

export default function ServicesDetailSection() {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "organic" | "content" | "creators" | "paid_ai"
  >("all");

  const services: ServiceItem[] = [
    {
      id: "01",
      category: "organic",
      categoryLabel: "Organic & Growth",
      title: "Social Media Management",
      tagline: "Always-on brand dominance across every major feed",
      description:
        "We run your multi-platform social presence end-to-end. From curated 30-day content calendars, platform-native copywriting, and daily publishing to proactive community engagement, we build brand affinity and loyal followers.",
      features: [
        "End-to-end 30-day multi-platform content calendar & aesthetic grid design",
        "Daily publishing & native caption copywriting across IG, TikTok, LinkedIn & X",
        "Active community moderation, story management & fast DM response nurture",
        "Monthly comprehensive analytics report & strategic feed optimizations",
      ],
      tools: [
        "Meta Business Suite",
        "Sprout Social",
        "Notion",
        "Canva Pro",
        "CapCut",
      ],
      metricLabel: "Community Impact",
      metricValue: "3.4x Faster Follower Growth",
      colorClass: styles.colorBlue,
      accentClass: styles.accentBlue,
      icon: Share2,
    },
    {
      id: "02",
      category: "content",
      categoryLabel: "Content & Production",
      title: "Content Production",
      tagline:
        "High-fidelity visual storytelling engineered to stop the scroll",
      description:
        "In today’s fast-paced feed, visuals make or break your reach. Our in-house production crew delivers cinematic 4K vertical reels, studio product shoots, podcast clips, and sound-trend edits crafted for peak algorithmic retention.",
      features: [
        "Full creative concepting, storyboard drafting, and script development",
        "High-resolution 4K studio & on-location multi-angle shoots",
        "Fast-paced short-form video editing, sound engineering & animated kinetic subs",
        "Batch multi-format asset delivery (9:16, 1:1, 16:9) ready for instant deployment",
      ],
      tools: [
        "Adobe Premiere Pro",
        "After Effects",
        "DaVinci Resolve",
        "Sony Cinema 4K",
        "CapCut",
      ],
      metricLabel: "Monthly Volume",
      metricValue: "30–50 High-Res Assets / Mo",
      colorClass: styles.colorPurple,
      accentClass: styles.accentPurple,
      icon: Video,
    },
    {
      id: "03",
      category: "creators",
      categoryLabel: "Creators & Influencers",
      title: "Influencer & Creator Marketing",
      tagline: "High-affinity creator partnerships that scale genuine trust",
      description:
        "Borrow credibility and tap into passionate communities. We pair your brand with hand-vetted macro and micro-creators, orchestrate product gifting seedings, negotiate usage licenses, and manage campaign deliverables with zero friction.",
      features: [
        "Access to our proprietary 1,200+ vetted creator database across DTC & B2B niches",
        "End-to-end outreach, gifting logistics, contracts, and usage licensing negotiations",
        "Spark Ads / Whitelisting permissions setup for direct paid amplification",
        "Influencer ROI tracking, custom affiliate discount attribution & real-time reporting",
      ],
      tools: [
        "TikTok Creator Marketplace",
        "Grin",
        "Aspire",
        "Upfluence",
        "Dash Hudson",
      ],
      metricLabel: "Average Reach",
      metricValue: "2.5M+ Reach / Campaign",
      colorClass: styles.colorPink,
      accentClass: styles.accentPink,
      icon: Users,
    },
    {
      id: "04",
      category: "organic",
      categoryLabel: "Organic & Growth",
      title: "Social Media Strategy & Growth",
      tagline: "Data-driven roadmaps to consistently outpace the algorithm",
      description:
        "Stop guessing what the algorithm wants. We perform deep competitor teardowns, isolate viral storytelling frameworks, define high-converting content pillars, and craft an actionable growth blueprint engineered for sustainable audience expansion.",
      features: [
        "90-day custom growth roadmap with granular platform benchmarks & KPIs",
        "In-depth competitor analysis, creative teardowns & industry opportunity maps",
        "Proprietary viral hook bank & retention-boosting storytelling framework templates",
        "Weekly creative sprint audits to iterate on top-performing organic angles",
      ],
      tools: [
        "TikTok Creative Center",
        "Dash Hudson",
        "Social Blade",
        "Meta Insights",
        "Brand24",
      ],
      metricLabel: "Organic Impressions",
      metricValue: "50M+ Organic Views",
      colorClass: styles.colorAmber,
      accentClass: styles.accentAmber,
      icon: TrendingUp,
    },
    {
      id: "05",
      category: "paid_ai",
      categoryLabel: "Paid & AI Performance",
      title: "AI Marketing Automation",
      tagline:
        "Multiply marketing output and conversions with intelligent workflows",
      description:
        "Harness the cutting edge of AI to eliminate marketing bottlenecks. We deploy intelligent 24/7 DM conversion bots, automate content repurposing, translate content for global audiences, and run predictive creative performance simulations.",
      features: [
        "Intelligent AI-driven DM lead capture & qualification funnels (ManyChat + GPT-4o)",
        "Automated multi-language AI video dubbing & voice cloning for global expansion",
        "Automated video repurposing workflows converting long-form into viral shorts",
        "Real-time automated performance dashboards and alert triggers via Slack & Make",
      ],
      tools: [
        "OpenAI GPT-4o",
        "Claude 3.5 Sonnet",
        "ManyChat",
        "Make.com",
        "ElevenLabs",
        "Midjourney",
      ],
      metricLabel: "Efficiency Gain",
      metricValue: "85% Response Automation",
      colorClass: styles.colorEmerald,
      accentClass: styles.accentEmerald,
      icon: Bot,
    },
    {
      id: "06",
      category: "content",
      categoryLabel: "Content & Production",
      title: "UGC Marketing",
      tagline:
        "Authentic user-generated content engineered for immediate sales",
      description:
        "Consumers don’t trust shiny corporate ads—they trust real people. We brief, script, and produce authentic direct-response UGC videos featuring relatable creators who highlight genuine benefits, unboxings, and problem-solution angles.",
      features: [
        "Psychologically engineered hook scripts (Problem-Agitate-Solve & Before-After-Bridge)",
        "Diverse creator casting matching your target audience demographics",
        "Comprehensive creative variations: 3 hooks + 2 bodies + 2 CTAs per concept",
        "Full commercial usage rights & ad licensing for Meta, TikTok & YouTube",
      ],
      tools: [
        "CapCut Pro",
        "Frame.io",
        "Notion Creator Hub",
        "TikTok Ads Manager",
      ],
      metricLabel: "Paid UGC ROAS",
      metricValue: "+340% Avg. ROAS Lift",
      colorClass: styles.colorCyan,
      accentClass: styles.accentCyan,
      icon: Film,
    },
    {
      id: "07",
      category: "creators",
      categoryLabel: "Creators & Influencers",
      title: "Personal Creator Marketing",
      tagline: "Turn founders & creators into industry-defining authorities",
      description:
        "People buy from people, not faceless corporate entities. We transform founders, executives, and top creators into recognized voices on LinkedIn, X, and YouTube, establishing immense authority that drives high-ticket inbound pipeline.",
      features: [
        "Executive ghostwriting for high-engagement LinkedIn posts, X threads & articles",
        "Founder talking-head video strategy, remote recording & high-energy editing",
        "Personal narrative development, positioning manifesto & thought leadership angles",
        "Inbound lead capture systems converting profile views into client discovery calls",
      ],
      tools: ["Typefully", "Taplio", "Descript", "Riverside.fm", "Substack"],
      metricLabel: "Inbound Growth",
      metricValue: "10x Qualified Inbound Leads",
      colorClass: styles.colorRose,
      accentClass: styles.accentRose,
      icon: UserCheck,
    },
    {
      id: "08",
      category: "paid_ai",
      categoryLabel: "Paid & AI Performance",
      title: "Meta & Google Paid Ads Campaign",
      tagline:
        "Full-funnel performance marketing engineered for profitable scale",
      description:
        "Scale your revenue with disciplined media buying and winning creative volume. We manage full-funnel paid advertising across Meta (Instagram & Facebook) and Google Ads (Search, YouTube & Performance Max), optimizing daily for lowest CAC.",
      features: [
        "Full-funnel campaign architecture: prospecting (CBO/broad), consideration & retargeting",
        "Google Ads scaling: High-intent Search, Performance Max, and YouTube In-Stream ads",
        "Bulletproof tracking: Conversions API (CAPI), Server-side GTM, and GA4 tracking setup",
        "Continuous creative testing roadmap: Weekly ad variant testing to conquer ad fatigue",
      ],
      tools: [
        "Meta Ads Manager",
        "Google Ads",
        "Google Tag Manager",
        "Triple Whale",
        "GA4",
      ],
      metricLabel: "Ad Spend Scale",
      metricValue: "4.8x Blended ROAS Return",
      colorClass: styles.colorIndigo,
      accentClass: styles.accentIndigo,
      icon: Megaphone,
    },
  ];

  const filteredServices =
    activeFilter === "all"
      ? services
      : services.filter((s) => s.category === activeFilter);

  const filterTabs = [
    { key: "all", label: "All Services", count: 8 },
    { key: "organic", label: "Social & Strategy", count: 2 },
    { key: "content", label: "Content & UGC", count: 2 },
    { key: "creators", label: "Creators & Influencers", count: 2 },
    { key: "paid_ai", label: "Paid Ads & AI", count: 2 },
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerWrapper}>
          <div className={styles.pillBadge}>
            <span className={styles.pillDot}></span>
            <span>Comprehensive Agency Capabilities</span>
          </div>

          <h2 className={styles.mainHeading}>
            Services Engineered For{" "}
            <span className={styles.headingHighlight}>Unstoppable Growth</span>
          </h2>

          <p className={styles.subHeading}>
            From viral UGC video production and AI automation to high-ROAS paid
            acquisition across Meta & Google, we provide every discipline your
            brand needs to scale.
          </p>

          {/* Quick Stats Bar */}
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>8</div>
              <div className={styles.statLabel}>Core Disciplines</div>
            </div>
            <div className={styles.statItem}>
              <div
                className={`${styles.statNumber} ${styles.statNumberHighlight}`}
              >
                1,200+
              </div>
              <div className={styles.statLabel}>Vetted Creators</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>4.8x</div>
              <div className={styles.statLabel}>Average ROAS Lift</div>
            </div>
            <div className={styles.statItem}>
              <div
                className={`${styles.statNumber} ${styles.statNumberHighlight}`}
              >
                50M+
              </div>
              <div className={styles.statLabel}>Organic Impressions</div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className={styles.filterBar}>
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveFilter(tab.key as any)}
                className={`${styles.filterBtn} ${
                  activeFilter === tab.key ? styles.filterBtnActive : ""
                }`}
              >
                <span>{tab.label}</span>
                <span className={styles.filterCount}>{tab.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className={styles.servicesGrid}>
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className={styles.serviceCard}>
                {/* Accent line at the top */}
                <div
                  className={`${styles.cardAccentBar} ${service.accentClass}`}
                ></div>

                {/* Card Top */}
                <div className={styles.cardTop}>
                  <div className={styles.badgeGroup}>
                    <span className={styles.serviceId}>#{service.id}</span>
                    <span className={styles.categoryBadge}>
                      {service.categoryLabel}
                    </span>
                  </div>

                  <div
                    className={`${styles.iconWrapper} ${service.colorClass}`}
                  >
                    <IconComponent size={24} />
                  </div>
                </div>

                {/* Card Main Info */}
                <div className={styles.cardMain}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <div className={styles.cardTagline}>{service.tagline}</div>
                  <p className={styles.cardDescription}>
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className={styles.featuresList}>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className={styles.featureItem}>
                        <CheckCircle2 className={styles.featureIcon} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tools Stack */}
                  <div className={styles.stackWrapper}>
                    <span className={styles.stackLabel}>
                      Tech & Ecosystem Tools:
                    </span>
                    <div className={styles.tagsList}>
                      {service.tools.map((tool, idx) => (
                        <span key={idx} className={styles.toolTag}>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Bottom: Metric & Direct CTA */}
                <div className={styles.cardBottom}>
                  <div className={styles.metricBox}>
                    <span className={styles.metricLabel}>
                      {service.metricLabel}
                    </span>
                    <span className={styles.metricValue}>
                      {service.metricValue}
                    </span>
                  </div>

                  <a
                    href={getWhatsAppUrl(`Hi, I would like to enquire about your service: ${service.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.actionBtn}
                  >
                    <span>Get Started</span>
                    <ArrowUpRight size={16} className={styles.actionIcon} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Growth Engine Flywheel */}
        <div className={styles.ecosystemWrapper}>
          <div className={styles.ecosystemBgGlow}></div>

          <div className={styles.ecosystemHeader}>
            <span className={styles.ecosystemBadge}>
              The Digixet Growth Flywheel
            </span>
            <h3 className={styles.ecosystemTitle}>
              How Our 8 Services Compound Into Massive Revenue
            </h3>
            <p className={styles.ecosystemDesc}>
              No service operates in a vacuum. We orchestrate strategy, creative
              production, talent distribution, and algorithmic paid scale into
              an integrated engine that lowers acquisition costs while growing
              brand value.
            </p>
          </div>

          <div className={styles.ecosystemSteps}>
            <div className={styles.ecosystemStepCard}>
              <div className={styles.stepIndex}>STAGE 01</div>
              <h4 className={styles.stepTitle}>Strategy & Analytics</h4>
              <p className={styles.stepText}>
                We uncover competitor blindspots, pinpoint audience desires, and
                map out viral hook angles for each platform.
              </p>
            </div>

            <div className={styles.ecosystemStepCard}>
              <div className={styles.stepIndex}>STAGE 02</div>
              <h4 className={styles.stepTitle}>Creative & UGC Studio</h4>
              <p className={styles.stepText}>
                High-volume production of authentic creator videos, podcast
                cuts, and high-converting problem-solution demos.
              </p>
            </div>

            <div className={styles.ecosystemStepCard}>
              <div className={styles.stepIndex}>STAGE 03</div>
              <h4 className={styles.stepTitle}>Creator Seeding & Personal</h4>
              <p className={styles.stepText}>
                1,200+ creator distribution network combined with executive
                personal branding establishes instant social proof.
              </p>
            </div>

            <div className={styles.ecosystemStepCard}>
              <div className={styles.stepIndex}>STAGE 04</div>
              <h4 className={styles.stepTitle}>Paid Meta & Google Scale</h4>
              <p className={styles.stepText}>
                The best-performing organic UGC hooks are amplified with
                full-funnel media buying for predictable, profitable ROAS.
              </p>
            </div>

            <div className={styles.ecosystemStepCard}>
              <div className={styles.stepIndex}>STAGE 05</div>
              <h4 className={styles.stepTitle}>AI Automation & Retention</h4>
              <p className={styles.stepText}>
                Smart DM bots capture leads 24/7, workflows recycle assets, and
                daily management turns audiences into buyers.
              </p>
            </div>
          </div>

          <div className={styles.ctaBox}>
            <a
              href={getWhatsAppUrl("Hi, I would like to book a discovery strategy call.")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryCta}
            >
              <span>Book A Discovery Strategy Call</span>
              <ArrowRight size={18} />
            </a>
            <Link href="/pricing" className={styles.secondaryCta}>
              <span>View Transparent Pricing Plans</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
