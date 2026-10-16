"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollAnimationProvider() {
  const pathname = usePathname();

  // 1. Lenis Smooth Momentum Scrolling + GSAP ScrollTrigger Sync
  useEffect(() => {
    let lenisInstance: any = null;
    let rafId: number;

    const startLenis = (LenisClass: any) => {
      try {
        lenisInstance = new LenisClass({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          smoothWheel: true,
        });

        // Connect Lenis to GSAP ScrollTrigger
        lenisInstance.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => {
          lenisInstance?.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        const raf = (time: number) => {
          lenisInstance?.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      } catch (err) {
        console.warn("Lenis scroll init:", err);
      }
    };

    if (typeof window !== "undefined") {
      if ((window as any).Lenis) {
        startLenis((window as any).Lenis);
      } else {
        import("lenis")
          .then((mod) => {
            const LenisClass = mod.default || mod;
            startLenis(LenisClass);
          })
          .catch(() => {});
      }
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisInstance?.destroy) lenisInstance.destroy();
    };
  }, []);

  // 2. Webflow Signature Scroll & Load Reveal Animations + GSAP ScrollTrigger Timelines
  useEffect(() => {
    let ctx: gsap.Context;

    const runAnimations = () => {
      const windowHeight = window.innerHeight;

      // A. Animate Hero elements [data="show"] on initial load with natural stagger
      const heroItems = Array.from(
        document.querySelectorAll<HTMLElement>('[data="show"]'),
      );
      heroItems.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight * 0.9) {
          el.style.transitionDelay = `${Math.min(index * 0.14, 0.7)}s`;
          setTimeout(() => {
            el.classList.add("is-inview");
          }, 60);
        }
      });

      // B. Section-level scroll triggers for [data-scroll="load"]
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>('[data-scroll="load"]'),
      );

      const sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sec = entry.target as HTMLElement;
              sec.classList.add("is-inview");

              const items = Array.from(
                sec.querySelectorAll<HTMLElement>('[scroll-item="show"]'),
              );
              items.forEach((item, idx) => {
                item.style.transitionDelay = `${Math.min(idx * 0.15, 0.65)}s`;
                item.classList.add("is-inview");
              });

              sectionObserver.unobserve(sec);
            }
          });
        },
        {
          rootMargin: "0px 0px -10% 0px",
          threshold: 0.08,
        },
      );

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < windowHeight * 0.75) {
          sec.classList.add("is-inview");
          const items = Array.from(
            sec.querySelectorAll<HTMLElement>('[scroll-item="show"]'),
          );
          items.forEach((item, idx) => {
            item.style.transitionDelay = `${Math.min(idx * 0.12, 0.5)}s`;
            item.classList.add("is-inview");
          });
        } else {
          sectionObserver.observe(sec);
        }
      });

      // C. Standalone [scroll-item="show"] and [data="show"] outside of sections
      const standaloneElements = Array.from(
        document.querySelectorAll<HTMLElement>(
          ':not([data-scroll="load"]) > [scroll-item="show"], :not([data-scroll="load"]) [data="show"]',
        ),
      );

      const standaloneObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              target.classList.add("is-inview");
              standaloneObserver.unobserve(target);
            }
          });
        },
        {
          rootMargin: "0px 0px -8% 0px",
          threshold: 0.1,
        },
      );

      standaloneElements.forEach((el) => {
        if (!el.classList.contains("is-inview")) {
          const rect = el.getBoundingClientRect();
          if (rect.top < windowHeight * 0.85) {
            el.classList.add("is-inview");
          } else {
            standaloneObserver.observe(el);
          }
        }
      });

      // =========================================================================
      // D. GSAP ScrollTrigger Timelines (Webflow Signature Interactions)
      // =========================================================================
      ctx = gsap.context(() => {
        // Only run on desktop (width >= 992px) matching Webflow template
        if (window.innerWidth >= 992) {
          // 1. "How we grow you" Cards Stacking & Shuffling Timeline
          const serviceSticky = document.querySelector(".service-sticky");
          const card1 = document.querySelector(".service-card.bg-primary-6");
          const card2 = document.querySelector(".service-card.bg-primary-2");
          const card3 = document.querySelector(".service-card.bg-primary-4");
          const card4 = document.querySelector(".service-card.bg-primary-3");

          if (serviceSticky && card1 && card2 && card3 && card4) {
            const serviceTl = gsap.timeline({
              scrollTrigger: {
                trigger: serviceSticky,
                start: "top 70px",
                end: "bottom bottom",
                scrub: 0.8,
              },
            });

            serviceTl
              .to(
                card1,
                { x: -259, scale: 0.55, ease: "power2.inOut", duration: 0.25 },
                0,
              )
              .to(
                card2,
                { x: -168, scale: 0.65, ease: "power2.inOut", duration: 0.25 },
                0.25,
              )
              .to(
                card3,
                { x: -71, scale: 0.75, ease: "power2.inOut", duration: 0.25 },
                0.5,
              )
              .to(
                card4,
                { x: 30, scale: 0.85, ease: "power2.inOut", duration: 0.25 },
                0.75,
              );
          }

          // 2. "Four steps from brief to content that converts." Section
          const stepSection = document.querySelector(".step-section");
          const stepInfo = document.querySelector(".step-info");
          const stepBlur = document.querySelector(".step-blur");

          if (stepSection && stepInfo && stepBlur) {
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: stepSection,
                  start: "top top",
                  end: "center center",
                  scrub: 0.8,
                },
              })
              .to(stepBlur, { opacity: 1, duration: 0.5, ease: "none" }, 0)
              .to(stepInfo, { opacity: 0, duration: 0.5, ease: "none" }, 0);
          }

          // 3. Staggered Word Pop-In for Step Title
          const stepWords = Array.from(
            document.querySelectorAll(".step-title-wrap > *"),
          );
          if (stepWords.length > 0) {
            gsap.from(stepWords, {
              scrollTrigger: {
                trigger: ".step-top",
                start: "top 80%",
                toggleActions: "play none none none",
              },
              y: 35,
              opacity: 0,
              stagger: 0.08,
              duration: 0.65,
              ease: "power3.out",
            });
          }
        }
      });

      return () => {
        sectionObserver.disconnect();
        standaloneObserver.disconnect();
        ctx?.revert();
      };
    };

    const timer = setTimeout(runAnimations, 80);
    return () => {
      clearTimeout(timer);
      ctx?.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [pathname]);

  return null;
}

