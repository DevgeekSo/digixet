"use client";

import React, { useState, useRef } from "react";
import { Play, Volume2, VolumeX, Maximize2, X } from "lucide-react";

interface VideoItem {
  id: number;
  title: string;
  brand: string;
  category: string;
  creator: string;
  avatar: string;
  videoSrc: string;
  metrics: string;
  roas: string;
  description: string;
}

const portfolioVideos: VideoItem[] = [
  {
    id: 1,
    title: "Hydration Barrier Serum Hook",
    brand: "Oralyn Skincare",
    category: "Beauty & Skincare",
    creator: "@mila.creates",
    avatar: "https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a04108de09d4a92c3a1ced6_1.avif",
    videoSrc: "/sample/sample-1.mp4",
    metrics: "1.8M Views",
    roas: "4.8x ROAS",
    description: "Authentic texture showcase and 3-second hook that lifted ad CTR by 240% in clean skincare.",
  },
  {
    id: 2,
    title: "Oversized Streetwear Styling",
    brand: "Duskline Apparel",
    category: "Fashion & Apparel",
    creator: "@finnorion_",
    avatar: "https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fb1155356dd26395f2_2.avif",
    videoSrc: "/sample/sample-2.mp4",
    metrics: "920K Views",
    roas: "+285% Growth",
    description: "Fast-cut transition reel highlighting fabric drape and street aesthetic for Gen Z shoppers.",
  },
  {
    id: 3,
    title: "Clean Energy Problem-Solution",
    brand: "Mintwave Drinks",
    category: "Fitness & Nutrition",
    creator: "@axelrowe.co",
    avatar: "https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0aae9bb5f92627c306e910_avatar24.jpg.png.jpg",
    videoSrc: "/sample/sample-3.mp4",
    metrics: "2.4M Views",
    roas: "5.2x ROAS",
    description: "Daily routine problem-to-solution narrative demonstrating crash-free focus and sustained energy.",
  },
  {
    id: 4,
    title: "Glowing Skin Morning Ritual",
    brand: "Glow Botanics",
    category: "Beauty & Skincare",
    creator: "@cade.reels",
    avatar: "https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fbe8e0c49f7a0ef006_3.avif",
    videoSrc: "/sample/sample-4.mp4",
    metrics: "1.1M Views",
    roas: "+140% Orders",
    description: "ASMR unboxing and tactile morning application driving high save rates on TikTok and Reels.",
  },
  {
    id: 5,
    title: "Fall Layering Lookbook",
    brand: "Velour Co.",
    category: "Fashion & Apparel",
    creator: "@yara.ugc",
    avatar: "https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fb5829c7a24d41fcec_4.avif",
    videoSrc: "/sample/sample-5.mp4",
    metrics: "3.2M Views",
    roas: "6.1x ROAS",
    description: "High-energy styling lookbook turning real creator curation into top-grossing Meta ad creative.",
  },
  {
    id: 6,
    title: "Daily Electrolyte Boost",
    brand: "Habitline",
    category: "Food & Beverage",
    creator: "@nikoflips",
    avatar: "https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fc46f7e5946b547208_5.avif",
    videoSrc: "/sample/sample-15.mp4",
    metrics: "1.5M Views",
    roas: "+83% AOV",
    description: "Workout hydration hook with instant visual fizz test that increased direct-to-consumer checkouts.",
  },
  {
    id: 7,
    title: "Workout Set Fit & Squat Test",
    brand: "Apex Athletic",
    category: "Fitness & Nutrition",
    creator: "@sola.ugc",
    avatar: "https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fc345b0e0a98194250_6.avif",
    videoSrc: "/sample/sample-7.mp4",
    metrics: "890K Views",
    roas: "4.2x ROAS",
    description: "Transparent honest fit check that completely dismantled customer sizing hesitation and returns.",
  },
  {
    id: 8,
    title: "Nighttime Recovery Routine",
    brand: "Lumina Glow",
    category: "Beauty & Skincare",
    creator: "@thorn_",
    avatar: "https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fce6e659e05f5a34a2_7.jpg",
    videoSrc: "/sample/sample-21.mp4",
    metrics: "1.6M Views",
    roas: "+210% CTR",
    description: "Evening calm ambiance paired with real before-and-after results after 14 days of consistent usage.",
  },
  {
    id: 9,
    title: "Coffee to Gym Daily Transition",
    brand: "Waveform Life",
    category: "Food & Beverage",
    creator: "@taravibe_",
    avatar: "https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0418fcc3e1aad9593aaadc_8.avif",
    videoSrc: "/sample/sample-9.mp4",
    metrics: "2.1M Views",
    roas: "5.8x ROAS",
    description: "Day-in-the-life transition format driving organic virality and converting viewers at nearly 6x return.",
  },
];

const categories = [
  "All (9)",
  "Beauty & Skincare",
  "Fashion & Apparel",
  "Fitness & Nutrition",
  "Food & Beverage",
];

export default function PortfolioVideoSection() {
  const [activeCategory, setActiveCategory] = useState("All (9)");
  const [activeModalVideo, setActiveModalVideo] = useState<VideoItem | null>(null);
  const [mutedStates, setMutedStates] = useState<{ [key: number]: boolean }>({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
  });
  const [playingStates, setPlayingStates] = useState<{ [key: number]: boolean }>({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
  });

  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const filteredVideos =
    activeCategory === "All (9)"
      ? portfolioVideos
      : portfolioVideos.filter((v) => v.category === activeCategory);

  const toggleSound = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRefs.current[id];
    if (vid) {
      const newMuted = !vid.muted;
      vid.muted = newMuted;
      setMutedStates((prev) => ({ ...prev, [id]: newMuted }));
    }
  };

  const togglePlay = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRefs.current[id];
    if (vid) {
      if (vid.paused) {
        vid.play();
        setPlayingStates((prev) => ({ ...prev, [id]: true }));
      } else {
        vid.pause();
        setPlayingStates((prev) => ({ ...prev, [id]: false }));
      }
    }
  };

  return (
    <section id="portfolio-videos" className="section-spacing-bottom" style={{ position: "relative", zIndex: 2 }}>
      <div className="container-medium">
        {/* Header Caption */}
        <div className="text-center" style={{ maxWidth: 840, margin: "0 auto 48px auto" }}>

          <h2
            className="text-center"
            style={{
              fontSize: "clamp(32px, 4.2vw, 54px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              margin: "0 0 16px 0",
              textTransform: "uppercase",
            }}
          >
            See Our Portfolio.
          </h2>
          <p
            className="text-center"
            style={{
              fontSize: "clamp(15px, 1.2vw, 18px)",
              color: "#475569",
              maxWidth: 620,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Explore our curated showcase of 9 high-performing short-form UGC videos designed to capture attention in the first 3 seconds and drive real revenue.
          </p>

          {/* Category Filter Pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
              marginTop: 32,
            }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    border: isActive ? "1px solid #111111" : "1px solid rgba(0, 0, 0, 0.08)",
                    backgroundColor: isActive ? "#111111" : "#ffffff",
                    color: isActive ? "#ffffff" : "#334155",
                    padding: "9px 18px",
                    borderRadius: 9999,
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    boxShadow: isActive
                      ? "0 8px 20px rgba(0,0,0,0.12)"
                      : "0 2px 6px rgba(0,0,0,0.03)",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 9 Video Grid: 3 columns x 3 rows */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 28,
            width: "100%",
          }}
        >
          {filteredVideos.map((item) => {
            const isMuted = mutedStates[item.id] ?? true;
            const isPlaying = playingStates[item.id] ?? true;

            return (
              <div
                key={item.id}
                style={{
                  position: "relative",
                  borderRadius: 28,
                  overflow: "hidden",
                  backgroundColor: "#0f172a",
                  aspectRatio: "9 / 16",
                  maxHeight: 640,
                  boxShadow: "0 20px 48px -10px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(0, 0, 0, 0.08)",
                  transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease",
                  cursor: "pointer",
                }}
                onClick={(e) => togglePlay(item.id, e)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.015)";
                  e.currentTarget.style.boxShadow = "0 32px 70px -15px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px) scale(1)";
                  e.currentTarget.style.boxShadow = "0 20px 48px -10px rgba(0, 0, 0, 0.45)";
                }}
              >
                {/* Background Video */}
                <video
                  ref={(el) => {
                    videoRefs.current[item.id] = el;
                  }}
                  src={item.videoSrc}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="metadata"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {/* Top Black Shadow Gradient Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 140,
                    background: "linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.45) 55%, transparent 100%)",
                    pointerEvents: "none",
                    zIndex: 2,
                  }}
                />

                {/* Bottom Black Shadow Gradient Overlay */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 180,
                    background: "linear-gradient(0deg, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.55) 50%, rgba(0, 0, 0, 0.15) 80%, transparent 100%)",
                    pointerEvents: "none",
                    zIndex: 2,
                  }}
                />

                {/* Top Overlay Bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    padding: "16px 16px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    zIndex: 3,
                  }}
                >
                  {/* Creator Pill */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 7,
                      backgroundColor: "rgba(0, 0, 0, 0.55)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.22)",
                      padding: "4px 11px 4px 5px",
                      borderRadius: 9999,
                      color: "#ffffff",
                      boxShadow: "0 4px 14px rgba(0,0,0,0.35)",
                    }}
                  >
                    <img
                      src={item.avatar}
                      alt={item.creator}
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                    <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "-0.01em" }}>
                      {item.creator}
                    </span>
                    <img
                      src="https://cdn.prod.website-files.com/6a018c163190c0cf03857405/6a0411c1e2e21903ddb04cae_VERIFIED.svg"
                      alt="Verified"
                      style={{ width: 13, height: 13 }}
                    />
                  </div>

                  {/* Top Right Controls (Sound & Expand) */}
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <button
                      type="button"
                      onClick={(e) => toggleSound(item.id, e)}
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        backgroundColor: "rgba(0, 0, 0, 0.55)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.25)",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} color="#10b981" />}
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalVideo(item);
                      }}
                      aria-label="Expand video"
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        backgroundColor: "rgba(0, 0, 0, 0.55)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.25)",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <Maximize2 size={14} />
                    </button>
                  </div>
                </div>

                {/* Center Play Indicator (Only when paused) */}
                {!isPlaying && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(0, 0, 0, 0.35)",
                      zIndex: 3,
                    }}
                  >
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                      }}
                    >
                      <Play size={22} color="#0f172a" fill="#0f172a" style={{ marginLeft: 3 }} />
                    </div>
                  </div>
                )}

                {/* Subtle Brand Tag at Bottom */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 16,
                    left: 16,
                    zIndex: 3,
                    backgroundColor: "rgba(0, 0, 0, 0.55)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "rgba(255, 255, 255, 0.95)",
                    fontSize: 12,
                    fontWeight: 600,
                    padding: "5px 12px",
                    borderRadius: 9999,
                    letterSpacing: "-0.01em",
                    boxShadow: "0 4px 14px rgba(0,0,0,0.3)",
                  }}
                >
                  {item.brand}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Video Lightbox Modal */}
      {activeModalVideo && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(10, 15, 29, 0.88)",
            backdropFilter: "blur(18px)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
          onClick={() => setActiveModalVideo(null)}
        >
          <div
            style={{
              position: "relative",
              maxWidth: 420,
              width: "100%",
              aspectRatio: "9 / 16",
              borderRadius: 32,
              overflow: "hidden",
              boxShadow: "0 25px 70px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255,255,255,0.15)",
              backgroundColor: "#000",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={activeModalVideo.videoSrc}
              autoPlay
              loop
              controls
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {/* Close Button */}
            <button
              onClick={() => setActiveModalVideo(null)}
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "rgba(0, 0, 0, 0.65)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
