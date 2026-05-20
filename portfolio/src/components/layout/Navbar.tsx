"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";

const navItems = [
  { label: "Work", panelIndex: 1 },
  { label: "Product", panelIndex: 3 },
  { label: "About", panelIndex: 4 },
  { label: "Contact", panelIndex: 6 },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPanel = (panelIndex: number) => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      const sections = document.querySelectorAll(".h-section");
      const target = sections[panelIndex] as HTMLElement;
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      const totalPanels = 7;
      const totalScrollHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPerPanel = totalScrollHeight / (totalPanels - 1);
      const targetScroll = panelIndex * scrollPerPanel;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }

    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <ul className={styles.links}>
        {navItems.map((item) => (
          <li key={item.label}>
            <button
              className={styles.link}
              onClick={() => scrollToPanel(item.panelIndex)}
            >
              {item.label}
            </button>
          </li>
        ))}
        <li>
          <button className={styles.ctahello} onClick={() => scrollToPanel(5)}>
            Say hello
          </button>
        </li>
      </ul>

      <button
        className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
      </button>

      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}
      >
        {navItems.map((item) => (
          <button
            key={item.label}
            className={styles.mobileLink}
            onMouseDown={() => scrollToPanel(item.panelIndex)}
          >
            {item.label}
          </button>
        ))}
        <button
          className={styles.mobileCta}
          onMouseDown={() => scrollToPanel(5)}
        >
          Say hello
        </button>
      </div>
    </nav>
  );
}
