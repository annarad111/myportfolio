import { experiences } from '@/lib/data'
import styles from './AboutTimeline.module.scss'
import Stars from '../animations/Stars'

export default function AboutTimeline() {
  return (
    <section className={styles.section}>
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
      <span className={styles.label}>04 — Experience</span>

      <div className={styles.timeline}>
        {experiences.map((exp, i) => (
          <div key={i} className={`${styles.item} gsap-reveal`}>
            <div className={styles.meta}>
              <span className={styles.period}>{exp.period}</span>
              <div className={styles.dot} />
            </div>
            <div className={styles.content}>
              <h3 className={styles.position}>{exp.position}</h3>
              <span className={styles.company}>{exp.company}</span>
              <ul className={styles.desc}>
                {exp.description.slice(0, 2).map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
              <div className={styles.stack}>
                {exp.stack.map(s => (
                  <span key={s} className={styles.tag}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <span className={styles.index}>04</span>
    </section>
  )
}