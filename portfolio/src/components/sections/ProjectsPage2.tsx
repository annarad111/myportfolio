'use client'

import { projects, roleLabels } from '@/lib/data'
import styles from './ProjectsPage2.module.scss'
import Stars from '../animations/Stars'

const otherProjects = projects.filter(p => p.role !== 'developer')

export default function ProjectsPage2() {
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
      <div className={styles.header}>
        <span className={styles.label}>02 — Work / PM · Entrepreneur · Artist</span>
        <h2 className={styles.title}>
          Things I've<br />
          <em>led & created</em>
        </h2>
      </div>

      <div className={styles.grid}>
        {otherProjects.map((project, i) => (
          <article key={project.id} className={`${styles.card} gsap-reveal`}>
            <span className={styles.cardNumber}>{String(i + 1).padStart(2, '0')}</span>
            <span className={`${styles.roleTag} ${styles[project.role]}`}>
              {roleLabels[project.role]}
            </span>
            <div className={styles.cardContent}>
              <div className={styles.cardTop}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <span className={styles.cardYear}>{project.year}</span>
              </div>
              <p className={styles.cardDesc}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.cardLinks}>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                    Live ↗
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <span className={styles.index}>02 / 05</span>
    </section>
  )
}