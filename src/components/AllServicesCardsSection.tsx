"use client";

import React, { useState } from "react";

interface ServiceData {
  id: string;
  category: string;
  title: string;
  description: string;
  bgClass: string;
  icon: string;
  image: string;
  counter: string;
  counterLabel: string;
  badges: string[];
}

export default function AllServicesCardsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const services: ServiceData[] = [
    {
      id: "01",
      category: "social",
      title: "Social media management",
      description:
        "From content calendar to caption to publish button we run your social presence end to end. Consistent posting, platform-native content, active community moderation, and weekly performance reviews so nothing flies blind.",
      bgClass: "bg-primary-3",
      icon: "https://cdn.prod.website-files.com/6a018c163190c0cf03857406/6a084c62f9c18ffe72fe2193_r1QXknMyDePKD2F4NowFggs96NE.svg",
      image:
        "https://cdn.prod.website-files.com/6a018c163190c0cf03857406/6a084c62f9c18ffe72fe218f_KWeBr23rXlvptcYLkZ2uE9HPzI.jpeg",
      counter: "3x",
      counterLabel: "Avg. posting frequency",
      badges: [
        "30-day content calendar",
        "Daily publishing & copy",
        "Active DM response & moderation",
      ],
    },
    {
      id: "02",
      category: "content",
      title: "Content production",
      description:
        "Studio-grade 4K vertical video shoots, sound engineering, and viral short-form editing. We script, film, and deliver high-retention video assets, product reels, and podcasts built to capture attention and perform.",
      bgClass: "bg-primary-6",
      icon: "https://cdn.prod.website-files.com/6a018c163190c0cf03857406/6a084c6587f01f3e37ff8e9b_A1apwyed4TlteJZAYJaOlRTkrM.svg",
      image:
        "https://cdn.prod.website-files.com/6a018c163190c0cf03857406/6a084c6587f01f3e37ff8e9f_b4AD9fZsmatruxxVo4g1prdRndc.jpeg",
      counter: "40+",
      counterLabel: "Monthly assets delivered",
      badges: [
        "Full brief & storyboard included",
        "4K multi-angle video shoots",
        "Multi-format asset delivery",
      ],
    },
    {
      id: "03",
      category: "creators",
      title: "Influencer & creator marketing",
      description:
        "We don't just find creators — we match them to your exact niche, test multiple hooks, and build storytelling frameworks that scale what works. Data drives every decision, not gut feeling.",
      bgClass: "bg-primary-2",
      icon: "https://cdn.prod.website-files.com/6a018c163190c0cf03857406/6a084c6472a2a4d397ea2376_kFyXGrHde2mLzgeL3jgm8TSm2RY.svg",
      image:
        "https://cdn.prod.website-files.com/6a018c163190c0cf03857406/6a084c6472a2a4d397ea2379_WdTf0zL0GaUP4c8rQieARW4yzJw.jpeg",
      counter: "50M+",
      counterLabel: "Total impressions",
      badges: [
        "Niche creator matching",
        "Hook testing & gifting",
        "Weekly performance iteration",
      ],
    },
    {
      id: "04",
      category: "social",
      title: "Social media strategy & growth",
      description:
        "Data-backed roadmaps to consistently outpace the algorithm. We analyze your industry landscape, run competitor teardowns, isolate viral hook formulas, and build predictable organic distribution systems.",
      bgClass: "bg-primary-1",
      icon: "https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ad56634c59ded8fa8262f_Icon-01.svg",
      image:
        "https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ab5f3e613777cd294ef81_counter-img.webp",
      counter: "80M+",
      counterLabel: "Organic views generated",
      badges: [
        "90-day actionable roadmap",
        "Weekly viral hook testing",
        "Audience demographic scaling",
      ],
    },
    {
      id: "05",
      category: "ai_paid",
      title: "AI marketing automation",
      description:
        "Scale your marketing output without expanding headcount. We deploy intelligent 24/7 DM conversion bots, automated video repurposing workflows, multilingual AI voice dubbing, and real-time automated analytics.",
      bgClass: "bg-primary-5",
      icon: "https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ad7752a4776be6366b59e_Icon-03.svg",
      image:
        "https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ac17ba57a100e20c3835c_mission-img.jpg",
      counter: "85%",
      counterLabel: "Automated response rate & 4x speed",
      badges: [
        "24/7 AI DM lead capture & qualification",
        "Automated video repurposing pipelines",
        "Multilingual AI voice cloning",
      ],
    },
    {
      id: "06",
      category: "content",
      title: "UGC marketing",
      description:
        "We source, brief, and deliver creator videos that feel native to the platform. Every video is built around your audience, not a production checklist — designed to perform, not just look good.",
      bgClass: "bg-primary-4",
      icon: "https://cdn.prod.website-files.com/6a018c163190c0cf03857406/6a084c63dab31b18f0671861_xfWz6cEvwfrSF2jrWQvlgN8zRbU.svg",
      image:
        "https://cdn.prod.website-files.com/6a018c163190c0cf03857406/6a084c63dab31b18f0671864_l3R3hJN7IfFLHl0Lk2CpPPZ3Vo.jpeg",
      counter: "1,200+",
      counterLabel: "UGC videos delivered",
      badges: [
        "Creator sourcing & vetting",
        "Full brief included",
        "Unlimited revisions",
      ],
    },
    {
      id: "07",
      category: "creators",
      title: "Personal creator marketing",
      description:
        "Turn founders, executives, and top creators into category-defining authorities. We build executive thought leadership on LinkedIn, X, and short-form video that builds immense trust and drives high-ticket inbound deal flow.",
      bgClass: "bg-primary-2",
      icon: "https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ad77582d04d82fed4e402_Icon-02.svg",
      image:
        "https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0adf1aa167921171b179e3_avatar25.jpg.png.jpg",
      counter: "10x",
      counterLabel: "Inbound founder pipeline",
      badges: [
        "Executive ghostwriting & positioning",
        "Talking-head video production",
        "High-ticket inbound lead capture",
      ],
    },
    {
      id: "08",
      category: "ai_paid",
      title: "Meta & google paid ads campaign",
      description:
        "Take real UGC and turn it into thumb-stopping ad creatives. Full-funnel performance marketing across Meta Ads (Instagram/Facebook) and Google Ads (Search, YouTube & Performance Max) optimized daily for lowest CAC.",
      bgClass: "bg-primary-6",
      icon: "https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ad775ceb2dc85a947fe5f_Icon-04.svg",
      image:
        "https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0701aadf310ee6a5cecb5a_counter.avif",
      counter: "4.8x",
      counterLabel: "Average ROAS lift",
      badges: [
        "Full-funnel campaign architecture",
        "Google Search & PMax scaling",
        "Performance report & daily iteration",
      ],
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  const filterTabs = [
    { key: "all", label: "All Services (8)" },
    { key: "social", label: "Social & Strategy" },
    { key: "content", label: "Content & UGC" },
    { key: "creators", label: "Creators & Influencers" },
    { key: "ai_paid", label: "Paid Ads & AI" },
  ];

  return (
    <section data-scroll="load" className="section-spacing-bottom">
      <div className="container-medium">
        {/* Section Title */}
        <div className="section-title">
          <div
            scroll-item="show"
            className="align-center"
            style={{ marginBottom: "16px" }}
          >
            <div data-wf--pre-title--variant="base" className="pre-title">
              Our full service suite
            </div>
          </div>
          <h2 scroll-item="show" className="service-title">
            How we grow you
          </h2>
          <p
            scroll-item="show"
            style={{
              maxWidth: "680px",
              margin: "16px auto 32px",
              color: "rgba(17, 17, 17, 0.75)",
              fontSize: "18px",
              lineHeight: 1.6,
              textAlign: "center",
            }}
          >
            From full-funnel creator UGC production and influencer seeding to AI
            automation and Meta &amp; Google paid scale, discover our 8 core
            growth disciplines.
          </p>

          {/* Filter Pills matching Webflow Toggle Styling */}
          <div
            scroll-item="show"
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "40px",
            }}
          >
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveCategory(tab.key)}
                  style={{
                    cursor: "pointer",
                    border: "1px solid " + (isActive ? "#111111" : "#e2e8f0"),
                    background: isActive ? "#111111" : "#ffffff",
                    color: isActive ? "#ffffff" : "#111111",
                    padding: "10px 22px",
                    borderRadius: "9999px",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    transition: "all 0.25s ease",
                    boxShadow: isActive
                      ? "0 6px 16px rgba(0, 0, 0, 0.15)"
                      : "0 2px 6px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Stacking Service Cards in exact Webflow Layout */}
        <div scroll-item="show" className="service-sticky">
          <div className="service-content">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="collection-list-wrapper w-dyn-list"
              >
                <div role="list" className="collection-list _02 w-dyn-items">
                  <div
                    role="listitem"
                    className="collection-item-02 w-dyn-item"
                  >
                    <div className={`service-card ${service.bgClass}`}>
                      {/* Service Card Top */}
                      <div className="service-card-top">
                        <div className="service-card-info">
                          <h3 className="service-card-title">
                            {service.title}
                          </h3>
                          <p className="service-card-description">
                            {service.description}
                          </p>
                        </div>
                        <div className="service-icon-round">
                          <img
                            src={service.icon}
                            loading="lazy"
                            alt="Service Icon"
                            className="service-icon"
                          />
                        </div>
                      </div>

                      {/* Service Card Bottom */}
                      <div className="w-layout-grid grid-service-bottom">
                        <div className="service-card-detail">
                          <div className="service-badge-list">
                            {service.badges.map((badge, idx) => (
                              <div key={idx} className="list-item">
                                <img
                                  src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                                  loading="lazy"
                                  alt="Correct Icon"
                                  className="list-icon"
                                />
                                <div className="list-title">{badge}</div>
                              </div>
                            ))}
                          </div>

                          <div className="service-counter-info">
                            <h4 className="service-counter">
                              {service.counter}
                            </h4>
                            <div>{service.counterLabel}</div>
                          </div>

                          {/* Action Button matching Webflow Rolling Arrow Button */}
                          <div style={{ marginTop: "20px" }}>
                            <a
                              button="hover"
                              data-wf--button-arrow--variant="base-button"
                              href={`/contact?service=${encodeURIComponent(service.title)}`}
                              className="button-arrow w-inline-block"
                            >
                              <div className="button-icon-round">
                                <img
                                  src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a02f8131485834ac5de15a5_button-arrow.svg"
                                  loading="eager"
                                  alt="Arrow Icon"
                                  className="button-icon"
                                />
                              </div>
                              <div className="button-text-wrap">
                                <div text-1="move" className="button-text">
                                  Get started
                                </div>
                                <div
                                  text-2="move"
                                  className="button-hover-text"
                                >
                                  Get started
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>

                        <div className="service-card-image-item">
                          <img
                            src={service.image}
                            loading="lazy"
                            alt="Service Image"
                            className="service-card-image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="empty-space lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
