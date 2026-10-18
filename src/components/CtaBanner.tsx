"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import styles from "./CtaBanner.module.css";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function CtaBanner() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.content}>
            <div className={styles.avatarGroup}>
              <img
                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a04108de09d4a92c3a1ced6_1.avif"
                alt="Creator"
              />
              <img
                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a07fcabeecfdc9128035299_avatar15.jpg"
                alt="Creator"
              />
              <img
                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fb1155356dd26395f2_2.avif"
                alt="Creator"
              />
              <img
                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fcc3e1aad9593aaadc_8.avif"
                alt="Creator"
              />
            </div>

            <h2 className={styles.title}>
              READY TO STOP THE SCROLL AND SCALE YOUR REVENUE?
            </h2>

            <p className={styles.subtitle}>
              Book a 20-minute creative strategy call. We'll audit your current
              ad angles and share 3 custom creator concepts specifically for
              your brand.
            </p>

            <div className={styles.buttonGroup}>
              <a
                href={getWhatsAppUrl("Hi, I want to book a 20-minute discovery strategy call.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ background: "#ffffff", color: "#09090b" }}
              >
                <Phone size={16} />
                <span>Book a Discovery Call</span>
                <ArrowRight size={16} />
              </a>
              <Link
                href="#pricing"
                className="btn-secondary"
                style={{
                  background: "transparent",
                  color: "#ffffff",
                  borderColor: "rgba(255,255,255,0.2)",
                }}
              >
                <span>Compare Pricing Plans</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
