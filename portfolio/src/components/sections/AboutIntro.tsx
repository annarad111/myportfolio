import Stars from '../animations/Stars'
import styles from './AboutIntro.module.scss'

const techSkills = [
  'React', 'Next.js', 'TypeScript', 'PixiJS',
  'WebSockets', 'SASS', 'Redux', 'Node.js',
]

const pmSkills = [
  'Product Strategy', 'Roadmapping', 'Market Research',
  'Pricing Strategy', 'User Stories', 'Agile / Scrum',
  'Stakeholder Communication', 'Data-driven Decisions',
]

const creativeSkills = [
  'Visual Arts', 'Adobe Suite', 'Figma',
  'Brand Identity', 'UI/UX Design', 'Hand Painting',
]

export default function AboutIntro() {
  return (
    <section className={styles.section}>
      <Stars color="terracotta" stars={[
        { size: 32, top: '10%', left: '5%', opacity: 0.6, animationDuration: '6s' },
        { size: 20, top: '60%', left: '2%', opacity: 0.3, animationDuration: '8s', animationDelay: '1s' },
        { size: 14, top: '30%', right: '10%', opacity: 0.4, animationDuration: '5s', animationDelay: '2s' },
        { size: 24, bottom: '15%', right: '5%', opacity: 0.5, animationDuration: '9s' },
      ]} />

      <span className={`${styles.label} gsap-reveal`}>03 — About</span>

      <div className={styles.grid}>
        <div className={styles.left}>
          <h2 className={`${styles.title} gsap-reveal`}>
            Engineer &amp; Product thinker,<br />
            <em>builder by nature</em>
          </h2>

          <div className={`${styles.bio} gsap-reveal`}>
            <p>
              I'm Ana-Maria — a Frontend Developer and aspiring Product Manager
              with 4+ years of experience building scalable web applications.
              I bridge the gap between technical execution and product strategy.
            </p>
            <p>
              Previously a founder — I built and ran a fashion business with
              7 employees for 5 years. I bring ownership, user empathy,
              and systems thinking to every product I touch.
            </p>
            <p>
              I hold a Bachelor's in Visual Arts — creativity isn't a hobby,
              it's how I think.
            </p>
          </div>

          {/* Certifications */}
          <div className={`${styles.certBlock} gsap-reveal`}>
            <span className={styles.sectionLabel}>Certifications</span>
            <div className={styles.cert}>
              <div className={styles.certIcon}>✦</div>
              <div>
                <span className={styles.certTitle}>IBM AI Product Manager</span>
                <span className={styles.certSub}>Coursera · 2026</span>
                <a
                  href="https://coursera.org/share/caedf8480edd2a0bd6a63ffa261fdf13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.certLink}
                >
                  View Certificate ↗
                </a>
              </div>
            </div>
            <div className={styles.cert}>
              <div className={styles.certIcon}>✦</div>
              <div>
                <span className={styles.certTitle}>CPM — AIPMM</span>
                <span className={styles.certSub}>In progress</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          {/* Tech Skills */}
          <div className={`${styles.skillsBlock} gsap-reveal`}>
            <span className={styles.sectionLabel}>Engineering</span>
            <div className={styles.skills}>
              {techSkills.map(skill => (
                <span key={skill} className={`${styles.skill} ${styles.skillTech}`}>{skill}</span>
              ))}
            </div>
          </div>

          {/* PM Skills */}
          <div className={`${styles.skillsBlock} gsap-reveal`}>
            <span className={styles.sectionLabel}>Product</span>
            <div className={styles.skills}>
              {pmSkills.map(skill => (
                <span key={skill} className={`${styles.skill} ${styles.skillPm}`}>{skill}</span>
              ))}
            </div>
          </div>

          {/* Creative Skills */}
          <div className={`${styles.skillsBlock} gsap-reveal`}>
            <span className={styles.sectionLabel}>Creative</span>
            <div className={styles.skills}>
              {creativeSkills.map(skill => (
                <span key={skill} className={`${styles.skill} ${styles.skillCreative}`}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <span className={styles.index}>03</span>
    </section>
  )
}