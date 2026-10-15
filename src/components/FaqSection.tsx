'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FaqSection.module.css';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How do you pick the right creators for our niche?',
      a: 'We manually filter through our vetted database of 1,250+ creators based on audience demographics, engagement rate, on-camera charisma, and product alignment. We never use random automated outreach.',
    },
    {
      q: 'Who owns the full intellectual property rights to the content?',
      a: 'You do! Every video delivered comes with complete commercial advertising usage rights for Meta, TikTok, YouTube Shorts, and your website indefinitely.',
    },
    {
      q: 'How fast is the turnaround from kickoff to final delivered videos?',
      a: 'Once your creative brief is approved and products are received by the creators, our initial delivery turnaround is typically 7 to 10 business days.',
    },
    {
      q: 'Can we request revisions or hook re-edits?',
      a: 'Yes, absolutely. All packages include editing revisions. If a hook needs tweaking or captions require updating, our team handles it promptly.',
    },
    {
      q: 'Do you offer creator Spark Ads and paid whitelisting?',
      a: 'Yes! On our Growth and Agency plans, we coordinate directly with creators to generate TikTok Spark Ads authorization codes and Meta Partnership Ad permissions.',
    },
  ];

  return (
    <section id="faqs" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="pill-badge">
            <span className="pill-badge-dot"></span>
            Frequently Asked Questions
          </div>
          <h2 className={styles.heading}>EVERYTHING YOU NEED TO KNOW</h2>
          <p className={styles.subtext}>
            Got questions? We've got answers. If you need anything else, feel free to contact us.
          </p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ''}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <div className={styles.questionRow}>
                  <h3 className={styles.question}>{faq.q}</h3>
                  <div className={styles.chevronWrap}>
                    <ChevronDown size={18} />
                  </div>
                </div>
                {isOpen && <p className={styles.answer}>{faq.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
