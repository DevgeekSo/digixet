'use client';

import React from 'react';
import { Target, UserCheck, Scissors, BarChart } from 'lucide-react';
import styles from './ProcessSteps.module.css';

export default function ProcessSteps() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Creative Strategy',
      desc: 'We analyze your customer personas, top competitor ads, and write 10+ high-retention hook variations tailored to your product.',
      icon: Target,
      tag: 'Step 1: The Blueprint',
    },
    {
      num: '02',
      title: 'Creator Matching & Briefs',
      desc: 'We match your brand with high-performing UGC talent from our 1,250+ network. Full contract management and product seeding included.',
      icon: UserCheck,
      tag: 'Step 2: Talent Vetting',
    },
    {
      num: '03',
      title: 'Editing & Dynamic Motion',
      desc: 'Our in-house video editors craft fast-paced, native-feeling videos with attention-grabbing captions, b-roll, and trending audio cues.',
      icon: Scissors,
      tag: 'Step 3: Post-Production',
    },
    {
      num: '04',
      title: 'Testing & Creative Scaling',
      desc: 'We examine 3-second hook drop-offs and CTR data, doubling down on the winning angles to scale your paid and organic channels.',
      icon: BarChart,
      tag: 'Step 4: Scale & Iterate',
    },
  ];

  return (
    <section id="process" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className="pill-badge">
            <span className="pill-badge-dot"></span>
            The 4-Step Framework
          </div>
          <h2 className={styles.heading}>FROM ZERO TO SCROLL-STOPPING CONTENT THAT CONVERTS</h2>
          <p className={styles.subtext}>
            Our repeatable production engine turns creator ideas into scalable revenue in under 14 days.
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className={styles.stepCard}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNum}>{s.num}</span>
                  <div className={styles.iconWrap}>
                    <Icon size={18} />
                  </div>
                </div>

                <div className={styles.stepTag}>{s.tag}</div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
