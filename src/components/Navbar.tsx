'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Brand Logo */}
        <Link href="/" className={styles.brand} aria-label="digixet">
          <img
            src="/digixet-logo.png"
            alt="digixet Logo"
            className={styles.logo}
          />
          <span className={styles.brandName}>digixet</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className={styles.navMenu}>
          <Link href="/" className={`${styles.navLink} ${styles.active}`}>
            Home
          </Link>
          <Link href="#services" className={styles.navLink}>
            Services
          </Link>
          <Link href="#results" className={styles.navLink}>
            Results
          </Link>
          <Link href="#process" className={styles.navLink}>
            Process
          </Link>
          <Link href="#pricing" className={styles.navLink}>
            Pricing
          </Link>
          <Link href="#faqs" className={styles.navLink}>
            FAQs
          </Link>
        </nav>

        {/* Right Action */}
        <div className={styles.actions}>
          <Link href="#contact" className={styles.ctaButton}>
            <span className={styles.ctaIcon}>
              <Phone size={15} />
            </span>
            <span>Book a call</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <nav className={styles.mobileNav}>
            <Link
              href="/"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#services"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#results"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Results
            </Link>
            <Link
              href="#process"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </Link>
            <Link
              href="#pricing"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#faqs"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQs
            </Link>
          </nav>

          <Link
            href="#contact"
            className={styles.mobileCta}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Phone size={16} />
            <span>Book a call</span>
          </Link>
        </div>
      )}
    </header>
  );
}
