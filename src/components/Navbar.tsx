"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div className={styles.headerWrapper}>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
          mobileMenuOpen ? styles.headerOpen : ""
        }`}
      >
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${
                  isActive(link.href) ? styles.active : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action */}
          <div className={styles.actions}>
            <a
              href={getWhatsAppUrl("Hi, I want to book a call with your team.")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              <span className={styles.ctaIcon}>
                <Phone size={15} />
              </span>
              <span>Book a call</span>
            </a>

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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.mobileNavLink} ${
                    isActive(link.href) ? styles.activeMobile : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <a
              href={getWhatsAppUrl("Hi, I want to book a call with your team.")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileCta}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone size={16} />
              <span>Book a call</span>
            </a>
          </div>
        )}
      </header>
    </div>
  );
}
