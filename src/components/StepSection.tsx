"use client";

import React from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function StepSection() {
  return (
    <section data-scroll="load" className="step-section">
      <div className="container">
        <div className="step-top">
          <div scroll-item="show" className="step-info">
            <div className="align-center">
              <div data-wf--pre-title--variant="base" className="pre-title">
                How it works
              </div>
            </div>
            <div className="step-title-wrap">
              <h2 className="step-title">Four</h2>
              <h2 className="step-title">steps</h2>
              <h2 className="step-title">from</h2>
              <h2 className="step-title">brief</h2>
              <h2 className="step-title">to</h2>
              <h2 className="step-title">content</h2>
              <h2 className="step-title">that</h2>
              <h2 className="step-title-highlight">converts.</h2>
            </div>
          </div>
          <div className="step-blur"></div>
        </div>
        <div className="w-layout-grid grid-step-bottom section-spacing-bottom">
          <div className="step-card-item">
            <div className="step-card">
              <div className="step-card-top bg-primary-3">
                <div className="step-card-text">S/1</div>
                <img
                  src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06b9a351f349ada9b67c04_14a787051b6c13407f674de8a2a34a7e_yellow%20shape.svg"
                  loading="lazy"
                  alt="Shape"
                  className="step-shape"
                />
                <img
                  src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06b9a3e70cc7ec366b6f6a_d07bc05831627db780b5add5514eb944_yellow%20shape%20Right.svg"
                  loading="lazy"
                  alt="Shape"
                  className="step-shape right"
                />
              </div>
              <div className="step-card-bottom bg-primary-3">
                <div className="step-list">
                  <div className="step-list-item">
                    <div className="step-list-round">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06bc16a7b5b3d825604650_step-icon01.svg"
                        alt="Icon"
                        className="step-list-icon"
                      />
                    </div>
                    <div className="step-list-info">
                      <div className="text-gray-1">Market analysis</div>
                      <div className="text-small">3 brands reviewed</div>
                    </div>
                  </div>
                  <div className="step-list-item">
                    <div className="step-list-round">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06bc160cc5fb4f3ade60bf_step-icon02.svg"
                        alt="Icon"
                        className="step-list-icon"
                      />
                    </div>
                    <div className="step-list-info">
                      <div className="text-gray-1">Content strategy</div>
                      <div className="text-small">Building now...</div>
                    </div>
                  </div>
                  <div className="step-list-item">
                    <div className="step-list-round">
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06bc168eedf4541125fbde_step-icon03.svg"
                        alt="Icon"
                        className="step-list-icon"
                      />
                    </div>
                    <div className="step-list-info">
                      <div className="text-gray-1">Creator brief</div>
                      <div className="text-small">Up next</div>
                    </div>
                  </div>
                </div>
                <div className="step-card-info">
                  <h3 className="step-card-title">Discovery &amp; strategy</h3>
                  <p className="step-card-description">
                    Fill a form. We research and build a strategy. No calls
                    needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="step-card-item">
            <div className="empty-space"></div>
            <div className="step-card">
              <div className="step-card-top bg-primary-6">
                <div className="step-card-text">S/2</div>
                <img
                  src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ad9262f446e742ca2515f_blue%20shape%202.svg"
                  loading="lazy"
                  alt="Shape"
                  className="step-shape"
                />
                <img
                  src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ad9261216d16bb1797849_blue%20shape.svg"
                  loading="lazy"
                  alt="Shape"
                  className="step-shape right"
                />
              </div>
              <div className="step-card-bottom bg-primary-6">
                <div className="step-list-decoration">
                  <img
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06c48445242444c6498ca0_step-02.png"
                    loading="lazy"
                    sizes="100vw"
                    srcset="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06c48445242444c6498ca0_step-02-p-500.png 500w, https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06c48445242444c6498ca0_step-02.png 537w"
                    alt="Step Image"
                    className="step-list-image"
                  />
                </div>
                <div className="step-card-info">
                  <h3 className="step-card-title">Creator matching</h3>
                  <p className="step-card-description">
                    We match creators by performance, not follower count.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="step-card-item">
            <div className="empty-space"></div>
            <div className="empty-space"></div>
            <div className="step-card">
              <div className="step-card-top bg-primary-4">
                <div className="step-card-text">S/3</div>
                <img
                  src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06c368d1d25cd852accb60_86be0a7876f2edeca736dab51ea1c4b3_green%20shape.svg"
                  loading="lazy"
                  alt="Shape"
                  className="step-shape"
                />
                <img
                  src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06c368648132276cbe5da9_84f607c17efc488c5473e07ab93881b9_green%20shape%202.svg"
                  loading="lazy"
                  alt="Shape"
                  className="step-shape right"
                />
              </div>
              <div className="step-card-bottom bg-primary-4">
                <div className="step-card-video-item">
                  <div className="step-card-image-item">
                    <div className="step-image-wrap">
                      <img
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a112f2e5b4e7aeea2c6a68f_5.avif"
                        loading="lazy"
                        alt="Image"
                        className="step-image"
                      />
                    </div>
                    <div className="list-item badge">Ok to live</div>
                  </div>
                </div>
                <div className="step-card-info">
                  <div className="step-badge-list">
                    <div
                      data-wf--list-item--variant="sm"
                      className="list-item w-variant-9e3d0d70-b2f0-0993-5cd8-8b95364e0c67"
                    >
                      <div className="list-title">Day 7 goes live</div>
                    </div>
                    <div
                      data-wf--list-item--variant="sm"
                      className="list-item w-variant-9e3d0d70-b2f0-0993-5cd8-8b95364e0c67"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                        alt="Correct Icon"
                        className="list-icon w-variant-9e3d0d70-b2f0-0993-5cd8-8b95364e0c67"
                      />
                      <div className="list-title">You approve</div>
                    </div>
                  </div>
                  <h3 className="step-card-title">Content production</h3>
                  <p className="step-card-description">
                    Creators shoot, we review, you approve. First content live
                    in 7 days.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="step-card-item">
            <div className="empty-space lg"></div>
            <div className="empty-space"></div>
            <div className="step-card">
              <div className="step-card-top bg-primary-1">
                <div className="step-card-text">S/4</div>
                <img
                  src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06c392dba1027861b3efb8_4cc924152a946c0941eac9d8aca051c1_orange%20shape%202.svg"
                  loading="lazy"
                  alt="Shape"
                  className="step-shape"
                />
                <img
                  src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06c3927c37aa57523c8a19_7d625077d03040e9a86e9d79981c7f20_orange%20shape.svg"
                  loading="lazy"
                  alt="Shape"
                  className="step-shape right"
                />
              </div>
              <div className="step-bottom-info">
                <div className="step-card-bottom bg-primary-1">
                  <div className="step-list-decoration">
                    <img
                      src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06e1d7a35b847dd528797a_1.avif"
                      loading="lazy"
                      alt="Graph Decoration"
                      className="step-list-image sm"
                    />
                  </div>
                  <div className="step-card-info">
                    <h3 className="step-card-title">Test, Learn, Scale</h3>
                    <p className="step-card-description">
                      We match creators by performance, not follower count.
                    </p>
                  </div>
                </div>
                <div className="step-card-cta">
                  <div className="step-cta">
                    <a
                      button="hover"
                      data-wf--button-right--variant="base"
                      href={getWhatsAppUrl("Hi, I want to book a free call to discuss creator matching.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-right w-inline-block"
                    >
                      <div className="button-title-wrap">
                        <div className="button-title-rolling">
                          <div text-1="move" className="button-right-title">
                            Book a free call
                          </div>
                          <div text-2="move" className="button-right-title">
                            Book a free call
                          </div>
                        </div>
                      </div>
                      <div className="button-right-round">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06e5038e90b1383687f701_button-arrow-white.svg"
                          alt="Arrow "
                          className="button-right-icon"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="step-cta-bg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
