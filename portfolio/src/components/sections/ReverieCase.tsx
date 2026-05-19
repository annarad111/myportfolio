import styles from "./ReverieCase.module.scss";
import Stars from "@/components/animations/Stars";

export default function ReverieCase() {
  return (
    <section className={styles.section} id="product">
      <Stars
        color="pink"
        stars={[
          {
            size: 28,
            top: "8%",
            right: "12%",
            opacity: 0.5,
            animationDuration: "7s",
          },
          {
            size: 16,
            bottom: "25%",
            right: "6%",
            opacity: 0.3,
            animationDuration: "9s",
            animationDelay: "1s",
          },
          {
            size: 20,
            top: "50%",
            left: "3%",
            opacity: 0.25,
            animationDuration: "8s",
            animationDelay: "2s",
          },
        ]}
      />

      <div className={styles.content}>
        <div className={styles.left}>
          <span className={styles.label}>PM Case Study</span>
          <h2 className={styles.title}>
            Reverie
            <br />
            <em>Hand-Painted Bows</em>
          </h2>
          <p className={styles.subtitle}>
            A full product plan for an artisan accessories brand — from zero to
            market strategy.
          </p>
          <a
            href="https://canva.link/reveriebowsplan"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewBtn}
          >
            View full product plan ↗
          </a>

          <div className={styles.highlights}>
            <div className={styles.highlight}>
              <span className={styles.highlightNumber}>2</span>
              <span className={styles.highlightLabel}>
                Target markets
                <br />
                RO + EU/Etsy
              </span>
            </div>
            <div className={styles.highlight}>
              <span className={styles.highlightNumber}>3</span>
              <span className={styles.highlightLabel}>
                Growth phases
                <br />
                Foundation → Scale
              </span>
            </div>
            <div className={styles.highlight}>
              <span className={styles.highlightNumber}>5+</span>
              <span className={styles.highlightLabel}>
                Product SKUs
                <br />
                with pricing strategy
              </span>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.modules}>
            {[
              {
                num: "01",
                title: "Product Overview",
                desc: "Hand-painted linen & muslin hair accessories. 5 SKU types, freehand painting, natural materials.",
              },
              {
                num: "02",
                title: "Market Analysis",
                desc: "Dual market strategy: Romanian domestic + EU/Etsy. Competitive landscape, pricing sensitivity, discovery channels.",
              },
              {
                num: "03",
                title: "Pricing Strategy",
                desc: "Bottom-up cost analysis. Romanian market 35–150 RON, Etsy market 10–45 EUR. Bundle pricing for higher AOV.",
              },
              {
                num: "04",
                title: "Operations & Production",
                desc: "5-stage production workflow. Solo capacity planning, quality standards, scaling hypothesis with stencil system.",
              },
              {
                num: "05",
                title: "Go-to-Market",
                desc: "Etsy SEO strategy, Instagram Reels, local markets. 90-day launch plan with weekly milestones.",
              },
              {
                num: "06",
                title: "Risks & Roadmap",
                desc: "3-phase roadmap (Foundation → Growth → Scale). Risk matrix with mitigations for 6 identified risks.",
              },
            ].map((m) => (
              <div key={m.num} className={styles.module}>
                <span className={styles.moduleNum}>{m.num}</span>
                <div>
                  <h4 className={styles.moduleTitle}>{m.title}</h4>
                  <p className={styles.moduleDesc}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <span className={styles.index}>PM</span>
    </section>
  );
}
