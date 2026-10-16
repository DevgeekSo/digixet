"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Dynamic Video Background Banner */}
      <div className="hero-video-banner-bg" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video-banner-element"
        >
          <source src="/video-bg.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-banner-overlay" />
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-caption">
            {/* Floating Social Badges */}
            <div className="floating-social-badge badge-instagram">
              <div className="floating-social-icon">
                <svg viewBox="0 0 24 24">
                  <defs>
                    <radialGradient id="ig-grad" cx="0.2" cy="1" r="1">
                      <stop offset="0%" stopColor="#ffd521" />
                      <stop offset="50%" stopColor="#f50000" />
                      <stop offset="100%" stopColor="#b900b4" />
                    </radialGradient>
                  </defs>
                  <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
                  <path
                    d="M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 7.4a2.9 2.9 0 110-5.8 2.9 2.9 0 010 5.8zm4.8-7.7a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <div className="floating-social-text">
                <span className="floating-social-name">Instagram</span>
                <span className="floating-social-stat">+340% Reach</span>
              </div>
            </div>

            <div className="floating-social-badge badge-linkedin">
              <div className="floating-social-icon">
                <svg viewBox="0 0 24 24">
                  <rect width="24" height="24" rx="6" fill="#0A66C2" />
                  <path
                    d="M7.5 9.5H5.2V17h2.3V9.5zM6.35 8.45c.8 0 1.45-.65 1.45-1.45s-.65-1.45-1.45-1.45S4.9 6.2 4.9 7s.65 1.45 1.45 1.45zm12.15 8.55h-2.3v-3.7c0-.95-.35-1.6-1.2-1.6-.65 0-1.05.45-1.2.9-.05.15-.05.4-.05.65V17h-2.3s.03-6.8 0-7.5h2.3v1.05c.3-.5.9-1.2 2.2-1.2 1.6 0 2.8 1.05 2.8 3.3v4.35z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
              <div className="floating-social-text">
                <span className="floating-social-name">LinkedIn</span>
                <span className="floating-social-stat">Viral Hooks</span>
              </div>
            </div>

            <div className="floating-social-badge badge-youtube">
              <div className="floating-social-icon">
                <svg viewBox="0 0 24 24">
                  <rect width="24" height="24" rx="6" fill="#ff0000" />
                  <path d="M10 8.5l5.5 3.5-5.5 3.5v-7z" fill="#ffffff" />
                </svg>
              </div>
              <div className="floating-social-text">
                <span className="floating-social-name">YouTube</span>
                <span className="floating-social-stat">Shorts Feed</span>
              </div>
            </div>

            <div className="floating-social-badge badge-snapchat">
              <div className="floating-social-icon">
                <svg viewBox="0 0 24 24">
                  <rect width="24" height="24" rx="6" fill="#fffc00" />
                  <path
                    d="M12 5.5c-2.3 0-3.6 1.8-3.6 3.6 0 .4.1 1.2.2 1.5-.6.2-1.3.5-1.5 1-.2.4 0 .9.3 1.1.4.2 1 .2 1.4.1-.1.4-.4 1.1-.9 1.4-.6.3-1.3.2-1.6.5-.3.3-.2.8.2 1 .6.3 1.5.2 2.3 0 .4-.1.8-.2 1.2.3.6.8 1.3 1 2 1s1.4-.2 2-1c.4-.5.8-.4 1.2-.3.8.2 1.7.3 2.3 0 .4-.2.5-.7.2-1-.3-.3-1-.2-1.6-.5-.5-.3-.8-1-.9-1.4.4.1 1 .1 1.4-.1.3-.2.5-.7.3-1.1-.2-.5-.9-.8-1.5-1 .1-.3.2-1.1.2-1.5 0-1.8-1.3-3.6-3.6-3.6z"
                    fill="#000000"
                  />
                </svg>
              </div>
              <div className="floating-social-text">
                <span className="floating-social-name">Snapchat</span>
                <span className="floating-social-stat">Direct Ads</span>
              </div>
            </div>

            <div data="show" className="align-center">
              <div data-wf--pre-title--variant="base" className="pre-title">
                UGC · Short form · Creator marketing
              </div>
            </div>
            <div data="show" className="hero-title-wrap">
              <h1 className="no-margin-bottom">
                Content That <br />
                St<span className="hero-icon"> </span>ps the{" "}
                <span className="hero-title-highlight">scroll.</span>
              </h1>
            </div>
            <p data="show" className="hero-description">
              We turn real people into your best sales team. Authentic UGC that
              stops the scroll, earns trust, and converts built on data, not gut
              feelings.
            </p>
            <div data="show">
              <a
                button="hover"
                data-wf--button-arrow--variant="base-button"
                href="/contact"
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
                    Start growing
                  </div>
                  <div text-2="move" className="button-hover-text">
                    Start growing
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div data="show" className="hero-reels-info">
            <div className="hero-reels-item _01">
              <div className="hero-reels-video-item">
                <div className="hero-reels-video w-background-video w-background-video-atom">
                  <video
                    id="c6b0e0e2-6d23-d085-b689-8be4e2db48d9-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    data-wf-ignore="true"
                    data-object-fit="cover"
                  >
                    <source
                      src="/sample/sample-1.mp4"
                      type="video/mp4"
                      data-wf-ignore="true"
                    />
                  </video>
                  <div aria-live="polite">
                    <button
                      type="button"
                      data-w-bg-video-control="true"
                      aria-controls="c6b0e0e2-6d23-d085-b689-8be4e2db48d9-video"
                      className="w-backgroundvideo-backgroundvideoplaypausebutton play-pause-button w-background-video--control"
                    >
                      <span className="play-state">
                        <img
                          src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a05b9c150c692f82209d74b_pause.svg"
                          loading="lazy"
                          alt="Pause video"
                          className="play-state-icon"
                        />
                      </span>
                      <span hidden className="paush-state">
                        <img
                          loading="lazy"
                          alt="Play video"
                          src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a05b9c20f31d4858c99aee2_play.svg"
                          className="paush-state-icon"
                        />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="hero-reels-overlay"></div>
              </div>
              <div className="hero-reels-badge">
                <div className="reels-badge-item">
                  <img
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a04108de09d4a92c3a1ced6_1.avif"
                    loading="lazy"
                    alt="Avatar Image"
                    className="reels-badge-avatar"
                  />
                  <div className="reels-avatar-info">
                    <div className="reels-avatar-name">mila.creates</div>
                    <img
                      src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                      loading="lazy"
                      alt="Verified Icon"
                      className="reels-badge-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-reels-item _02">
              <div className="hero-reels-video-item">
                <div className="hero-reels-video w-background-video w-background-video-atom">
                  <video
                    id="f95f3c11-eee2-ddda-a3fe-3203412418a6-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    data-wf-ignore="true"
                    data-object-fit="cover"
                  >
                    <source
                      src="/sample/sample-2.mp4"
                      type="video/mp4"
                      data-wf-ignore="true"
                    />
                  </video>
                  <div aria-live="polite">
                    <button
                      type="button"
                      data-w-bg-video-control="true"
                      aria-controls="f95f3c11-eee2-ddda-a3fe-3203412418a6-video"
                      className="w-backgroundvideo-backgroundvideoplaypausebutton play-pause-button w-background-video--control"
                    >
                      <span className="play-state">
                        <img
                          src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a05b9c150c692f82209d74b_pause.svg"
                          loading="lazy"
                          alt="Pause video"
                          className="play-state-icon"
                        />
                      </span>
                      <span hidden className="paush-state">
                        <img
                          loading="lazy"
                          alt="Play video"
                          src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a05b9c20f31d4858c99aee2_play.svg"
                          className="paush-state-icon"
                        />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="hero-reels-overlay"></div>
              </div>
              <div className="hero-reels-badge">
                <div className="reels-badge-item">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a07fcabeecfdc9128035299_avatar15.jpg"
                    alt="Avatar Image"
                    className="reels-badge-avatar"
                  />
                  <div className="reels-avatar-info">
                    <div className="reels-avatar-name">nikoflips</div>
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                      alt="Verified Icon"
                      className="reels-badge-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-creator-card">
              <div className="hero-creator-top">
                <div className="hero-creator-info">
                  <div className="hero-creator-list">
                    <div className="hero-creator-item left-0">
                      <img
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fb1155356dd26395f2_2.avif"
                        loading="lazy"
                        alt="Avatar Image"
                        className="hero-creator-avatar"
                      />
                    </div>
                    <div className="hero-creator-item">
                      <img
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fbe8e0c49f7a0ef006_3.avif"
                        loading="lazy"
                        alt="Avatar Image"
                        className="hero-creator-avatar"
                      />
                    </div>
                    <div className="hero-creator-item">
                      <img
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fb5829c7a24d41fcec_4.avif"
                        loading="lazy"
                        alt="Avatar Image"
                        className="hero-creator-avatar"
                      />
                    </div>
                    <div className="hero-creator-item">
                      <img
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fc46f7e5946b547208_5.avif"
                        loading="lazy"
                        alt="Avatar Image"
                        className="hero-creator-avatar"
                      />
                    </div>
                  </div>
                  <div className="hero-creator-text">Creators we work with</div>
                </div>
                <h2 className="hero-creator-counter">1250+</h2>
              </div>
              <div className="hero-creator-bottom">
                <div className="marquee-list">
                  <div className="marquee-item">
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fd0a1c361940feafba_9.avif"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">yara.ugc</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">2M</div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fd35679762122a7d19_10.avif"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">cade.reels</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">5M</div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0421b82ed588ed4242794f_avatar-09.jpg"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">taravibe_</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">42k</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="marquee-item">
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fd0a1c361940feafba_9.avif"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">yara.ugc</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">2M</div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fd35679762122a7d19_10.avif"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">cade.reels</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">5M</div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0421b82ed588ed4242794f_avatar-09.jpg"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">taravibe_</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">42k</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="marquee-item">
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fd0a1c361940feafba_9.avif"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">yara.ugc</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">2M</div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fd35679762122a7d19_10.avif"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">cade.reels</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">5M</div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0421b82ed588ed4242794f_avatar-09.jpg"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">taravibe_</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">42k</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="marquee-item">
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fd0a1c361940feafba_9.avif"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">yara.ugc</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">2M</div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fd35679762122a7d19_10.avif"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">cade.reels</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">5M</div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0421b82ed588ed4242794f_avatar-09.jpg"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">taravibe_</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">42k</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="marquee-list right">
                  <div className="right-marquee-item hero-right">
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
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
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fc345b0e0a98194250_6.avif"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">thorn_</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">5M</div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fce6e659e05f5a34a2_7.jpg"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">sola.ugc</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">1M</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right-marquee-item hero-right">
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
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
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fc345b0e0a98194250_6.avif"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">thorn_</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">5M</div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fce6e659e05f5a34a2_7.jpg"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">sola.ugc</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">1M</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right-marquee-item hero-right">
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
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
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fc345b0e0a98194250_6.avif"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">thorn_</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">5M</div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fce6e659e05f5a34a2_7.jpg"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">sola.ugc</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">1M</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right-marquee-item hero-right">
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
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
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fc345b0e0a98194250_6.avif"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">thorn_</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">5M</div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fce6e659e05f5a34a2_7.jpg"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">sola.ugc</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">1M</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="marquee-list">
                  <div className="marquee-item">
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0422af1c553c36199c0ed0_avatar-01.jpg"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">nova.con</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">40k</div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fb5829c7a24d41fcec_4.avif"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">zunoflips</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">2M</div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0422af73338ab3794fb0cc_avatar-05.jpg"
                        alt="Avatar Image"
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
                  </div>
                  <div className="marquee-item">
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0422af1c553c36199c0ed0_avatar-01.jpg"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">nova.con</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">40k</div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fb5829c7a24d41fcec_4.avif"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">zunoflips</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">2M</div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0422af73338ab3794fb0cc_avatar-05.jpg"
                        alt="Avatar Image"
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
                  </div>
                  <div className="marquee-item">
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0422af1c553c36199c0ed0_avatar-01.jpg"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">nova.con</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">40k</div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fb5829c7a24d41fcec_4.avif"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">zunoflips</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">2M</div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0422af73338ab3794fb0cc_avatar-05.jpg"
                        alt="Avatar Image"
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
                  </div>
                  <div className="marquee-item">
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0422af1c553c36199c0ed0_avatar-01.jpg"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">nova.con</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">40k</div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fb5829c7a24d41fcec_4.avif"
                        alt="Avatar Image"
                        className="marquee-avatar"
                      />
                      <div className="marquee-info">
                        <div className="marquee-avatar-detail">
                          <div className="marquee-avatar-name">zunoflips</div>
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                            alt="Verified Icon"
                            className="marquee-icon"
                          />
                        </div>
                        <div className="marquee-counter-info">
                          <div className="marquee-counter-oval"></div>
                          <div className="text-small">2M</div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-wf--marquee-badge--variant="base"
                      className="marquee-badge"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0422af73338ab3794fb0cc_avatar-05.jpg"
                        alt="Avatar Image"
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
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-reels-item _04">
              <div className="hero-reels-video-item">
                <div className="hero-reels-video w-background-video w-background-video-atom">
                  <video
                    id="322c93cc-365a-867b-fea9-ff221f8bc6b2-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    data-wf-ignore="true"
                    data-object-fit="cover"
                  >
                    <source
                      src="/sample/sample-3.mp4"
                      type="video/mp4"
                      data-wf-ignore="true"
                    />
                  </video>
                  <div aria-live="polite">
                    <button
                      type="button"
                      data-w-bg-video-control="true"
                      aria-controls="322c93cc-365a-867b-fea9-ff221f8bc6b2-video"
                      className="w-backgroundvideo-backgroundvideoplaypausebutton play-pause-button w-background-video--control"
                    >
                      <span className="play-state">
                        <img
                          src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a05b9c150c692f82209d74b_pause.svg"
                          loading="lazy"
                          alt="Pause video"
                          className="play-state-icon"
                        />
                      </span>
                      <span hidden className="paush-state">
                        <img
                          loading="lazy"
                          alt="Play video"
                          src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a05b9c20f31d4858c99aee2_play.svg"
                          className="paush-state-icon"
                        />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="hero-reels-overlay"></div>
              </div>
              <div className="hero-reels-badge">
                <div className="reels-badge-item">
                  <img
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0808d9e0eca343db2c8a8b_avatar18.jpg"
                    loading="lazy"
                    alt="Avatar"
                    className="reels-badge-avatar"
                  />
                  <div className="reels-avatar-info">
                    <div className="reels-avatar-name">theolund.co</div>
                    <img
                      src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                      loading="lazy"
                      alt="Verified Icon"
                      className="reels-badge-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data="show" className="hero-social-platform">
            <p className="no-margin-bottom">
              Your audience is everywhere. So are we.
            </p>
            <div className="social-platfom-list">
              <div className="marquee-item">
                <div className="social-media-item">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a03013d7f80dab249237e42_af382eb0e774cb0ce5ea28bbc5ddbbe1_Instagram.svg"
                    alt="Social Icon"
                    className="social-media-icon"
                  />
                  <div className="social-media-title">Instagram</div>
                </div>
                <div className="social-media-item">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a030154fc4d8745d50ca1fa_x.svg"
                    alt="Social Icon"
                    className="social-media-icon"
                  />
                  <div className="social-media-title">X</div>
                </div>
                <div className="social-media-item">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a030154510e699f43566fb3_youtube.svg"
                    alt="Social Icon"
                    className="social-media-icon"
                  />
                  <div className="social-media-title">Youtube</div>
                </div>
                <div className="social-media-item">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0427770b231aba75f2b05b_snapchat.svg"
                    alt="Social Icon"
                    className="social-media-icon"
                  />
                  <div className="social-media-title">Snapchat</div>
                </div>
                <div className="social-media-item">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0427e0071e30a7b353aaf9_tiktok.svg"
                    alt="Social Icon"
                    className="social-media-icon"
                  />
                  <div className="social-media-title">Tiktok</div>
                </div>
              </div>
              <div className="marquee-item">
                <div className="social-media-item">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a03013d7f80dab249237e42_af382eb0e774cb0ce5ea28bbc5ddbbe1_Instagram.svg"
                    alt="Social Icon"
                    className="social-media-icon"
                  />
                  <div className="social-media-title">Instagram</div>
                </div>
                <div className="social-media-item">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a030154fc4d8745d50ca1fa_x.svg"
                    alt="Social Icon"
                    className="social-media-icon"
                  />
                  <div className="social-media-title">X</div>
                </div>
                <div className="social-media-item">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a030154510e699f43566fb3_youtube.svg"
                    alt="Social Icon"
                    className="social-media-icon"
                  />
                  <div className="social-media-title">Youtube</div>
                </div>
                <div className="social-media-item">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0427770b231aba75f2b05b_snapchat.svg"
                    alt="Social Icon"
                    className="social-media-icon"
                  />
                  <div className="social-media-title">Snapchat</div>
                </div>
                <div className="social-media-item">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0427e0071e30a7b353aaf9_tiktok.svg"
                    alt="Social Icon"
                    className="social-media-icon"
                  />
                  <div className="social-media-title">Tiktok</div>
                </div>
              </div>
              <div className="marquee-item">
                <div className="social-media-item">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a03013d7f80dab249237e42_af382eb0e774cb0ce5ea28bbc5ddbbe1_Instagram.svg"
                    alt="Social Icon"
                    className="social-media-icon"
                  />
                  <div className="social-media-title">Instagram</div>
                </div>
                <div className="social-media-item">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a030154fc4d8745d50ca1fa_x.svg"
                    alt="Social Icon"
                    className="social-media-icon"
                  />
                  <div className="social-media-title">X</div>
                </div>
                <div className="social-media-item">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a030154510e699f43566fb3_youtube.svg"
                    alt="Social Icon"
                    className="social-media-icon"
                  />
                  <div className="social-media-title">Youtube</div>
                </div>
                <div className="social-media-item">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0427770b231aba75f2b05b_snapchat.svg"
                    alt="Social Icon"
                    className="social-media-icon"
                  />
                  <div className="social-media-title">Snapchat</div>
                </div>
                <div className="social-media-item">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0427e0071e30a7b353aaf9_tiktok.svg"
                    alt="Social Icon"
                    className="social-media-icon"
                  />
                  <div className="social-media-title">Tiktok</div>
                </div>
              </div>
              <div className="fade"></div>
              <div className="fade right"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
