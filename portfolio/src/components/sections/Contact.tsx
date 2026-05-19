import styles from './Contact.module.scss'

export default function Contact() {
  return (
    <section className={styles.section} id="contact">

      {/* Watermark */}
      <span className={styles.watermark}>hello</span>

      {/* Content */}
      <div className={styles.content}>
        <span className={styles.label}>05 — Contact</span>

        <h2 className={`${styles.title} gsap-reveal`}>
          Let's build<br />
          <em>something together</em>
        </h2>

        <p className={`${styles.subtitle} gsap-reveal`}>
          Open to frontend roles, product management roles,<br /> 
          product collaborations
          and interesting problems worth solving.
        </p>

        <div className={`${styles.actions} gsap-reveal`}>
          <a
            href="mailto:radulescuana111@gmail.com"
            className={styles.emailBtn}
          >
            radulescuana111@gmail.com ↗
          </a>
        </div>

        <div className={`${styles.links} gsap-reveal`}>
          <a
            href="https://linkedin.com/in/radulescu-ana"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/annarad111"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <span className={styles.footerText}>
          Ana-Maria Rădulescu © 2026
        </span>
        <span className={styles.footerText}>
          Built with Next.js · TypeScript · SASS
        </span>
      </div>

      <span className={styles.index}>05</span>

    </section>
  )
}