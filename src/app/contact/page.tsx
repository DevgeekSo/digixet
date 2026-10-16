"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="main">
      <Navbar />
      <section className="hero-section section-spacing-bottom">
        <div className="container-medium">
          <div className="w-layout-grid grid-hero-contact">
            <div className="hero-contact-left">
              <div className="hero-contact-caption">
                <div data="show" className="hero-client-info">
                  <div className="hero-client-avatar-list">
                    <div className="client-avatar-round left-0">
                      <img
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a07fcab9f239d293149025b_avatar12.jpg"
                        loading="lazy"
                        alt="Avatar Image"
                        className="client-avatar"
                      />
                    </div>
                    <div className="client-avatar-round">
                      <img
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a07fcab3ac42ea35a74f45c_avatar13.jpg"
                        loading="lazy"
                        alt="Avatar Image"
                        className="client-avatar"
                      />
                    </div>
                    <div className="client-avatar-round">
                      <img
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a07fcab36e3334e8979592c_avatar14.jpg"
                        loading="lazy"
                        alt="Avatar Image"
                        className="client-avatar"
                      />
                    </div>
                    <div className="client-avatar-round">
                      <img
                        src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a07fcabeecfdc9128035299_avatar15.jpg"
                        loading="lazy"
                        alt="Avatar Image"
                        className="client-avatar"
                      />
                    </div>
                  </div>
                  <div className="hero-client-rating">
                    <img
                      src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a07fd85ee9a1acfee23e8f5_star.svg"
                      loading="lazy"
                      alt="Star Icon"
                      className="client-rating-icon"
                    />
                    <p className="text-gray-1 no-margin-bottom">
                      Grown over 120+ creators
                    </p>
                  </div>
                </div>
                <div data="show" className="hero-contact-title">
                  <h1 className="hero-word">Let&#x27;s</h1>
                  <h2 className="hero-word">Build</h2>
                  <h2 className="hero-word">something </h2>
                  <h2 className="contact-highlite-title">great.</h2>
                </div>
              </div>
              <div data="show" className="hero-team-platform">
                <div className="text-gray-1">
                  Trusted by 120+ creators and brands
                </div>
                <div className="hero-team-info">
                  <div className="marquee-item hero-marquee">
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
                  <div className="marquee-item hero-marquee">
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
                  <div className="marquee-item hero-marquee">
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
                  <div className="team-fade light"></div>
                  <div className="team-fade light right"></div>
                </div>
              </div>
            </div>
            <div data="show" className="hero-contact-right">
              <div className="hero-contact-info">
                <div className="hero-contact-bg"></div>
                <h2 className="contact-right-title">
                  Share your details with us.
                </h2>
              </div>
              <div className="contact-form w-form">
                <form
                  id="wf-form-Contact-Form"
                  name="wf-form-Contact-Form"
                  data-name="Contact Form"
                  method="get"
                  className="contact-inner-form"
                  data-wf-page-id="6a0be426e4015393185abfed"
                  data-wf-element-id="6e139727-7a5b-17fc-2864-deee9e69ac01"
                >
                  <div className="label">
                    <label htmlFor="name" className="field-title">
                      Full name*
                    </label>
                    <input
                      className="form-input contact-input w-input"
                      maxLength={256}
                      name="name"
                      data-name="Name"
                      placeholder="Enter your full name"
                      type="text"
                      id="name"
                    />
                  </div>
                  <div className="label">
                    <label htmlFor="Email" className="field-title">
                      Email address*
                    </label>
                    <input
                      className="form-input contact-input w-input"
                      maxLength={256}
                      name="Email"
                      data-name="Email"
                      placeholder="hello@yourbrand.com"
                      type="email"
                      id="Email"
                      required
                    />
                  </div>
                  <div className="radio-group">
                    <label htmlFor="name" className="field-title">
                      Which platforms are you active on?
                    </label>
                    <div className="radio-list-inner">
                      <label className="radio-button-field radio-item w-radio">
                        <div className="w-form-formradioinput w-form-formradioinput--inputType-custom contact-radio-button w-radio-input"></div>
                        <input
                          id="Instagram"
                          type="radio"
                          name="Platform"
                          data-name="Platform"
                          style={{
                            opacity: "0",
                            position: "absolute",
                            zIndex: "-1",
                          }}
                          value="Instagram"
                        />
                        <span
                          className="radio-button-label contact-radio-title w-form-label"
                          htmlFor="Instagram"
                        >
                          Instagram
                        </span>
                      </label>
                      <label className="radio-button-field radio-item w-radio">
                        <div className="w-form-formradioinput w-form-formradioinput--inputType-custom contact-radio-button w-radio-input"></div>
                        <input
                          id="YouTube"
                          type="radio"
                          name="Platform"
                          data-name="Platform"
                          style={{
                            opacity: "0",
                            position: "absolute",
                            zIndex: "-1",
                          }}
                          value="YouTube"
                        />
                        <span
                          className="radio-button-label contact-radio-title w-form-label"
                          htmlFor="YouTube"
                        >
                          YouTube
                        </span>
                      </label>
                      <label className="radio-button-field radio-item w-radio">
                        <div className="w-form-formradioinput w-form-formradioinput--inputType-custom contact-radio-button w-radio-input"></div>
                        <input
                          id="TikTok"
                          type="radio"
                          name="Platform"
                          data-name="Platform"
                          style={{
                            opacity: "0",
                            position: "absolute",
                            zIndex: "-1",
                          }}
                          value="TikTok"
                        />
                        <span
                          className="radio-button-label contact-radio-title w-form-label"
                          htmlFor="TikTok"
                        >
                          TikTok
                        </span>
                      </label>
                      <label className="radio-button-field radio-item w-radio">
                        <div className="w-form-formradioinput w-form-formradioinput--inputType-custom contact-radio-button w-radio-input"></div>
                        <input
                          id="Facebook"
                          type="radio"
                          name="Platform"
                          data-name="Platform"
                          style={{
                            opacity: "0",
                            position: "absolute",
                            zIndex: "-1",
                          }}
                          value="Facebook"
                        />
                        <span
                          className="radio-button-label contact-radio-title w-form-label"
                          htmlFor="Facebook"
                        >
                          Facebook
                        </span>
                      </label>
                      <label className="radio-button-field radio-item w-radio">
                        <div className="w-form-formradioinput w-form-formradioinput--inputType-custom contact-radio-button w-radio-input"></div>
                        <input
                          id="Other"
                          type="radio"
                          name="Platform"
                          data-name="Platform"
                          style={{
                            opacity: "0",
                            position: "absolute",
                            zIndex: "-1",
                          }}
                          value="Other"
                        />
                        <span
                          className="radio-button-label contact-radio-title w-form-label"
                          htmlFor="Other"
                        >
                          Other
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="label">
                    <label htmlFor="Location" className="field-title">
                      Budget range
                    </label>
                    <select
                      id="Location"
                      name="Location"
                      data-name="Location"
                      className="form-select contact-select w-select"
                    >
                      <option value="">Select budget range</option>
                      <option value="Under $5,000">Under $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000">
                        $10,000 - $25,000
                      </option>
                      <option value="$25,000">$25,000</option>
                    </select>
                  </div>
                  <div className="left-item">
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      className="button-primary contact-button w-button"
                      value="Send message"
                    />
                  </div>
                </form>
                <div className="success-message w-form-done">
                  <div>
                    Your form has been submitted successfully. Thank you!
                  </div>
                </div>
                <div className="error-message w-form-fail">
                  <div>
                    Please double-check your information and try again. If the
                    issue continues, you can also email us directly at
                    support@yourdomain.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-spacing-bottom">
        <div className="container-small">
          <div className="section-title faq-section-title">
            <div
              data-wf--pre-title--variant="gray-border"
              className="pre-title w-variant-014e772b-3e99-204f-a669-87dc1a008093"
            >
              FAQs
            </div>
            <h2 className="text-center no-margin-bottom">
              Frequently asked questions
            </h2>
          </div>
          <div className="grid-faq-info">
            <div className="faqs-card">
              <h2 className="faqs-card-title">
                What professional services do you offer?
              </h2>
              <p className="text-lead no-margin-bottom">
                We specialize in content creation, social media management,user
                generated content campaigns across all major platforms.
              </p>
            </div>
            <div className="faqs-card">
              <h2 className="faqs-card-title">
                Which social media platforms do you work with?
              </h2>
              <p className="text-lead no-margin-bottom">
                We create content for Instagram, TikTok, YouTube, Facebook,
                LinkedIn, Twitter/X, and emerging platforms.
              </p>
            </div>
            <div className="faqs-card">
              <h2 className="faqs-card-title">
                Do you create the content or we need to provide?
              </h2>
              <p className="text-lead no-margin-bottom">
                We handle full content creation from concept to final edit. We
                can also work with your existing content.
              </p>
            </div>
            <div className="faqs-card">
              <h2 className="faqs-card-title">
                What makes your content different from other?
              </h2>
              <p className="text-lead no-margin-bottom">
                We create content that stops the scroll. Our team combines data
                driven strategy with authentic storytelling to build real
                audience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
