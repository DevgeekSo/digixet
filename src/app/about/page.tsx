"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import PortfolioVideoSection from "@/components/PortfolioVideoSection";


export default function AboutPage() {
  return (
    <main className="main">
      <Navbar />
      <section className="hero-section">
        <div className="container-medium">
          <div className="w-layout-grid grid-hero">
            <div className="hero-about-left">
              <div className="hero-about-content">
                <div data="show" className="left-item">
                  <div data-wf--pre-title--variant="base" className="pre-title">
                    About us
                  </div>
                </div>
                <div data="show" className="hero-about-title">
                  <h1 className="no-margin-bottom">Content</h1>
                  <h2 className="heading-h1 no-margin-bottom">built</h2>
                  <h2 className="heading-h1 no-margin-bottom">to</h2>
                  <h2 className="hero-highlite-title">convert.</h2>
                </div>
                <p data="show" className="hero-about-description">
                  Digixet was built to give brands the kind of content that
                  actually converts. Every creator we deliver has a job to do.
                </p>
              </div>
              <div data="show">
                <a
                  button="hover"
                  data-wf--button-arrow--variant="base-button"
                  href="/case-studies"
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
                      Explore our work
                    </div>
                    <div text-2="move" className="button-hover-text">
                      Explore our work
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div data="show" className="hero-about-right">
              <div
                data-delay="4000"
                data-animation="cross"
                className="hero-about-slider w-slider"
                data-autoplay="false"
                data-easing="ease"
                data-hide-arrows="false"
                data-disable-swipe="false"
                data-autoplay-limit="0"
                data-nav-spacing="3"
                data-duration="500"
                data-infinite="true"
              >
                <div className="w-slider-mask">
                  <div className="about-slide w-slide">
                    <div className="about-list">
                      <div className="about-card _01">
                        <div className="about-client-info">
                          <div className="reels-badge-item">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0aae9bb5f92627c306e910_avatar24.jpg.png.jpg"
                              alt="Avatar Image"
                              className="reels-badge-avatar"
                            />
                            <div className="reels-avatar-info">
                              <div className="reels-avatar-name">
                                @axelrowe.co
                              </div>
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                                alt="Verified Icon"
                                className="reels-badge-icon"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="about-video-item">
                          <div
                            data-video-urls="/sample/sample-1.mp4"
                            data-autoplay="true"
                            data-loop="true"
                            data-wf-ignore="true"
                            className="about-video w-background-video w-background-video-atom"
                          >
                            <video
                              id="272a3a0e-3d8e-aeb9-aab1-b9bf63ccaadb-video"
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
                                aria-controls="272a3a0e-3d8e-aeb9-aab1-b9bf63ccaadb-video"
                                className="w-backgroundvideo-backgroundvideoplaypausebutton play-pause-button dark w-background-video--control"
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
                          <div className="about-video-overlay"></div>
                        </div>
                      </div>
                      <div className="about-card _02">
                        <div className="about-client-info">
                          <div className="reels-badge-item">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a04108de09d4a92c3a1ced6_1.avif"
                              alt="Avatar Image"
                              className="reels-badge-avatar"
                            />
                            <div className="reels-avatar-info">
                              <div className="reels-avatar-name">
                                @finnorion_
                              </div>
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                                alt="Verified Icon"
                                className="reels-badge-icon"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="about-video-item">
                          <div
                            data-video-urls="/sample/sample-2.mp4"
                            data-autoplay="true"
                            data-loop="true"
                            data-wf-ignore="true"
                            className="about-video w-background-video w-background-video-atom"
                          >
                            <video
                              id="e538e6a0-8ef4-17ca-24fa-0a7a1d3b2016-video"
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
                                aria-controls="e538e6a0-8ef4-17ca-24fa-0a7a1d3b2016-video"
                                className="w-backgroundvideo-backgroundvideoplaypausebutton play-pause-button dark w-background-video--control"
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
                          <div className="about-video-overlay"></div>
                        </div>
                      </div>
                      <div className="about-card _03">
                        <div className="about-client-info">
                          <div className="reels-badge-item">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0aae9bb5f92627c306e910_avatar24.jpg.png.jpg"
                              alt="Avatar Image"
                              className="reels-badge-avatar"
                            />
                            <div className="reels-avatar-info">
                              <div className="reels-avatar-name">
                                @axelrowe.co
                              </div>
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                                alt="Verified Icon"
                                className="reels-badge-icon"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="about-video-item">
                          <div
                            data-video-urls="/sample/sample-3.mp4"
                            data-autoplay="true"
                            data-loop="true"
                            data-wf-ignore="true"
                            className="about-video w-background-video w-background-video-atom"
                          >
                            <video
                              id="e54ee9bf-34f6-5706-9c3b-8485dc461e9b-video"
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
                                aria-controls="e54ee9bf-34f6-5706-9c3b-8485dc461e9b-video"
                                className="w-backgroundvideo-backgroundvideoplaypausebutton play-pause-button dark w-background-video--control"
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
                          <div className="about-video-overlay"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="about-slide w-slide">
                    <div className="about-list">
                      <div className="about-card _01">
                        <div className="about-client-info">
                          <div className="reels-badge-item">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0aae9bb5f92627c306e910_avatar24.jpg.png.jpg"
                              alt="Avatar Image"
                              className="reels-badge-avatar"
                            />
                            <div className="reels-avatar-info">
                              <div className="reels-avatar-name">
                                @axelrowe.co
                              </div>
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                                alt="Verified Icon"
                                className="reels-badge-icon"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="about-video-item">
                          <div
                            data-video-urls="/sample/sample-4.mp4"
                            data-autoplay="true"
                            data-loop="true"
                            data-wf-ignore="true"
                            className="about-video w-background-video w-background-video-atom"
                          >
                            <video
                              id="b2c3ccd0-629e-47b5-dc69-7963c5d545b7-video"
                              autoPlay
                              loop
                              muted
                              playsInline
                              data-wf-ignore="true"
                              data-object-fit="cover"
                            >
                              <source
                                src="/sample/sample-4.mp4"
                                type="video/mp4"
                                data-wf-ignore="true"
                              />
                            </video>
                            <div aria-live="polite">
                              <button
                                type="button"
                                data-w-bg-video-control="true"
                                aria-controls="b2c3ccd0-629e-47b5-dc69-7963c5d545b7-video"
                                className="w-backgroundvideo-backgroundvideoplaypausebutton play-pause-button dark w-background-video--control"
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
                          <div className="about-video-overlay"></div>
                        </div>
                      </div>
                      <div className="about-card _02">
                        <div className="about-client-info">
                          <div className="reels-badge-item">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a04108de09d4a92c3a1ced6_1.avif"
                              alt="Avatar Image"
                              className="reels-badge-avatar"
                            />
                            <div className="reels-avatar-info">
                              <div className="reels-avatar-name">
                                @finnorion_
                              </div>
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                                alt="Verified Icon"
                                className="reels-badge-icon"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="about-video-item">
                          <div
                            data-video-urls="/sample/sample-5.mp4"
                            data-autoplay="true"
                            data-loop="true"
                            data-wf-ignore="true"
                            className="about-video w-background-video w-background-video-atom"
                          >
                            <video
                              id="b2c3ccd0-629e-47b5-dc69-7963c5d545c3-video"
                              autoPlay
                              loop
                              muted
                              playsInline
                              data-wf-ignore="true"
                              data-object-fit="cover"
                            >
                              <source
                                src="/sample/sample-5.mp4"
                                type="video/mp4"
                                data-wf-ignore="true"
                              />
                            </video>
                            <div aria-live="polite">
                              <button
                                type="button"
                                data-w-bg-video-control="true"
                                aria-controls="b2c3ccd0-629e-47b5-dc69-7963c5d545c3-video"
                                className="w-backgroundvideo-backgroundvideoplaypausebutton play-pause-button dark w-background-video--control"
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
                          <div className="about-video-overlay"></div>
                        </div>
                      </div>
                      <div className="about-card _03">
                        <div className="about-client-info">
                          <div className="reels-badge-item">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0aae9bb5f92627c306e910_avatar24.jpg.png.jpg"
                              alt="Avatar Image"
                              className="reels-badge-avatar"
                            />
                            <div className="reels-avatar-info">
                              <div className="reels-avatar-name">
                                @axelrowe.co
                              </div>
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                                alt="Verified Icon"
                                className="reels-badge-icon"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="about-video-item">
                          <div
                            data-video-urls="/sample/sample-6.mp4"
                            data-autoplay="true"
                            data-loop="true"
                            data-wf-ignore="true"
                            className="about-video w-background-video w-background-video-atom"
                          >
                            <video
                              id="b2c3ccd0-629e-47b5-dc69-7963c5d545cf-video"
                              autoPlay
                              loop
                              muted
                              playsInline
                              data-wf-ignore="true"
                              data-object-fit="cover"
                            >
                              <source
                                src="/sample/sample-6.mp4"
                                type="video/mp4"
                                data-wf-ignore="true"
                              />
                            </video>
                            <div aria-live="polite">
                              <button
                                type="button"
                                data-w-bg-video-control="true"
                                aria-controls="b2c3ccd0-629e-47b5-dc69-7963c5d545cf-video"
                                className="w-backgroundvideo-backgroundvideoplaypausebutton play-pause-button dark w-background-video--control"
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
                          <div className="about-video-overlay"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="about-slide w-slide">
                    <div className="about-list">
                      <div className="about-card _01">
                        <div className="about-client-info">
                          <div className="reels-badge-item">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0aae9bb5f92627c306e910_avatar24.jpg.png.jpg"
                              alt="Avatar Image"
                              className="reels-badge-avatar"
                            />
                            <div className="reels-avatar-info">
                              <div className="reels-avatar-name">
                                @axelrowe.co
                              </div>
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                                alt="Verified Icon"
                                className="reels-badge-icon"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="about-video-item">
                          <div
                            data-video-urls="/sample/sample-7.mp4"
                            data-autoplay="true"
                            data-loop="true"
                            data-wf-ignore="true"
                            className="about-video w-background-video w-background-video-atom"
                          >
                            <video
                              id="1b9e0922-01f9-6e44-7084-5787f8f18557-video"
                              autoPlay
                              loop
                              muted
                              playsInline
                              data-wf-ignore="true"
                              data-object-fit="cover"
                            >
                              <source
                                src="/sample/sample-7.mp4"
                                type="video/mp4"
                                data-wf-ignore="true"
                              />
                            </video>
                            <div aria-live="polite">
                              <button
                                type="button"
                                data-w-bg-video-control="true"
                                aria-controls="1b9e0922-01f9-6e44-7084-5787f8f18557-video"
                                className="w-backgroundvideo-backgroundvideoplaypausebutton play-pause-button dark w-background-video--control"
                              >
                                <span className="paush-state">
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
                          <div className="about-video-overlay"></div>
                        </div>
                      </div>
                      <div className="about-card _02">
                        <div className="about-client-info">
                          <div className="reels-badge-item">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a04108de09d4a92c3a1ced6_1.avif"
                              alt="Avatar Image"
                              className="reels-badge-avatar"
                            />
                            <div className="reels-avatar-info">
                              <div className="reels-avatar-name">
                                @finnorion_
                              </div>
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                                alt="Verified Icon"
                                className="reels-badge-icon"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="about-video-item">
                          <div
                            data-video-urls="/sample/sample-8.mp4"
                            data-autoplay="true"
                            data-loop="true"
                            data-wf-ignore="true"
                            className="about-video w-background-video w-background-video-atom"
                          >
                            <video
                              id="1b9e0922-01f9-6e44-7084-5787f8f18563-video"
                              autoPlay
                              loop
                              muted
                              playsInline
                              data-wf-ignore="true"
                              data-object-fit="cover"
                            >
                              <source
                                src="/sample/sample-8.mp4"
                                type="video/mp4"
                                data-wf-ignore="true"
                              />
                            </video>
                            <div aria-live="polite">
                              <button
                                type="button"
                                data-w-bg-video-control="true"
                                aria-controls="1b9e0922-01f9-6e44-7084-5787f8f18563-video"
                                className="w-backgroundvideo-backgroundvideoplaypausebutton play-pause-button dark w-background-video--control"
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
                          <div className="about-video-overlay"></div>
                        </div>
                      </div>
                      <div className="about-card _03">
                        <div className="about-client-info">
                          <div className="reels-badge-item">
                            <img
                              loading="lazy"
                              src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0aae9bb5f92627c306e910_avatar24.jpg.png.jpg"
                              alt="Avatar Image"
                              className="reels-badge-avatar"
                            />
                            <div className="reels-avatar-info">
                              <div className="reels-avatar-name">
                                @axelrowe.co
                              </div>
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                                alt="Verified Icon"
                                className="reels-badge-icon"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="about-video-item">
                          <div
                            data-video-urls="/sample/sample-9.mp4"
                            data-autoplay="true"
                            data-loop="true"
                            data-wf-ignore="true"
                            className="about-video w-background-video w-background-video-atom"
                          >
                            <video
                              id="1b9e0922-01f9-6e44-7084-5787f8f1856f-video"
                              autoPlay
                              loop
                              muted
                              playsInline
                              data-wf-ignore="true"
                              data-object-fit="cover"
                            >
                              <source
                                src="/sample/sample-9.mp4"
                                type="video/mp4"
                                data-wf-ignore="true"
                              />
                            </video>
                            <div aria-live="polite">
                              <button
                                type="button"
                                data-w-bg-video-control="true"
                                aria-controls="1b9e0922-01f9-6e44-7084-5787f8f1856f-video"
                                className="w-backgroundvideo-backgroundvideoplaypausebutton play-pause-button dark w-background-video--control"
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
                          <div className="about-video-overlay"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hide w-slider-arrow-left">
                  <div className="w-icon-slider-left"></div>
                </div>
                <div className="hide w-slider-arrow-right">
                  <div className="w-icon-slider-right"></div>
                </div>
                <div className="w-slider-nav w-slider-nav-invert w-shadow w-round"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-scroll="load" className="section-spacing-top">
        <div className="container-medium">
          <div className="statics-content">
            <div className="w-layout-grid grid-statics-content">
              <div scroll-item="show" className="statics-item">
                <p className="no-margin-bottom">
                  Brands served every niche. Every platform.
                </p>
                <h2 className="statics-title">
                  120<span className="text-primary-6">+</span>
                </h2>
              </div>
              <div scroll-item="show" className="statics-item">
                <p className="no-margin-bottom">
                  Average ROAS lift nearly 5x return on ad spend.
                </p>
                <h2 className="statics-title">
                  4.8<span className="text-primary-3">x</span>
                </h2>
              </div>
              <div scroll-item="show" className="statics-item bg-gray-1">
                <p className="no-margin-bottom text-gray-4">
                  Videos delivered, briefed, reviewed, and approved.
                </p>
                <h2 className="statics-title text-white">
                  1,200<span className="text-primary-4">+</span>
                </h2>
              </div>
              <div scroll-item="show" className="statics-item">
                <p className="no-margin-bottom">
                  Total view generate through organic growth.
                </p>
                <h2 className="statics-title">
                  80<span className="text-primary-5">M+</span>
                </h2>
              </div>
            </div>
            <div scroll-item="show" className="statics-image-item">
              <img
                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ab5f3e613777cd294ef81_counter-img.webp"
                loading="lazy"
                sizes="(max-width: 1300px) 100vw, 1300px"
                srcset="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ab5f3e613777cd294ef81_counter-img-p-500.webp 500w, https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ab5f3e613777cd294ef81_counter-img-p-800.webp 800w, https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ab5f3e613777cd294ef81_counter-img-p-1080.webp 1080w, https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ab5f3e613777cd294ef81_counter-img.webp 1300w"
                alt="Image"
                className="statics-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section data-scroll="load" className="section-spacing-top">
        <div className="container-medium story-info">
          <div className="story-content">
            <div scroll-item="show" className="story-section-title">
              <div data-wf--pre-title--variant="base" className="pre-title">
                Our story
              </div>
              <h2 className="text-center no-margin-bottom">
                Started by creators. Built for brands.
              </h2>
            </div>
            <div className="story-info">
              <p scroll-item="show" className="story-description">
                We started Reels after watching brand after brand waste money on
                content that looked great in a deck and flopped in the feed.
                Polished videos. Zero results. The problem was never the budget
                it was the strategy.
              </p>
              <p scroll-item="show" className="story-description">
                So we built a system that puts performance first. Real creators,
                real briefs, real data and a team obsessed with what actually
                works on every platform. Not what looks good in a portfolio.
              </p>
            </div>
            <div scroll-item="show" className="align-center">
              <a
                button="hover"
                data-wf--button-arrow--variant="base-button"
                href="#team"
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
                    Meet our team
                  </div>
                  <div text-2="move" className="button-hover-text">
                    Meet our team
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div scroll-item="show" className="static-card">
            <h3 className="static-card-number">3+</h3>
            <p className="static-card-title">Years of experience</p>
          </div>
          <div scroll-item="show" className="rating-card">
            <div className="rating-card-item">
              <h3 className="rating-card-title">4.9</h3>
              <img
                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0abbef4fe9addd403f01c2_single-star.svg"
                loading="lazy"
                alt="Star Icon"
                className="rating-icon"
              />
            </div>
            <p className="static-card-title">from 120+ brands</p>
          </div>
        </div>
      </section>
      <section data-scroll="load" className="section-spacing-top">
        <div className="container-medium">
          <div className="w-layout-grid grid-mission-content">
            <div scroll-item="show" className="mission-left-item">
              <img
                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ac086f9c18ffe7222ff70_mission.webp"
                loading="lazy"
                sizes="(max-width: 479px) 100vw, 49vw"
                srcset="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ac086f9c18ffe7222ff70_mission-p-500.webp 500w, https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ac086f9c18ffe7222ff70_mission.webp 630w"
                alt="Image"
                className="mission-image"
              />
            </div>
            <div scroll-item="show" className="mission-right-item">
              <div className="mission-bg-item">
                <img
                  src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ac17ba57a100e20c3835c_mission-img.jpg"
                  loading="lazy"
                  sizes="(max-width: 479px) 100vw, 49vw"
                  srcset="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ac17ba57a100e20c3835c_mission-img-p-500.jpg 500w, https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ac17ba57a100e20c3835c_mission-img.jpg 630w"
                  alt="Image"
                  className="mission-image"
                />
              </div>
              <div className="mission-creator-card">
                <div className="mission-creator-info">
                  <div
                    data-wf--pre-title--variant="dark"
                    className="pre-title w-variant-849517e5-80e6-3d16-ffe2-7953a12970ea"
                  >
                    Our mission
                  </div>
                  <h2 className="mission-creator-title">
                    Make every reel your most powerful sales tool.
                  </h2>
                </div>
                <div className="marquee-list">
                  <div className="marquee-item">
                    <div
                      data-wf--list-item--variant="sm-light"
                      className="list-item w-variant-ecb02aa3-37ad-22ee-690d-6880cd81f5e0"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                        alt="Correct Icon"
                        className="list-icon w-variant-ecb02aa3-37ad-22ee-690d-6880cd81f5e0"
                      />
                      <div className="list-title">
                        Performance-first strategy
                      </div>
                    </div>
                    <div
                      data-wf--list-item--variant="sm-light"
                      className="list-item w-variant-ecb02aa3-37ad-22ee-690d-6880cd81f5e0"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                        alt="Correct Icon"
                        className="list-icon w-variant-ecb02aa3-37ad-22ee-690d-6880cd81f5e0"
                      />
                      <div className="list-title">Hand-picked creators</div>
                    </div>
                    <div
                      data-wf--list-item--variant="sm-light"
                      className="list-item w-variant-ecb02aa3-37ad-22ee-690d-6880cd81f5e0"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                        alt="Correct Icon"
                        className="list-icon w-variant-ecb02aa3-37ad-22ee-690d-6880cd81f5e0"
                      />
                      <div className="list-title">
                        Weekly results, no jargon
                      </div>
                    </div>
                    <div
                      data-wf--list-item--variant="sm-light"
                      className="list-item w-variant-ecb02aa3-37ad-22ee-690d-6880cd81f5e0"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                        alt="Correct Icon"
                        className="list-icon w-variant-ecb02aa3-37ad-22ee-690d-6880cd81f5e0"
                      />
                      <div className="list-title">Content live in 7 days</div>
                    </div>
                  </div>
                  <div className="marquee-item">
                    <div
                      data-wf--list-item--variant="sm-light"
                      className="list-item w-variant-ecb02aa3-37ad-22ee-690d-6880cd81f5e0"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                        alt="Correct Icon"
                        className="list-icon w-variant-ecb02aa3-37ad-22ee-690d-6880cd81f5e0"
                      />
                      <div className="list-title">
                        Performance-first strategy
                      </div>
                    </div>
                    <div
                      data-wf--list-item--variant="sm-light"
                      className="list-item w-variant-ecb02aa3-37ad-22ee-690d-6880cd81f5e0"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                        alt="Correct Icon"
                        className="list-icon w-variant-ecb02aa3-37ad-22ee-690d-6880cd81f5e0"
                      />
                      <div className="list-title">Hand-picked creators</div>
                    </div>
                    <div
                      data-wf--list-item--variant="sm-light"
                      className="list-item w-variant-ecb02aa3-37ad-22ee-690d-6880cd81f5e0"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                        alt="Correct Icon"
                        className="list-icon w-variant-ecb02aa3-37ad-22ee-690d-6880cd81f5e0"
                      />
                      <div className="list-title">
                        Weekly results, no jargon
                      </div>
                    </div>
                    <div
                      data-wf--list-item--variant="sm-light"
                      className="list-item w-variant-ecb02aa3-37ad-22ee-690d-6880cd81f5e0"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                        alt="Correct Icon"
                        className="list-icon w-variant-ecb02aa3-37ad-22ee-690d-6880cd81f5e0"
                      />
                      <div className="list-title">Content live in 7 days</div>
                    </div>
                  </div>
                  <div className="marquee-item">
                    <div
                      data-wf--list-item--variant="sm-light"
                      className="list-item w-variant-ecb02aa3-37ad-22ee-690d-6880cd81f5e0"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                        alt="Correct Icon"
                        className="list-icon w-variant-ecb02aa3-37ad-22ee-690d-6880cd81f5e0"
                      />
                      <div className="list-title">
                        Performance-first strategy
                      </div>
                    </div>
                    <div
                      data-wf--list-item--variant="sm-light"
                      className="list-item w-variant-ecb02aa3-37ad-22ee-690d-6880cd81f5e0"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                        alt="Correct Icon"
                        className="list-icon w-variant-ecb02aa3-37ad-22ee-690d-6880cd81f5e0"
                      />
                      <div className="list-title">Hand-picked creators</div>
                    </div>
                    <div
                      data-wf--list-item--variant="sm-light"
                      className="list-item w-variant-ecb02aa3-37ad-22ee-690d-6880cd81f5e0"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                        alt="Correct Icon"
                        className="list-icon w-variant-ecb02aa3-37ad-22ee-690d-6880cd81f5e0"
                      />
                      <div className="list-title">
                        Weekly results, no jargon
                      </div>
                    </div>
                    <div
                      data-wf--list-item--variant="sm-light"
                      className="list-item w-variant-ecb02aa3-37ad-22ee-690d-6880cd81f5e0"
                    >
                      <img
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a06d20a43bff9bfc73362e2_arrow.svg"
                        alt="Correct Icon"
                        className="list-icon w-variant-ecb02aa3-37ad-22ee-690d-6880cd81f5e0"
                      />
                      <div className="list-title">Content live in 7 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-scroll="load" className="section-spacing">
        <div className="container-medium">
          <div className="core-value-content">
            <div className="core-value-info">
              <div scroll-item="show" className="core-value-top">
                <div
                  data-wf--pre-title--variant="light"
                  className="pre-title w-variant-78cfc61f-22b8-dae6-a49f-77874c0c6eaa"
                >
                  What we stand for
                </div>
                <h2 className="core-value-title">
                  The values behind every reel we build.
                </h2>
              </div>
              <div scroll-item="show" className="core-value-center">
                <div className="marquee-list">
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
                </div>
                <div className="fade"></div>
                <div className="fade right"></div>
              </div>
              <div scroll-item="show" className="core-value-bottom">
                <div className="core-value-client-info">
                  <div className="core-value-avatar-list">
                    <div className="value-avatar-round left-0">
                      <img
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a07fcab9f239d293149025b_avatar12.jpg"
                        loading="lazy"
                        alt="Avatar Image"
                        className="value-avatar"
                      />
                    </div>
                    <div className="value-avatar-round">
                      <img
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a07fcab3ac42ea35a74f45c_avatar13.jpg"
                        loading="lazy"
                        alt="Avatar Image"
                        className="value-avatar"
                      />
                    </div>
                    <div className="value-avatar-round">
                      <img
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a07fcab36e3334e8979592c_avatar14.jpg"
                        loading="lazy"
                        alt="Avatar Image"
                        className="value-avatar"
                      />
                    </div>
                    <div className="value-avatar-round">
                      <img
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a07fcabeecfdc9128035299_avatar15.jpg"
                        loading="lazy"
                        alt="Avatar Image"
                        className="value-avatar"
                      />
                    </div>
                  </div>
                  <div className="core-value-rating">
                    <img
                      src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a07fd85ee9a1acfee23e8f5_star.svg"
                      loading="lazy"
                      alt="Star Icon"
                      className="core-value-icon"
                    />
                    <p className="text-black no-margin-bottom">
                      <span className="text-bold">4.9/5</span> from 120+ brands
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="core-value-list">
              <div className="core-value-card _01">
                <div className="value-card-top bg-primary-3">
                  <div className="value-icon-item">
                    <img
                      src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ad56634c59ded8fa8262f_Icon-01.svg"
                      loading="lazy"
                      alt="Icon"
                      className="value-icon"
                    />
                  </div>
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
                <div className="value-card-bottom bg-primary-3">
                  <div className="value-card-info">
                    <h3 className="step-card-title">Performance first</h3>
                    <p className="step-card-description">
                      Every creative decision is backed by data. We don&#x27;t
                      make reels that look good we make reels that work.
                    </p>
                  </div>
                </div>
              </div>
              <div className="core-value-card _02">
                <div className="value-card-top bg-primary-2">
                  <div className="value-icon-item">
                    <img
                      src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ad77582d04d82fed4e402_Icon-02.svg"
                      loading="lazy"
                      alt="Icon"
                      className="value-icon"
                    />
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0837004d585f3f941de90f_pink%20shape.svg"
                    loading="lazy"
                    alt="Shape"
                    className="step-shape"
                  />
                  <img
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0837002a543af6e25b9a4f_pink%20shape-2.svg"
                    loading="lazy"
                    alt="Shape"
                    className="step-shape right"
                  />
                </div>
                <div className="value-card-bottom bg-primary-2">
                  <div className="value-card-info">
                    <h3 className="step-card-title">Radical honesty</h3>
                    <p className="step-card-description">
                      We tell you what you need to hear, not what you want. No
                      vanity metrics. Just what&#x27;s working and what
                      isn&#x27;t.
                    </p>
                  </div>
                </div>
              </div>
              <div className="core-value-card _03">
                <div className="value-card-top bg-primary-6">
                  <div className="value-icon-item">
                    <img
                      src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ad7752a4776be6366b59e_Icon-03.svg"
                      loading="lazy"
                      alt="Icon"
                      className="value-icon"
                    />
                  </div>
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
                <div className="value-card-bottom bg-primary-6">
                  <div className="value-card-info">
                    <h3 className="step-card-title">Speed matters</h3>
                    <p className="step-card-description">
                      Content has a shelf life. We move fast, test weekly, and
                      iterate without the agency slowdowns that kill momentum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="core-value-card _04">
                <div className="value-card-top bg-primary-1">
                  <div className="value-icon-item">
                    <img
                      src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0ad775ceb2dc85a947fe5f_Icon-04.svg"
                      loading="lazy"
                      alt="Icon"
                      className="value-icon"
                    />
                  </div>
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
                <div className="value-card-bottom bg-primary-1">
                  <div className="value-card-info">
                    <h3 className="step-card-title">Real partnerships</h3>
                    <p className="step-card-description">
                      We&#x27;re not a content factory. We build long-term
                      partnerships with brands and creators who are serious
                      about growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 9-Video UGC Portfolio Showcase */}
      <PortfolioVideoSection />

      {/* Creators & Brands Marquee Section */}
      <section data-scroll="load" className="section-spacing-bottom" style={{ paddingTop: 0 }}>
        <div className="container-medium">
          <div className="team-content">
            <div className="team-platform">
              <div scroll-item="show" className="text-gray-1 text-center">
                Trusted by 120+ creators and brands
              </div>
              <div scroll-item="show" className="team-platform-content">
                <div className="marquee-item pricing-marquee">
                  <img
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a083ca5683977296080eb4e_dermato.svg"
                    loading="lazy"
                    alt="Icon"
                    className="brand-icon"
                  />
                  <div
                    data-wf--marquee-badge--variant="gray"
                    className="marquee-badge w-variant-71d7af76-a284-9097-9a51-ba8262adaee7"
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
                    data-wf--marquee-badge--variant="gray"
                    className="marquee-badge w-variant-71d7af76-a284-9097-9a51-ba8262adaee7"
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
                    data-wf--marquee-badge--variant="gray"
                    className="marquee-badge w-variant-71d7af76-a284-9097-9a51-ba8262adaee7"
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
                    data-wf--marquee-badge--variant="gray"
                    className="marquee-badge w-variant-71d7af76-a284-9097-9a51-ba8262adaee7"
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
                    data-wf--marquee-badge--variant="gray"
                    className="marquee-badge w-variant-71d7af76-a284-9097-9a51-ba8262adaee7"
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
                    data-wf--marquee-badge--variant="gray"
                    className="marquee-badge w-variant-71d7af76-a284-9097-9a51-ba8262adaee7"
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
                <div className="team-fade"></div>
                <div className="team-fade right"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-scroll="load" className="section-spacing-bottom">
        <div className="container-medium">
          <div className="section-title">
            <div className="w-layout-grid grid-blog-top">
              <div scroll-item="show" className="blog-section-title">
                <div data-wf--pre-title--variant="base" className="pre-title">
                  From the blog
                </div>
                <h2 className="blog-title">
                  Fresh off the feed. Read what&#x27;s working.
                </h2>
              </div>
              <div scroll-item="show" className="blog-cta">
                <a
                  button="hover"
                  data-wf--button-arrow--variant="base-button"
                  href="/blog"
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
                      View all blog
                    </div>
                    <div text-2="move" className="button-hover-text">
                      View all blog
                    </div>
                  </div>
                </a>
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
            </div>
          </div>
        </div>
      </section>
      <section data-scroll="load" className="section-spacing-bottom">
        <div className="container-medium">
          <div scroll-item="show" className="cta-content">
            <div avatar-list="move" className="cta-avatar-list">
              <div className="cta-avatar-item _01">
                <div className="cta-avatar-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0844030bda8b282ae130a3_CTA-01.jpg"
                    alt="CTA Avatar"
                    className="cta-avatar"
                  />
                </div>
                <div className="cta-avatar-wrap rotate">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a08440358ed302dc221c3e5_CTA-03.jpg"
                    alt="CTA Avatar"
                    className="cta-avatar"
                  />
                </div>
              </div>
              <div className="cta-avatar-item _02">
                <div className="cta-avatar-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0844052debafabe2818d0f_CTA-05.jpg"
                    alt="CTA Avatar"
                    className="cta-avatar"
                  />
                </div>
                <div className="cta-avatar-wrap rotate">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a08440a324d9b48523c6e4d_CTA-09.jpg"
                    alt="CTA Image"
                    className="cta-avatar"
                  />
                </div>
              </div>
              <div className="cta-avatar-item _03">
                <div className="cta-avatar-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a084405b1667d0dbb89a1f4_CTA-06.jpg"
                    alt="CTA Avatar"
                    className="cta-avatar"
                  />
                </div>
                <div className="cta-avatar-wrap rotate">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a08440831f12799bf57787f_CTA-08.jpg"
                    alt="CTA Avatar"
                    className="cta-avatar"
                  />
                </div>
              </div>
              <div className="cta-avatar-item _04">
                <div className="cta-avatar-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a08440a89fc96967acb51de_CTA-11.jpg"
                    alt="Image"
                    className="cta-avatar"
                  />
                </div>
                <div className="cta-avatar-wrap rotate">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a084408dcc86926c3b89879_CTA-07.jpg"
                    alt="CTA Avatar"
                    className="cta-avatar"
                  />
                </div>
              </div>
              <div className="cta-avatar-item _05">
                <div className="cta-avatar-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a08440a61fa4db6445a816f_CTA-12.jpg"
                    alt="CTA Image"
                    className="cta-avatar"
                  />
                </div>
                <div className="cta-avatar-wrap rotate">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a08440467a0469d6f4adc5c_CTA-02.jpg"
                    alt="CTA Avatar"
                    className="cta-avatar"
                  />
                </div>
              </div>
              <div className="cta-avatar-item _06">
                <div className="cta-avatar-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a084404879a7050ca23c992_CTA-04.jpg"
                    alt="CTA Avatar"
                    className="cta-avatar"
                  />
                </div>
                <div className="cta-avatar-wrap rotate">
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a08440358ed302dc221c3e5_CTA-03.jpg"
                    alt="CTA Avatar"
                    className="cta-avatar"
                  />
                </div>
              </div>
            </div>
            <div className="cta-info">
              <div className="cta-top">
                <div
                  data-wf--pre-title--variant="gray-border"
                  className="pre-title w-variant-014e772b-3e99-204f-a669-87dc1a008093"
                >
                  Ready?
                </div>
                <h2 className="text-center no-margin-bottom">
                  Scrolling happens. Being stopped doesn&#x27;t.
                </h2>
                <p className="text-center no-margin-bottom">
                  Book a free strategy call. We&#x27;ll audit your current
                  content and show you exactly where the gaps are no pitch, no
                  pressure.
                </p>
              </div>
              <div className="cta-bottom">
                <a
                  button="hover"
                  data-wf--button-arrow--variant="base-button"
                  href="/contact"
                  className="button-arrow w-inline-block"
                >
                  <div className="button-icon-round">
                    <img
                      src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a02fc14b3709c0b95669297_call-icon.svg"
                      loading="eager"
                      alt="Call Icon"
                      className="button-icon"
                    />
                  </div>
                  <div className="button-text-wrap">
                    <div text-1="move" className="button-text">
                      Book a free call
                    </div>
                    <div text-2="move" className="button-hover-text">
                      Book a free call
                    </div>
                  </div>
                </a>
                <a
                  button="hover"
                  data-wf--button-right--variant="light"
                  href="/case-studies"
                  className="button-right w-inline-block"
                >
                  <div className="button-title-wrap">
                    <div className="button-title-rolling">
                      <div
                        text-1="move"
                        className="button-right-title w-variant-878da796-2888-98cb-68e0-277b54832173"
                      >
                        See our work first
                      </div>
                      <div
                        text-2="move"
                        className="button-right-title w-variant-878da796-2888-98cb-68e0-277b54832173"
                      >
                        See our work first
                      </div>
                    </div>
                  </div>
                  <div className="button-right-round w-variant-878da796-2888-98cb-68e0-277b54832173">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a02f8131485834ac5de15a5_button-arrow.svg"
                      alt="Arrow Icon"
                      className="button-right-icon"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="cta-overlay"></div>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
