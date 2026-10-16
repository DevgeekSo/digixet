"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

export default function FaqsPage() {
  const [activeTab, setActiveTab] = useState(1);
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    "t1-0": true,
    "t2-0": true,
    "t3-0": true,
    "t4-0": true,
    "t5-0": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const tabs = [
    { id: 1, name: "General" },
    { id: 2, name: "Content & Strategy" },
    { id: 3, name: "Growth" },
    { id: 4, name: "Posting & Consistency" },
    { id: 5, name: "Support" },
  ];

  const faqData: Record<
    number,
    Array<{ num: string; q: string; a: string }>
  > = {
    1: [
      {
        num: "01.",
        q: "What is this social media template for?",
        a: "It helps you plan, organize, and manage your content strategy in a simple and structured way.",
      },
      {
        num: "02.",
        q: "Who can use this template?",
        a: "Creators, freelancers, brands, and agencies can use it for content planning and growth.",
      },
      {
        num: "03.",
        q: "Do I need prior experience to use it?",
        a: "No, the template is designed to be beginner-friendly with an easy-to-follow layout.",
      },
      {
        num: "04.",
        q: "Can I customize the template?",
        a: "Yes, all sections, text, and layouts can be edited to match your workflow and style.",
      },
      {
        num: "05.",
        q: "Does it work for all social platforms?",
        a: "Yes, it can be adapted for Instagram, TikTok, LinkedIn, and other platforms.",
      },
    ],
    2: [
      {
        num: "01.",
        q: "How i plan content with template?",
        a: "You can organize ideas into categories and map out posts for consistent publishing.",
      },
      {
        num: "02.",
        q: "what content to focus on?",
        a: "Focus on value-driven, engaging, and relatable content that fits your niche.",
      },
      {
        num: "03.",
        q: "How i avoid running out of ideas?",
        a: "Use content pillars and repeat proven formats with new angles.",
      },
      {
        num: "04.",
        q: "Use for multiple content types?",
        a: "Yes, it supports reels, posts, carousels, and other formats.",
      },
      {
        num: "05.",
        q: "Maintain clear content direction?",
        a: "Stick to defined themes and align all content with your audience goals.",
      },
    ],
    3: [
      {
        num: "01.",
        q: "why is my content not reaching?",
        a: "It may be due to weak hooks, inconsistent posting, or low audience interaction.",
      },
      {
        num: "02.",
        q: "How to increase post engagement?",
        a: "Create interactive content and encourage comments, shares, and saves.",
      },
      {
        num: "03.",
        q: "Do hashtags still work?",
        a: "Yes, when used strategically, they help reach relevant audiences.",
      },
      {
        num: "04.",
        q: "How important is audience interaction?",
        a: "Very important, as replying and engaging builds trust and visibility.",
      },
      {
        num: "05.",
        q: "How long to see growth?",
        a: "Growth takes time and consistency, usually improving over weeks or months.",
      },
    ],
    4: [
      {
        num: "01.",
        q: "How often should I post content?",
        a: "Posting 3–5 times per week consistently is more effective than random posting.",
      },
      {
        num: "02.",
        q: "What if I miss a posting day?",
        a: "It’s okay, just continue your schedule without overcompensating.",
      },
      {
        num: "03.",
        q: "Stay consistent without burnout?",
        a: "Plan ahead, batch content, and keep your workflow simple.",
      },
      {
        num: "04.",
        q: "Is it better to post daily or weekly?",
        a: "Consistency matters more than frequency, so choose what’s sustainable.",
      },
      {
        num: "05.",
        q: "Should I follow a content calendar?",
        a: "Yes, it helps you stay organized and maintain a regular posting routine.",
      },
    ],
    5: [
      {
        num: "01.",
        q: "Is this template easy to set up?",
        a: "Yes, it’s designed for quick setup with minimal steps.",
      },
      {
        num: "02.",
        q: "Use this template for client work?",
        a: "Yes, it works well for managing multiple clients and content plans.",
      },
      {
        num: "03.",
        q: "Supports mobile and desktop?",
        a: "Yes, the template is fully responsive across all devices.",
      },
      {
        num: "04.",
        q: "Face issues while using it?",
        a: "You can troubleshoot easily or reach out for support if needed.",
      },
      {
        num: "05.",
        q: "Will this template be updated?",
        a: "Yes, updates can be added to improve features and usability over time.",
      },
    ],
  };

  return (
    <main className="main">
      <Navbar />

      <div className="hero-simple-section">
        <div className="container-small">
          <div className="hero-inner-wrap">
            <h1 data="show" className="hero-inner-title">
              Frequently asked questions
            </h1>
          </div>
        </div>
      </div>

      <div className="section-spacing-bottom">
        <div className="container-small">
          <div className="faqs-tab w-tabs">
            {/* Tab Navigation */}
            <div
              data="show"
              className="faqs-tab-menu w-tab-menu"
              style={{ flexWrap: "wrap", cursor: "pointer" }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`faqs-tab-link w-inline-block w-tab-link ${
                    activeTab === tab.id ? "w--current" : ""
                  }`}
                  style={{
                    cursor: "pointer",
                    outline: "none",
                    border:
                      activeTab === tab.id
                        ? "1px solid #000"
                        : "1px solid rgba(0,0,0,0.1)",
                  }}
                >
                  <div>{tab.name}</div>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="faqs-tabs-content w-tab-content">
              <div className="faqs-tab-pane w-tab-pane w--tab-active">
                <div className="faqs-tab-list">
                  {faqData[activeTab]?.map((item, idx) => {
                    const itemId = `t${activeTab}-${idx}`;
                    const isOpen = openItems[itemId] || false;
                    return (
                      <div
                        key={itemId}
                        data="show"
                        className={`faqs-item ${isOpen ? "is-open" : ""}`}
                        onClick={() => toggleItem(itemId)}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="faqs-heading">
                          <div className="faqs-title-item">
                            <div className="faqs-title top">{item.num}</div>
                            <h2 className="faqs-title">{item.q}</h2>
                          </div>
                          <div className="faqs-icon">
                            <div className="faqs-divider-vr" />
                            <div className="faqs-divider-hr" />
                          </div>
                        </div>
                        <div
                          className="faqs-content"
                          style={{
                            maxHeight: isOpen ? "300px" : "0px",
                            opacity: isOpen ? 1 : 0,
                            overflow: "hidden",
                            transition:
                              "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                          }}
                        >
                          <p className="faqs-description">{item.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
