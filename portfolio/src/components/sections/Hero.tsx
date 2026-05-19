"use client";

import { useEffect, useRef } from "react";
import ParallaxLayer from "@/components/animations/ParallaxLayer";
import styles from "./Hero.module.scss";
import Image from "next/image";
import Stars from "../animations/Stars";

const roles = [
  "Frontend Developer",
  "Product Manager",
  "Entrepreneur",
  "Artist",
];

export default function Hero() {
  const rolesRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = rolesRef.current;
    if (!el) return;

    let index = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      const current = roles[index];

      if (!deleting) {
        el.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          deleting = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        el.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          index = (index + 1) % roles.length;
        }
      }

      timeout = setTimeout(type, deleting ? 45 : 90);
    };

    timeout = setTimeout(type, 600);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".hero-reveal");
    elements.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = "0";
      htmlEl.style.transform = "translateY(30px)";

      setTimeout(
        () => {
          htmlEl.style.transition = "opacity 0.8s ease, transform 0.8s ease";
          htmlEl.style.opacity = "1";
          htmlEl.style.transform = "translateY(0)";
        },
        300 + i * 150,
      );
    });
  }, []);

  return (
    <section className={styles.hero}>
      <Stars
        color="terracotta"
        stars={[
          {
            size: 32,
            top: "10%",
            left: "5%",
            opacity: 0.6,
            animationDuration: "6s",
          },
          {
            size: 32,
            top: "50%",
            left: "40%",
            opacity: 0.6,
            animationDuration: "6s",
          },
          {
            size: 22,
            top: "70%",
            left: "60%",
            opacity: 0.2,
            animationDuration: "6s",
          },
          {
            size: 42,
            top: "20%",
            left: "20%",
            opacity: 0.2,
            animationDuration: "6s",
          },
          {
            size: 22,
            top: "10%",
            left: "35%",
            opacity: 0.4,
            animationDuration: "6s",
          },
          {
            size: 20,
            top: "60%",
            left: "2%",
            opacity: 0.3,
            animationDuration: "8s",
            animationDelay: "1s",
          },
          {
            size: 14,
            top: "30%",
            right: "10%",
            opacity: 0.4,
            animationDuration: "5s",
            animationDelay: "2s",
          },
          {
            size: 24,
            bottom: "15%",
            right: "5%",
            opacity: 0.5,
            animationDuration: "9s",
          },
        ]}
      />
      <div className={styles.line} />

      <div className={styles.content}>
        <p className={`${styles.greeting} hero-reveal`}>
          <span className={styles.dot} />
          Available for work
        </p>

        <h1 className={`${styles.name} hero-reveal`}>
          Ana-Maria
          <br />
          <em>Rădulescu</em>
        </h1>

        <div className={`${styles.roleRow} hero-reveal`}>
          <span className={styles.roleStatic}>I am </span>
          <span ref={rolesRef} className={styles.roleTyped} />
          <span className={styles.cursor}>|</span>
        </div>

        <p className={`${styles.bio} hero-reveal`}>
          Engineering products from idea to deployment.
          <br />
          Developer by craft, Product thinker by nature.
          <br />
          Always an artist at heart.
        </p>

        <div className={`${styles.actions} hero-reveal`}>
          <button
            className={styles.btnPrimary}
            onClick={() =>
              window.scrollTo({
                top: (document.body.scrollHeight - window.innerHeight) / 6,
                behavior: "smooth",
              })
            }
          >
            View my work
          </button>
          <button
            className={styles.btnSecondary}
            onClick={() =>
              window.scrollTo({
                top:
                  ((document.body.scrollHeight - window.innerHeight) / 6) * 4,
                behavior: "smooth",
              })
            }
          >
            About me
          </button>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>scroll</span>
        <span className={styles.scrollLine} />
      </div>

      <span className={styles.index}>01</span>
      <div className={`${styles.photoWrapper} hero-reveal`}>
        <Image
          src="/ana.jpeg"
          alt="Ana-Maria Rădulescu"
          width={320}
          height={320}
          className={styles.photo}
          priority
        />
      </div>
      <Stars
        color="pink"
        stars={[
          {
            size: 62,
            top: "60%",
            left: "75%",
            opacity: 0.6,
            animationDuration: "6s",
            zIndex: 10,
          },
          {
            size: 42,
            top: "2%",
            left: "88%",
            opacity: 0.6,
            animationDuration: "6s",
            zIndex: 10,
          },
          {
            size: 32,
            top: "50%",
            left: "40%",
            opacity: 0.6,
            animationDuration: "6s",
          },
        ]}
      />
    </section>
  );
}
