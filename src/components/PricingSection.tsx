"use client";

import React, { useState } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");

  return (
    <section data-scroll="load" className="section-spacing">
      <div className="container-medium">
        <div className="pricing-content">
          <div className="section-title">
            <div className="w-layout-grid grid-pricing">
              <div className="pricing-section-title">
                <div scroll-item="show" className="left-item">
                  <div data-wf--pre-title--variant="base" className="pre-title">
                    Pricing plan
                  </div>
                </div>
                <h2 scroll-item="show" className="no-margin-bottom">
                  Honest pricing. No hidden fees.
                </h2>
              </div>
            </div>
          </div>
          <div
            data-current={activeTab === "monthly" ? "Tab 1" : "Tab 2"}
            data-easing="ease"
            data-duration-in="0"
            data-duration-out="0"
            className="pricing-tab w-tabs"
          >
            <div scroll-item="show" className="pricing-toggle w-tab-menu" role="tablist">
              <button
                type="button"
                data-w-tab="Tab 1"
                className={`toggle w-inline-block w-tab-link ${activeTab === "monthly" ? "w--current" : ""}`}
                onClick={() => setActiveTab("monthly")}
                style={{ cursor: "pointer", background: "none", border: "none", font: "inherit" }}
              >
                <div className="toggle-text">Monthly</div>
              </button>
              <button
                type="button"
                data-w-tab="Tab 2"
                className={`toggle w-inline-block w-tab-link ${activeTab === "yearly" ? "w--current" : ""}`}
                onClick={() => setActiveTab("yearly")}
                style={{ cursor: "pointer", background: "none", border: "none", font: "inherit" }}
              >
                <div className="toggle-text">Yearly</div>
                <div className="toggle-badge">20% off</div>
              </button>
            </div>
            <div scroll-item="show" className="w-tab-content">
              <div
                data-w-tab="Tab 1"
                className={`pricing-tab-pane w-tab-pane ${activeTab === "monthly" ? "w--tab-active" : ""}`}
                style={{
                  display: activeTab === "monthly" ? "block" : "none",
                  opacity: activeTab === "monthly" ? 1 : 0,
                  transform: activeTab === "monthly" ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.35s ease, transform 0.35s ease",
                }}
              >
                <div className="w-layout-grid grid-pricing-item">
                  <div className="pricing-card bg-gray-4">
                    <div className="pricing-card-top">
                      <h3 className="pricing-card-title">Starter plan</h3>
                    </div>
                    <div className="pricing-card-bottom bg-white">
                      <div className="pricing-card-info">
                        <p className="pricing-pre-title">
                          For brands just getting reach
                        </p>
                        <div className="pricing-amount">
                          <h4 className="heading-h3 no-margin-bottom">
                            ₹9,999
                          </h4>
                          <div className="pricing-amount-item">
                            <div className="pricing-amount-text">/month</div>
                          </div>
                        </div>
                        <div className="pricing-list">
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              Manage 1 social media platform
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              15 AI viral reels/shorts per month
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              15 social creative posts per month
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              Viral research & trend-based creation
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              Monthly performance report
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              Engagement & reach-focused growth
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        button="hover"
                        data-wf--button-primary--variant="base"
                        href={getWhatsAppUrl("Hi, I want to get started with the Starter Plan (Monthly).")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-primary w-inline-block"
                      >
                        <div className="button-primary-title">
                          <div text-1="move">
                            Get started
                            <br />
                          </div>
                          <div text-2="move">
                            Get started
                            <br />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="pricing-card bg-white">
                    <div className="pricing-card-top _02">
                      <h3 className="pricing-card-title _02">Growth Plan</h3>
                      <div className="pricing-badge">
                        <img
                          src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ad9262f446e742ca2515f_blue%20shape%202.svg"
                          loading="lazy"
                          alt="Shape"
                          className="pricing-badge-shape"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ad9261216d16bb1797849_blue%20shape.svg"
                          loading="lazy"
                          alt="Shape"
                          className="pricing-badge-shape right"
                        />
                        <div className="pricing-badge-title">Most popular</div>
                      </div>
                    </div>
                    <div className="pricing-card-bottom bg-primary-6">
                      <div className="pricing-card-info">
                        <p className="pricing-pre-title dark">
                          For brands ready to scale fast
                        </p>
                        <div className="pricing-amount">
                          <h4 className="heading-h3 no-margin-bottom">
                            ₹25,999
                          </h4>
                          <div className="pricing-amount-item">
                            <div className="pricing-amount-text dark">
                              /month
                            </div>
                          </div>
                        </div>
                        <div className="pricing-list">
                          <div
                            data-wf--list-item--variant="dark"
                            className="list-item w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                            />
                            <div className="list-title w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9">
                              Manage across 3 platforms
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="dark"
                            className="list-item w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                            />
                            <div className="list-title w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9">
                              30 AI viral reels/shorts per month
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="dark"
                            className="list-item w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                            />
                            <div className="list-title w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9">
                              30 social creative posts per month
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="dark"
                            className="list-item w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                            />
                            <div className="list-title w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9">
                              Daily posting & active engagement
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="dark"
                            className="list-item w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                            />
                            <div className="list-title w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9">
                              Influencer marketing & collaboration
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="dark"
                            className="list-item w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                            />
                            <div className="list-title w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9">
                              Weekly performance insights
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="dark"
                            className="list-item w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                            />
                            <div className="list-title w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9">
                              Outreach & right audience growth
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        button="hover"
                        data-wf--button-primary--variant="base"
                        href={getWhatsAppUrl("Hi, I want to get started with the Growth Plan (Monthly).")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-primary w-inline-block"
                      >
                        <div className="button-primary-title">
                          <div text-1="move">Get growth plan</div>
                          <div text-2="move">Get growth plan</div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    id="w-node-ed7c1f5b-500b-e922-55f3-7edce7a46737-038573e5"
                    className="pricing-card"
                  >
                    <div className="pricing-card-top">
                      <div className="pricing-overlay"></div>
                      <h3 className="pricing-card-title text-white">
                        Custom Plan
                      </h3>
                    </div>
                    <div className="pricing-card-bottom bg-white">
                      <div className="pricing-card-info">
                        <p className="pricing-pre-title">
                          Full-service for high-growth brands


                        </p>
                        <div className="pricing-amount">
                          <h4 className="heading-h3 no-margin-bottom">
                            Custom
                          </h4>
                          <div className="pricing-amount-item">
                            <div className="pricing-amount-text">pricing</div>
                          </div>
                        </div>
                        <div className="pricing-list">
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              Manage multiple platforms & accounts
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              Customise daily number of posts
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              UGC videos per month
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              Creator & influencer marketing / collaboration
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              Live dashboard + weekly analysis
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              Paid advertising campaigns
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              Dedicated account manager & priority support
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        button="hover"
                        data-wf--button-primary--variant="base"
                        href={getWhatsAppUrl("Hi, I want to enquire about the Custom / Scale Plan (Monthly).")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-primary w-inline-block"
                      >
                        <div className="button-primary-title">
                          <div text-1="move">Get custom plan</div>
                          <div text-2="move">Get custom plan</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-w-tab="Tab 2"
                className={`pricing-tab-pane w-tab-pane ${activeTab === "yearly" ? "w--tab-active" : ""}`}
                style={{
                  display: activeTab === "yearly" ? "block" : "none",
                  opacity: activeTab === "yearly" ? 1 : 0,
                  transform: activeTab === "yearly" ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.35s ease, transform 0.35s ease",
                }}
              >
                <div className="w-layout-grid grid-pricing-item">
                  <div className="pricing-card bg-gray-4">
                    <div className="pricing-card-top">
                      <h3 className="pricing-card-title">Starter plan</h3>
                    </div>
                    <div className="pricing-card-bottom bg-white">
                      <div className="pricing-card-info">
                        <p className="pricing-pre-title">
                          Manage one social media platform
                        </p>
                        <div className="pricing-amount">
                          <h4 className="heading-h3 no-margin-bottom">
                            ₹7,999
                          </h4>
                          <div className="pricing-amount-item">
                            <div className="pricing-amount-text">/month</div>
                          </div>
                        </div>
                        <div className="pricing-list">
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              Manage 1 social media platform
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              15 AI viral reels/shorts per month
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              15 social creative posts per month
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              Viral research & trend-based creation
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              Monthly performance report
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              Engagement & reach-focused growth
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        button="hover"
                        data-wf--button-primary--variant="base"
                        href={getWhatsAppUrl("Hi, I want to get started with the Starter Plan (Yearly).")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-primary w-inline-block"
                      >
                        <div className="button-primary-title">
                          <div text-1="move">
                            Get started
                            <br />
                          </div>
                          <div text-2="move">
                            Get started
                            <br />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="pricing-card bg-white">
                    <div className="pricing-card-top _02">
                      <h3 className="pricing-card-title _02">Growth Plan</h3>
                      <div className="pricing-badge">
                        <img
                          src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ad9262f446e742ca2515f_blue%20shape%202.svg"
                          loading="lazy"
                          alt="Shape"
                          className="pricing-badge-shape"
                        />
                        <img
                          src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ad9261216d16bb1797849_blue%20shape.svg"
                          loading="lazy"
                          alt="Shape"
                          className="pricing-badge-shape right"
                        />
                        <div className="pricing-badge-title">Most popular</div>
                      </div>
                    </div>
                    <div className="pricing-card-bottom bg-primary-6">
                      <div className="pricing-card-info">
                        <p className="pricing-pre-title dark">
                          Manage across 3 platforms
                        </p>
                        <div className="pricing-amount">
                          <h4 className="heading-h3 no-margin-bottom">
                            ₹20,799
                          </h4>
                          <div className="pricing-amount-item">
                            <div className="pricing-amount-text dark">
                              /month
                            </div>
                          </div>
                        </div>
                        <div className="pricing-list">
                          <div
                            data-wf--list-item--variant="dark"
                            className="list-item w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                            />
                            <div className="list-title w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9">
                              Manage across 3 platforms
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="dark"
                            className="list-item w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                            />
                            <div className="list-title w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9">
                              30 AI viral reels/shorts per month
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="dark"
                            className="list-item w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                            />
                            <div className="list-title w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9">
                              30 social creative posts per month
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="dark"
                            className="list-item w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                            />
                            <div className="list-title w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9">
                              Daily posting & active engagement
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="dark"
                            className="list-item w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                            />
                            <div className="list-title w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9">
                              Influencer marketing & collaboration
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="dark"
                            className="list-item w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                            />
                            <div className="list-title w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9">
                              Weekly performance insights
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="dark"
                            className="list-item w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9"
                            />
                            <div className="list-title w-variant-76b59f53-6baa-3c6e-acce-7a221e1c3ea9">
                              Outreach & right audience growth
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        button="hover"
                        data-wf--button-primary--variant="base"
                        href={getWhatsAppUrl("Hi, I want to get started with the Growth Plan (Yearly).")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-primary w-inline-block"
                      >
                        <div className="button-primary-title">
                          <div text-1="move">Get growth plan</div>
                          <div text-2="move">Get growth plan</div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="pricing-card">
                    <div className="pricing-card-top">
                      <div className="pricing-overlay"></div>
                      <h3 className="pricing-card-title text-white">
                        Custom Plan
                      </h3>
                    </div>
                    <div className="pricing-card-bottom bg-white">
                      <div className="pricing-card-info">
                        <p className="pricing-pre-title">
                          Manage multiple platforms & accounts
                        </p>
                        <div className="pricing-amount">
                          <h4 className="heading-h3 no-margin-bottom">
                            Custom
                          </h4>
                          <div className="pricing-amount-item">
                            <div className="pricing-amount-text">pricing</div>
                          </div>
                        </div>
                        <div className="pricing-list">
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              Manage multiple platforms & accounts
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              Customise daily number of posts
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              UGC videos per month
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              Creator & influencer marketing / collaboration
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              Live dashboard + weekly analysis
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              Paid advertising campaigns
                            </div>
                          </div>
                          <div
                            data-wf--list-item--variant="lg"
                            className="list-item w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                          >
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                              alt="Correct Icon"
                              className="list-icon w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e"
                            />
                            <div className="list-title w-variant-535fe306-e75c-77a4-7fe6-fe57d45fd01e">
                              Dedicated account manager & priority support
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        button="hover"
                        data-wf--button-primary--variant="base"
                        href={getWhatsAppUrl("Hi, I want to enquire about the Custom / Scale Plan (Yearly).")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-primary w-inline-block"
                      >
                        <div className="button-primary-title">
                          <div text-1="move">Get custom plan</div>
                          <div text-2="move">Get custom plan</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div scroll-item="show" className="pricing-platform">
          <div className="text-gray-1 text-center">
            Trusted by 120+ creators and brands
          </div>
          <div className="pricing-platform-content">
            <div className="marquee-item pricing-marquee">
              <img
                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a083ca5683977296080eb4e_dermato.svg"
                loading="lazy"
                alt="Icon"
                className="brand-icon"
              />
              <div
                data-wf--marquee-badge--variant="no-border"
                className="marquee-badge w-variant-957b09ef-6fe1-9b95-1411-cee0b5d222f1"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a083dc1f7926b950017e5bb_avatar3.jpg"
                  alt="Avatar"
                  className="marquee-avatar"
                />
                <div className="marquee-info">
                  <div className="marquee-avatar-detail">
                    <div className="marquee-avatar-name">dani_</div>
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                      alt="Verified Icon"
                      className="marquee-icon"
                    />
                  </div>
                  <div className="marquee-counter-info">
                    <div className="marquee-counter-oval"></div>
                    <div className="text-small">50K</div>
                  </div>
                </div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a083ca5f9c18ffe72fd4447_habitline.svg"
                loading="lazy"
                alt="Icon"
                className="brand-icon"
              />
              <div
                data-wf--marquee-badge--variant="no-border"
                className="marquee-badge w-variant-957b09ef-6fe1-9b95-1411-cee0b5d222f1"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fcc3e1aad9593aaadc_8.avif"
                  alt="Avatar Image"
                  className="marquee-avatar"
                />
                <div className="marquee-info">
                  <div className="marquee-avatar-detail">
                    <div className="marquee-avatar-name">nikoflips</div>
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                      alt="Verified Icon"
                      className="marquee-icon"
                    />
                  </div>
                  <div className="marquee-counter-info">
                    <div className="marquee-counter-oval"></div>
                    <div className="text-small">2.5M</div>
                  </div>
                </div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a083ca5a34f39b92abb2001_helia.svg"
                loading="lazy"
                alt="Icon"
                className="brand-icon"
              />
            </div>
            <div className="marquee-item pricing-marquee">
              <img
                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a083ca5683977296080eb4e_dermato.svg"
                loading="lazy"
                alt="Icon"
                className="brand-icon"
              />
              <div
                data-wf--marquee-badge--variant="no-border"
                className="marquee-badge w-variant-957b09ef-6fe1-9b95-1411-cee0b5d222f1"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a083dc1f7926b950017e5bb_avatar3.jpg"
                  alt="Avatar"
                  className="marquee-avatar"
                />
                <div className="marquee-info">
                  <div className="marquee-avatar-detail">
                    <div className="marquee-avatar-name">dani_</div>
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                      alt="Verified Icon"
                      className="marquee-icon"
                    />
                  </div>
                  <div className="marquee-counter-info">
                    <div className="marquee-counter-oval"></div>
                    <div className="text-small">50K</div>
                  </div>
                </div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a083ca5f9c18ffe72fd4447_habitline.svg"
                loading="lazy"
                alt="Icon"
                className="brand-icon"
              />
              <div
                data-wf--marquee-badge--variant="no-border"
                className="marquee-badge w-variant-957b09ef-6fe1-9b95-1411-cee0b5d222f1"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fcc3e1aad9593aaadc_8.avif"
                  alt="Avatar Image"
                  className="marquee-avatar"
                />
                <div className="marquee-info">
                  <div className="marquee-avatar-detail">
                    <div className="marquee-avatar-name">nikoflips</div>
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                      alt="Verified Icon"
                      className="marquee-icon"
                    />
                  </div>
                  <div className="marquee-counter-info">
                    <div className="marquee-counter-oval"></div>
                    <div className="text-small">2.5M</div>
                  </div>
                </div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a083ca5a34f39b92abb2001_helia.svg"
                loading="lazy"
                alt="Icon"
                className="brand-icon"
              />
            </div>
            <div className="marquee-item pricing-marquee">
              <img
                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a083ca5683977296080eb4e_dermato.svg"
                loading="lazy"
                alt="Icon"
                className="brand-icon"
              />
              <div
                data-wf--marquee-badge--variant="no-border"
                className="marquee-badge w-variant-957b09ef-6fe1-9b95-1411-cee0b5d222f1"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a083dc1f7926b950017e5bb_avatar3.jpg"
                  alt="Avatar"
                  className="marquee-avatar"
                />
                <div className="marquee-info">
                  <div className="marquee-avatar-detail">
                    <div className="marquee-avatar-name">dani_</div>
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                      alt="Verified Icon"
                      className="marquee-icon"
                    />
                  </div>
                  <div className="marquee-counter-info">
                    <div className="marquee-counter-oval"></div>
                    <div className="text-small">50K</div>
                  </div>
                </div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a083ca5f9c18ffe72fd4447_habitline.svg"
                loading="lazy"
                alt="Icon"
                className="brand-icon"
              />
              <div
                data-wf--marquee-badge--variant="no-border"
                className="marquee-badge w-variant-957b09ef-6fe1-9b95-1411-cee0b5d222f1"
              >
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fcc3e1aad9593aaadc_8.avif"
                  alt="Avatar Image"
                  className="marquee-avatar"
                />
                <div className="marquee-info">
                  <div className="marquee-avatar-detail">
                    <div className="marquee-avatar-name">nikoflips</div>
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                      alt="Verified Icon"
                      className="marquee-icon"
                    />
                  </div>
                  <div className="marquee-counter-info">
                    <div className="marquee-counter-oval"></div>
                    <div className="text-small">2.5M</div>
                  </div>
                </div>
              </div>
              <img
                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a083ca5a34f39b92abb2001_helia.svg"
                loading="lazy"
                alt="Icon"
                className="brand-icon"
              />
            </div>
            <div className="fade"></div>
            <div className="fade right"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
