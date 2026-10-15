'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Twitter, Youtube, Linkedin, ArrowUp } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topRow}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brandLink}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img
                  src="/digixet-logo.png"
                  alt="digixet Logo"
                  className={styles.logo}
                  style={{ height: '34px', width: 'auto', borderRadius: '8px' }}
                />
                <span style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.5px', color: '#0f172a', textTransform: 'lowercase' }}>digixet</span>
              </div>
            </Link>
            <p className={styles.tagline}>
              UGC and creator marketing agency that turns real people into your highest-performing sales force. Built on creative testing, not gut feelings.
            </p>
            <div className={styles.socialList}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
                <Instagram size={18} />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
                <Twitter size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
                <Youtube size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Navigation</h4>
            <Link href="/" className={styles.footerLink}>Home</Link>
            <Link href="#services" className={styles.footerLink}>Services</Link>
            <Link href="#results" className={styles.footerLink}>Case Studies</Link>
            <Link href="#process" className={styles.footerLink}>Our Framework</Link>
            <Link href="#pricing" className={styles.footerLink}>Pricing Plans</Link>
          </div>

          {/* Links 2 */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Capabilities</h4>
            <span className={styles.footerText}>TikTok Ads & Spark</span>
            <span className={styles.footerText}>Meta Reels Creatives</span>
            <span className={styles.footerText}>Creator Briefing & Sourcing</span>
            <span className={styles.footerText}>Direct Response Hooks</span>
            <span className={styles.footerText}>High-Impact Post Editing</span>
          </div>

          {/* Links 3 */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Get in Touch</h4>
            <p className={styles.footerText}>hello@digixet.com</p>
            <p className={styles.footerText}>Mon - Fri: 9:00 AM - 6:00 PM EST</p>
            <Link href="#contact" className={styles.callToAction}>
              Book a Strategy Call →
            </Link>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} digixet. Built with Next.js & semantic React components. All rights reserved.
          </p>

          <button onClick={scrollToTop} className={styles.scrollBtn} aria-label="Scroll to top">
            <ArrowUp size={16} />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
