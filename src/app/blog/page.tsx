"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

export default function BlogPage() {
  return (
    <main className="main">
      <Navbar />
      <section className="hero-simple-section">
        <div className="container-medium">
          <div className="hero-simple-content">
            <h1 data="show" className="hero-simple-title">
              Our blog
            </h1>
            <p data="show" className="hero-simplen-description">
              Practical insights, current trends to help you grow a social media
              presence that delivers real results. Designed to improve
              consistency.
            </p>
          </div>
        </div>
      </section>
      <section data-scroll="load" className="section-spacing-bottom">
        <div className="container-medium">
          <div className="blog-list-content">
            <div className="w-layout-grid grid-blog-detail">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <a
                      aria-label="link"
                      data="show"
                      cms-item="hover"
                      href="/blog/how-brands-approach-influencers-today"
                      className="blog-card w-inline-block"
                    >
                      <div className="blog-image-item">
                        <img
                          src="https://cdn.prod.website-files.com/6a018c163190c0cf03857406/6a085cf7512ebf43fc05ec86_aJo8y8v0xKGQvewM2oDls5Kk4g.jpeg"
                          loading="lazy"
                          image="hover"
                          alt="Blog Image"
                          className="blog-image"
                        />
                        <div className="blog-badge-item">
                          <div className="feature-blog-badge">Featured</div>
                          <div className="blog-badge feature">
                            Digital marketing
                          </div>
                        </div>
                      </div>
                      <div className="blog-card-info">
                        <div className="blog-meta">
                          <div>May 19, 2026</div>
                          <div className="blog-meta-dot"></div>
                          <div>5 min read</div>
                        </div>
                        <h2 className="blog-card-title">
                          How brands approach influencers today
                        </h2>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <a
                      aria-label="link"
                      data="show"
                      cms-item="hover"
                      href="/blog/5-ugc-mistakes-that-are-killing-conversion"
                      className="blog-card w-inline-block"
                    >
                      <div className="blog-image-item">
                        <img
                          src="https://cdn.prod.website-files.com/6a018c163190c0cf03857406/6a085cf924c719ae919f069f_0p7BKxYP49RNqGLUrLYpaLyFgU.jpeg"
                          loading="lazy"
                          image="hover"
                          alt="Blog Image"
                          className="blog-image"
                        />
                        <div className="blog-badge">UGC Strategy</div>
                      </div>
                      <div className="blog-card-info">
                        <div className="blog-meta">
                          <div>May 19, 2026</div>
                          <div className="blog-meta-dot"></div>
                          <div>3 min read</div>
                        </div>
                        <h2 className="blog-card-title">
                          5 UGC mistakes that are killing conversion
                        </h2>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-dyn-list">
              <div role="list" className="grid-blog-list w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <a
                    aria-label="link"
                    scroll-item="show"
                    cms-item="hover"
                    href="/blog/whats-working-in-creator-marketing-in-2026"
                    className="blog-card w-inline-block"
                  >
                    <div className="blog-image-item">
                      <img
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857406/6a085cf8a1ef0a22f41c9396_XjakUr6MUs6Zq6wEPWYpduXIvZM.jpeg"
                        loading="lazy"
                        image="hover"
                        alt="Blog Image"
                        className="blog-image"
                      />
                      <div className="blog-badge">Creator trends</div>
                    </div>
                    <div className="blog-card-info">
                      <div className="blog-meta">
                        <div>May 19, 2026</div>
                        <div className="blog-meta-dot"></div>
                        <div>4 min read</div>
                      </div>
                      <h2 className="blog-card-title">
                        What’s working in creator marketing in 2026
                      </h2>
                    </div>
                  </a>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <a
                    aria-label="link"
                    scroll-item="show"
                    cms-item="hover"
                    href="/blog/why-content-systems-are-replacing-campaigns"
                    className="blog-card w-inline-block"
                  >
                    <div className="blog-image-item">
                      <img
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857406/6a085cf55703a07856d70adc_KYpDqXy8IvtOpaabK7cdIdhLw.jpeg"
                        loading="lazy"
                        image="hover"
                        alt="Blog Image"
                        className="blog-image"
                      />
                      <div className="blog-badge">Marketing trends</div>
                    </div>
                    <div className="blog-card-info">
                      <div className="blog-meta">
                        <div>May 19, 2026</div>
                        <div className="blog-meta-dot"></div>
                        <div>3 min read</div>
                      </div>
                      <h2 className="blog-card-title">
                        Why content systems are replacing campaigns
                      </h2>
                    </div>
                  </a>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <a
                    aria-label="link"
                    scroll-item="show"
                    cms-item="hover"
                    href="/blog/how-brands-are-winning-with-short-form-content"
                    className="blog-card w-inline-block"
                  >
                    <div className="blog-image-item">
                      <img
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857406/6a085cf42debafabe282e491_4Z58k56ipHjZ4MDBurdJTXutk.jpeg"
                        loading="lazy"
                        image="hover"
                        alt="Blog Image"
                        className="blog-image"
                      />
                      <div className="blog-badge">Reels strategy</div>
                    </div>
                    <div className="blog-card-info">
                      <div className="blog-meta">
                        <div>May 19, 2026</div>
                        <div className="blog-meta-dot"></div>
                        <div>4 min read</div>
                      </div>
                      <h2 className="blog-card-title">
                        How brands are winning with short-form content
                      </h2>
                    </div>
                  </a>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <a
                    aria-label="link"
                    scroll-item="show"
                    cms-item="hover"
                    href="/blog/stay-consistent-on-social-media-without-stress"
                    className="blog-card w-inline-block"
                  >
                    <div className="blog-image-item">
                      <img
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857406/6a085cf3695b0afdba21687b_NI7gsm85nMem2Pj3bpXqWFyefHQ.jpeg"
                        loading="lazy"
                        image="hover"
                        alt="Blog Image"
                        className="blog-image"
                      />
                      <div className="blog-badge">Productivity</div>
                    </div>
                    <div className="blog-card-info">
                      <div className="blog-meta">
                        <div>May 19, 2026</div>
                        <div className="blog-meta-dot"></div>
                        <div>5 min read</div>
                      </div>
                      <h2 className="blog-card-title">
                        Stay consistent on social media without stress
                      </h2>
                    </div>
                  </a>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <a
                    aria-label="link"
                    scroll-item="show"
                    cms-item="hover"
                    href="/blog/brand-consistency-drives-long-term-success"
                    className="blog-card w-inline-block"
                  >
                    <div className="blog-image-item">
                      <img
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857406/6a085cf2695b0afdba21683e_gNSciYUgCUQAGfYpFYp2xvspgvM.jpeg"
                        loading="lazy"
                        image="hover"
                        alt="Blog Image"
                        className="blog-image"
                      />
                      <div className="blog-badge">Brand strategy</div>
                    </div>
                    <div className="blog-card-info">
                      <div className="blog-meta">
                        <div>May 19, 2026</div>
                        <div className="blog-meta-dot"></div>
                        <div>3 min read</div>
                      </div>
                      <h2 className="blog-card-title">
                        Brand consistency drives long term success
                      </h2>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
