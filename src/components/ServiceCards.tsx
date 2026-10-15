'use client';

import React from 'react';
import { ArrowUpRight, TrendingUp, Sparkles, Video, Users } from 'lucide-react';
import styles from './ServiceCards.module.css';

export default function ServiceCards() {
  const services = [
    {
      id: '01',
      tag: 'Creative Strategy',
      title: 'UGC that stops the scroll',
      desc: 'Hook-driven, authentic creator content engineered for high retention and algorithm virality.',
      stat: '100+ Brands Scaled',
      colorClass: styles.cardBlue,
      icon: Video,
      img: '/digixet-logo.png',
      previewImg: 'https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a07fcabeecfdc9128035299_avatar15.jpg',
    },
    {
      id: '02',
      tag: 'Paid Performance',
      title: 'High-converting UGC ads',
      desc: 'Performance ad variations and direct-response angles tested systematically to slash your customer acquisition cost.',
      stat: '+340% Avg. ROAS Lift',
      colorClass: styles.cardPink,
      icon: TrendingUp,
      previewImg: 'https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fb1155356dd26395f2_2.avif',
    },
    {
      id: '03',
      tag: 'Organic Distribution',
      title: 'TikTok & Reels organic growth',
      desc: 'Consistent daily storytelling and sound-trending formats that transform casual scrollers into loyal customers.',
      stat: '50M+ Organic Views',
      colorClass: styles.cardGreen,
      icon: Sparkles,
      previewImg: 'https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fcc3e1aad9593aaadc_8.avif',
    },
    {
      id: '04',
      tag: 'Talent Network',
      title: 'Creator sourcing & management',
      desc: 'Complete talent matching, contracts, creative briefs, and content QA handled end-to-end for zero brand headache.',
      stat: '1250+ Vetted Creators',
      colorClass: styles.cardYellow,
      icon: Users,
      previewImg: 'https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fce6e659e05f5a34a2_7.jpg',
    },
  ];

  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="pill-badge">
            <span className="pill-badge-dot"></span>
            Our Capabilities
          </div>
          <h2 className={styles.heading}>HOW WE GROW YOU</h2>
          <p className={styles.subtext}>
            We combine high-level creative direction with data-backed creator marketing systems.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.id} className={`${styles.card} ${s.colorClass}`}>
                <div className={styles.cardHeader}>
                  <span className={styles.tag}>{s.tag}</span>
                  <div className={styles.iconCircle}>
                    <Icon size={18} />
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p className={styles.cardDesc}>{s.desc}</p>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.statBox}>
                    <span className={styles.statLabel}>PROVEN RESULT</span>
                    <span className={styles.statValue}>{s.stat}</span>
                  </div>

                  <div className={styles.previewBox}>
                    <img src={s.previewImg} alt={s.title} className={styles.previewAvatar} />
                    <span className={styles.badgeNum}>{s.id}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
