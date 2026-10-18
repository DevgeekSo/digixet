"use client";

import React, { useState } from "react";
import { getWhatsAppUrl, WHATSAPP_PHONE_DISPLAY } from "@/lib/whatsapp";
import styles from "./WhatsAppFloatingButton.module.css";

export default function WhatsAppFloatingButton() {
  const [hovered, setHovered] = useState(false);

  const whatsappUrl = getWhatsAppUrl(
    "Hi, I want to enquire about your services and book a strategy call."
  );

  return (
    <div className={styles.container}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Enquire or Book a Call on WhatsApp"
        id="whatsapp-floating-cta"
      >
        <span className={styles.pulse}></span>
        <div className={styles.iconWrap}>
          {/* Official WhatsApp SVG Icon */}
          <svg
            viewBox="0 0 32 32"
            width="28"
            height="28"
            fill="currentColor"
            className={styles.icon}
          >
            <path d="M16 2a13.9 13.9 0 0 0-12 20.9L2 30l7.3-1.9A13.9 13.9 0 1 0 16 2zm0 25.4a11.5 11.5 0 0 1-5.9-1.6l-.4-.3-4.3 1.1 1.2-4.2-.3-.5A11.5 11.5 0 1 1 16 27.4zm6.3-8.6c-.3-.2-2-.9-2.3-1s-.6-.2-.8.2-.9 1-1.1 1.2-.4.3-.7.1a9.2 9.2 0 0 1-2.7-1.7 10.2 10.2 0 0 1-1.9-2.3c-.2-.3 0-.5.1-.7s.3-.4.5-.6.2-.3.3-.5.1-.4 0-.5-.8-1.9-1.1-2.6-.6-.6-.8-.6h-.7a1.4 1.4 0 0 0-1 .5 4.3 4.3 0 0 0-1.3 3.2 7.5 7.5 0 0 0 1.6 4 17.2 17.2 0 0 0 6.6 5.8c.9.4 1.6.6 2.2.8a5.3 5.3 0 0 0 2.4.1 3.9 3.9 0 0 0 2.6-1.8 3.2 3.2 0 0 0 .2-1.8c-.2-.2-.5-.3-.8-.5z" />
          </svg>
        </div>
        <span className={styles.label}>
          <span>Enquire</span>
        </span>
      </a>
    </div>
  );
}
