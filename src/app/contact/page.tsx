"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { getWhatsAppUrl, WHATSAPP_PHONE_DISPLAY } from "@/lib/whatsapp";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [budget, setBudget] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi Digixet, I would like to make an enquiry!\n\n• Name: ${name || "Not provided"}\n• Email: ${email || "Not provided"}\n• Platform: ${platform || "Not selected"}\n• Budget Range: ${budget || "Not selected"}`;
    const url = getWhatsAppUrl(message);
    window.open(url, "_blank");
    setSubmitted(true);
  };

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
                <div style={{ marginTop: "12px", marginBottom: "20px" }}>
                  <a
                    href={getWhatsAppUrl("Hi, I want to enquire and book a strategy call directly.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      background: "#25D366",
                      color: "#fff",
                      padding: "10px 18px",
                      borderRadius: "9999px",
                      fontWeight: 600,
                      fontSize: "14px",
                      textDecoration: "none",
                      boxShadow: "0 4px 14px rgba(37,211,102,0.35)",
                    }}
                  >
                    <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor">
                      <path d="M16 2a13.9 13.9 0 0 0-12 20.9L2 30l7.3-1.9A13.9 13.9 0 1 0 16 2zm0 25.4a11.5 11.5 0 0 1-5.9-1.6l-.4-.3-4.3 1.1 1.2-4.2-.3-.5A11.5 11.5 0 1 1 16 27.4zm6.3-8.6c-.3-.2-2-.9-2.3-1s-.6-.2-.8.2-.9 1-1.1 1.2-.4.3-.7.1a9.2 9.2 0 0 1-2.7-1.7 10.2 10.2 0 0 1-1.9-2.3c-.2-.3 0-.5.1-.7s.3-.4.5-.6.2-.3.3-.5.1-.4 0-.5-.8-1.9-1.1-2.6-.6-.6-.8-.6h-.7a1.4 1.4 0 0 0-1 .5 4.3 4.3 0 0 0-1.3 3.2 7.5 7.5 0 0 0 1.6 4 17.2 17.2 0 0 0 6.6 5.8c.9.4 1.6.6 2.2.8a5.3 5.3 0 0 0 2.4.1 3.9 3.9 0 0 0 2.6-1.8 3.2 3.2 0 0 0 .2-1.8c-.2-.2-.5-.3-.8-.5z" />
                    </svg>
                    <span>Instant WhatsApp: {WHATSAPP_PHONE_DISPLAY}</span>
                  </a>
                </div>
              </div>
              <div className="contact-form w-form">
                <form
                  id="wf-form-Contact-Form"
                  name="wf-form-Contact-Form"
                  onSubmit={handleSubmit}
                  className="contact-inner-form"
                >
                  <div className="label">
                    <label htmlFor="name" className="field-title">
                      Full name*
                    </label>
                    <input
                      className="form-input contact-input w-input"
                      maxLength={256}
                      name="name"
                      placeholder="Enter your full name"
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
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
                      placeholder="hello@yourbrand.com"
                      type="email"
                      id="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="radio-group">
                    <label htmlFor="name" className="field-title">
                      Which platforms are you active on?
                    </label>
                    <div className="radio-list-inner">
                      {[
                        { id: "Instagram", label: "Instagram" },
                        { id: "YouTube", label: "YouTube" },
                        { id: "TikTok", label: "TikTok" },
                        { id: "Facebook", label: "Facebook" },
                        { id: "Other", label: "Other" },
                      ].map((item) => (
                        <label
                          key={item.id}
                          className="radio-button-field radio-item w-radio"
                          style={{ cursor: "pointer" }}
                          onClick={() => setPlatform(item.label)}
                        >
                          <div
                            className={`w-form-formradioinput w-form-formradioinput--inputType-custom contact-radio-button w-radio-input ${
                              platform === item.label ? "w--redirected-checked" : ""
                            }`}
                          ></div>
                          <input
                            id={item.id}
                            type="radio"
                            name="Platform"
                            checked={platform === item.label}
                            onChange={() => setPlatform(item.label)}
                            style={{
                              opacity: "0",
                              position: "absolute",
                              zIndex: "-1",
                            }}
                            value={item.label}
                          />
                          <span
                            className="radio-button-label contact-radio-title w-form-label"
                            htmlFor={item.id}
                          >
                            {item.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="label">
                    <label htmlFor="Location" className="field-title">
                      Budget range
                    </label>
                    <select
                      id="Location"
                      name="Location"
                      className="form-select contact-select w-select"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                    >
                      <option value="">Select budget range</option>
                      <option value="Under $5,000">Under $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000">
                        $10,000 - $25,000
                      </option>
                      <option value="$25,000">$25,000+</option>
                    </select>
                  </div>
                  <div className="left-item">
                    <button
                      type="submit"
                      className="button-primary contact-button w-button"
                      style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px" }}
                    >
                      <span>Send enquiry via WhatsApp</span>
                      <svg viewBox="0 0 32 32" width="16" height="16" fill="currentColor">
                        <path d="M16 2a13.9 13.9 0 0 0-12 20.9L2 30l7.3-1.9A13.9 13.9 0 1 0 16 2zm0 25.4a11.5 11.5 0 0 1-5.9-1.6l-.4-.3-4.3 1.1 1.2-4.2-.3-.5A11.5 11.5 0 1 1 16 27.4zm6.3-8.6c-.3-.2-2-.9-2.3-1s-.6-.2-.8.2-.9 1-1.1 1.2-.4.3-.7.1a9.2 9.2 0 0 1-2.7-1.7 10.2 10.2 0 0 1-1.9-2.3c-.2-.3 0-.5.1-.7s.3-.4.5-.6.2-.3.3-.5.1-.4 0-.5-.8-1.9-1.1-2.6-.6-.6-.8-.6h-.7a1.4 1.4 0 0 0-1 .5 4.3 4.3 0 0 0-1.3 3.2 7.5 7.5 0 0 0 1.6 4 17.2 17.2 0 0 0 6.6 5.8c.9.4 1.6.6 2.2.8a5.3 5.3 0 0 0 2.4.1 3.9 3.9 0 0 0 2.6-1.8 3.2 3.2 0 0 0 .2-1.8c-.2-.2-.5-.3-.8-.5z" />
                      </svg>
                    </button>
                  </div>
                </form>
                {submitted && (
                  <div
                    className="success-message w-form-done"
                    style={{ display: "block", marginTop: "16px", background: "#10b98120", border: "1px solid #10b981", borderRadius: "12px", padding: "16px" }}
                  >
                    <div>
                      Redirecting to WhatsApp (+91 77719 83690)... If WhatsApp didn't open automatically,{" "}
                      <a
                        href={getWhatsAppUrl(`Hi Digixet, I would like to make an enquiry!\n\n• Name: ${name}\n• Email: ${email}\n• Platform: ${platform}\n• Budget Range: ${budget}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#25D366", fontWeight: "bold", textDecoration: "underline" }}
                      >
                        click here to chat on WhatsApp
                      </a>.
                    </div>
                  </div>
                )}
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
