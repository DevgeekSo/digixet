'use client';

import React from 'react';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-scroll="load" className="footer section-spacing-top">
      <div className="container-medium">
        <div className="footer-content">
          <div className="w-layout-grid grid-footer-info">
            <div scroll-item="show" className="footer-left">
              <a
                aria-label="digixet home"
                href="/"
                aria-current="page"
                className="footer-brand-link w-inline-block w--current"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
              >
                <img
                  src="/digixet-logo.png"
                  loading="lazy"
                  alt="digixet Logo"
                  className="footer-brand-logo"
                  style={{ height: '36px', width: 'auto', borderRadius: '8px' }}
                />
                <span style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-0.6px', color: '#ffffff', textTransform: 'lowercase' }}>
                  digixet
                </span>
              </a>
              <p className="footer-text">
                We turn real people into your most powerful marketing channel. UGC that performs not just posts.
              </p>
              <div className="footer-social-list">
                <a data-wf--social-item--variant="base" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-item w-inline-block">
                  <img loading="lazy" src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a03013d7f80dab249237e42_af382eb0e774cb0ce5ea28bbc5ddbbe1_Instagram.svg" alt="Social Icon" className="social-icon" />
                </a>
                <a data-wf--social-item--variant="base" href="https://x.com/" target="_blank" rel="noopener noreferrer" className="social-item w-inline-block">
                  <img loading="lazy" src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a030154fc4d8745d50ca1fa_x.svg" alt="Social Icon" className="social-icon" />
                </a>
                <a data-wf--social-item--variant="base" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="social-item w-inline-block">
                  <img loading="lazy" src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a030154510e699f43566fb3_youtube.svg" alt="Social Icon" className="social-icon" />
                </a>
                <a data-wf--social-item--variant="base" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-item w-inline-block">
                  <img loading="lazy" src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a03015db413c1d0a9867a6b_facebook.svg" alt="Social Icon" className="social-icon" />
                </a>
              </div>
            </div>

            <div scroll-item="show" className="footer-right">
              <h2 className="footer-title">Company Pages</h2>
              <div className="w-layout-grid grid-footer-menu">
                <a href="/" aria-current="page" className="footer-link w-inline-block w--current">
                  <div className="footer-link-title">Home</div>
                  <img src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0304af48e46811533abb33_footer-icon-01.svg" loading="lazy" alt="Footer Icon" className="footer-link-icon" />
                </a>
                <a href="/about" className="footer-link w-inline-block">
                  <div className="footer-link-title">About</div>
                  <img src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0305bd642044fc95789b14_footer-icon-02.svg" loading="lazy" alt="Footer Icon" className="footer-link-icon" />
                </a>
                <a href="/case-studies" className="footer-link w-inline-block">
                  <div className="footer-link-title">Case Studies</div>
                  <img src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0305bdf1ad89c832b65ef1_footer-icon-03.svg" loading="lazy" alt="Footer Icon" className="footer-link-icon" />
                </a>
                <a href="/blog" className="footer-link w-inline-block">
                  <div className="footer-link-title">Blog</div>
                  <img src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0305bdbc0963b953e2a4e1_footer-icon-04.svg" loading="lazy" alt="Footer Icon" className="footer-link-icon" />
                </a>
                <a href="/faqs" className="footer-link w-inline-block">
                  <div className="footer-link-title">FAQs</div>
                  <img src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0305bda1cc94d0c33456b5_footer-icon-05.svg" loading="lazy" alt="Footer Icon" className="footer-link-icon" />
                </a>
                <a href="/contact" className="footer-link w-inline-block">
                  <div className="footer-link-title">Contact</div>
                  <img src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0305bedd9206ab218a0a7c_footer-icon-06.svg" loading="lazy" alt="Footer Icon" className="footer-link-icon" />
                </a>
                <div id="w-node-_8f9179b9-112b-3db0-42d5-2530d9b38d34-6cfe1801" className="footer-cta">
                  <a button="hover" data-wf--button-primary--variant="button-primary-3" href="/contact" className="button-primary w-variant-b940acd3-b80a-7320-211f-5a9c6f4def9c w-inline-block">
                    <div className="button-primary-title">
                      <div text-1="move">Book a call</div>
                      <div text-2="move">Book a call</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-layout-grid grid-footer-info">
            <div scroll-item="show" className="footer-contact-info">
              <h3 className="footer-title">Contact Info</h3>
              <div className="footer-contact-list">
                <a href="tel:+1(202)5550147" className="footer-contact-link">+1 (202) 555 0147</a>
                <a href="mailto:hello@digixet.com" className="footer-contact-link">hello@digixet.com</a>
              </div>
            </div>
            <div scroll-item="show" className="footer-subscribe-info">
              <h3 className="footer-title">Stay ahead of the feed.</h3>
              <div className="footer-subscribe-form">
                <div className="no-margin-bottom w-form">
                  <form id="wf-form-Subscribe-Form" name="wf-form-Subscribe-Form" data-name="Subscribe Form" method="get" className="subscribe-form" data-wf-page-id="6a018c163190c0cf038573e5" data-wf-element-id="8a92fd29-2de7-fcee-b58d-8af6d9c9f1ab">
                    <input className="form-input subscribe-input w-input" maxLength={256} name="Subscribe-Email" data-name="Subscribe Email" aria-label="Email address" placeholder="Your email address" type="email" id="Subscribe-Email" required />
                    <input type="submit" data-wait="" aria-label="button" className="button-primary button-subscribe w-button" value="" />
                    <label className="w-checkbox checkbox-field no-margin-bottom">
                      <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox subscribe-checkbox"></div>
                      <input id="Subscribe-Checkbox" type="checkbox" name="Subscribe-Checkbox" data-name="Subscribe Checkbox" aria-label="checkbox" style={{ opacity: 0, position: 'absolute', zIndex: -1 }} />
                      <span className="checkbox-label subscribe-label w-form-label" htmlFor="Subscribe-Checkbox">I consent to receive newsletters and updates.</span>
                    </label>
                  </form>
                  <div className="success-message w-form-done">
                    <div>Your form has been submitted successfully. Thank you!</div>
                  </div>
                  <div className="error-message w-form-fail">
                    <div>Please double-check your information and try again. If the issue continues, you can also email us directly at support@digixet.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div scroll-item="show" className="footer-divider"></div>

      <div className="container-medium">
        <div className="footer-copyright-info">
          <p scroll-item="show" className="footer-copyright-text">
            © {currentYear} <a href="/" className="footer-copyright-link">digixet</a>. All rights reserved.
          </p>
          <div scroll-item="show" className="footer-pages-link">
            <a href="/privacy-policy" className="footer-bottom-link">Privacy Policy</a>
            <a href="/terms" className="footer-bottom-link">Terms of Service</a>
            <a href="/contact" className="footer-bottom-link">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
