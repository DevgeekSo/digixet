'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Play, Sparkles } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  const marqueeCreatorsRow1 = [
    { name: 'yara.ugc', followers: '2M', img: 'https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fd0a1c361940feafba_9.avif' },
    { name: 'cade.reels', followers: '5M', img: 'https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fd35679762122a7d19_10.avif' },
    { name: 'taravibe_', followers: '42k', img: 'https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0421b82ed588ed4242794f_avatar-09.jpg' },
    { name: 'nova.con', followers: '40k', img: 'https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0422af1c553c36199c0ed0_avatar-01.jpg' },
  ];

  const marqueeCreatorsRow2 = [
    { name: 'nikoflips', followers: '2.5M', img: 'https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fcc3e1aad9593aaadc_8.avif' },
    { name: 'thorn_', followers: '5M', img: 'https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fc345b0e0a98194250_6.avif' },
    { name: 'sola.ugc', followers: '1M', img: 'https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fce6e659e05f5a34a2_7.jpg' },
    { name: 'dani_', followers: '50K', img: 'https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0422af73338ab3794fb0cc_avatar-05.jpg' },
  ];

  return (
    <section className={styles.heroSection}>
      <div className="container">
        {/* Caption & Title */}
        <div className={styles.heroHeader}>
          <div className="pill-badge">
            <span className="pill-badge-dot"></span>
            UGC · Short form · Creator marketing
          </div>

          <h1 className={styles.title}>
            Content That <br />
            St<span className={styles.titleCircle}></span>ps the{' '}
            <span className={styles.highlightBadge}>scroll.</span>
          </h1>

          <p className={styles.description}>
            We turn real people into your best sales team. Authentic UGC that stops the scroll, earns
            trust, and converts built on data, not gut feelings.
          </p>

          <div className={styles.ctaGroup}>
            <Link href="#contact" className="btn-primary">
              <span>Start growing</span>
              <ArrowRight size={16} />
            </Link>
            <Link href="#results" className="btn-secondary">
              <span>View Case Studies</span>
            </Link>
          </div>
        </div>

        {/* Media / Video Showcase Row */}
        <div className={styles.showcaseGrid}>
          {/* Video Reel 1 */}
          <div className={styles.videoCard}>
            <div className={styles.videoWrapper}>
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a113163252550526230459b_hero-01_poster.0000000.jpg"
                className={styles.videoElement}
              >
                <source
                  src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a113163252550526230459b_hero-01_mp4.mp4"
                  type="video/mp4"
                />
              </video>
              <div className={styles.videoOverlay} />
            </div>

            <div className={styles.creatorBadge}>
              <img
                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a04108de09d4a92c3a1ced6_1.avif"
                alt="mila.creates"
                className={styles.creatorAvatar}
              />
              <span className={styles.creatorName}>mila.creates</span>
              <CheckCircle2 size={14} className={styles.verifiedIcon} />
            </div>
          </div>

          {/* Video Reel 2 */}
          <div className={styles.videoCard}>
            <div className={styles.videoWrapper}>
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a11319549ee8658827a99a3_hero-02_poster.0000000.jpg"
                className={styles.videoElement}
              >
                <source
                  src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a11319549ee8658827a99a3_hero-02_mp4.mp4"
                  type="video/mp4"
                />
              </video>
              <div className={styles.videoOverlay} />
            </div>

            <div className={styles.creatorBadge}>
              <img
                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a07fcabeecfdc9128035299_avatar15.jpg"
                alt="nikoflips"
                className={styles.creatorAvatar}
              />
              <span className={styles.creatorName}>nikoflips</span>
              <CheckCircle2 size={14} className={styles.verifiedIcon} />
            </div>
          </div>

          {/* Center Creator Stats & Marquee Card */}
          <div className={styles.creatorNetworkCard}>
            <div className={styles.networkHeader}>
              <div className={styles.avatarStack}>
                <img src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fb1155356dd26395f2_2.avif" alt="Creator" />
                <img src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fbe8e0c49f7a0ef006_3.avif" alt="Creator" />
                <img src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fb5829c7a24d41fcec_4.avif" alt="Creator" />
                <img src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fc46f7e5946b547208_5.avif" alt="Creator" />
              </div>
              <p className={styles.networkSubtext}>Creators we work with</p>
              <h2 className={styles.networkCount}>1250+</h2>
            </div>

            {/* Marquee Row 1 */}
            <div className="marquee-container" style={{ margin: '14px 0 8px' }}>
              <div className="marquee-track-left">
                {[...marqueeCreatorsRow1, ...marqueeCreatorsRow1, ...marqueeCreatorsRow1].map((c, i) => (
                  <div key={i} className={styles.marqueeBadge}>
                    <img src={c.img} alt={c.name} className={styles.marqueeAvatar} />
                    <span className={styles.marqueeName}>{c.name}</span>
                    <CheckCircle2 size={13} className={styles.verifiedIcon} />
                    <span className={styles.marqueeFollowers}>{c.followers}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Marquee Row 2 */}
            <div className="marquee-container">
              <div className="marquee-track-right">
                {[...marqueeCreatorsRow2, ...marqueeCreatorsRow2, ...marqueeCreatorsRow2].map((c, i) => (
                  <div key={i} className={styles.marqueeBadge}>
                    <img src={c.img} alt={c.name} className={styles.marqueeAvatar} />
                    <span className={styles.marqueeName}>{c.name}</span>
                    <CheckCircle2 size={13} className={styles.verifiedIcon} />
                    <span className={styles.marqueeFollowers}>{c.followers}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Video Reel 3 */}
          <div className={styles.videoCard}>
            <div className={styles.videoWrapper}>
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a1131e32b90b09311d025ac_hero-03_poster.0000000.jpg"
                className={styles.videoElement}
              >
                <source
                  src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a1131e32b90b09311d025ac_hero-03_mp4.mp4"
                  type="video/mp4"
                />
              </video>
              <div className={styles.videoOverlay} />
            </div>

            <div className={styles.creatorBadge}>
              <img
                src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fcc3e1aad9593aaadc_8.avif"
                alt="cade.reels"
                className={styles.creatorAvatar}
              />
              <span className={styles.creatorName}>cade.reels</span>
              <CheckCircle2 size={14} className={styles.verifiedIcon} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
