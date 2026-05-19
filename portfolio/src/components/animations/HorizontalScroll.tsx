"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  children: React.ReactNode;
}

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const sections = gsap.utils.toArray<HTMLElement>(".h-section");

    const getTotal = () => sections.length * window.innerWidth;

    const ctx = gsap.context(() => {
      const mainTween = gsap.to(track, {
        x: () => -(getTotal() - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${getTotal() - window.innerWidth}`,
          invalidateOnRefresh: true,
        },
      });

      sections.forEach((section) => {
        gsap.fromTo(
          section.querySelectorAll(".gsap-reveal"),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              containerAnimation: mainTween,
              start: "left 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, container);

    // Recalculează la resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="h-container">
      <div ref={trackRef} className="h-track">
        {children}
      </div>
    </div>
  );
}
