import styles from './Stars.module.scss'

interface StarItem {
  size: number
  top?: string
  bottom?: string
  left?: string
  right?: string
  opacity?: number
  animationDuration?: string
  animationDelay?: string
  zIndex?: number
}

interface StarsProps {
  color?: 'terracotta' | 'pink'
  stars?: StarItem[]
}

const defaultStars: StarItem[] = [
  { size: 28, top: '12%', right: '15%', opacity: 0.5, animationDuration: '7s' },
  { size: 18, bottom: '20%', right: '8%', opacity: 0.35, animationDuration: '9s', animationDelay: '1s' },
  { size: 14, top: '35%', right: '25%', opacity: 0.25, animationDuration: '6s', animationDelay: '2s' },
]

export default function Stars({ color = 'terracotta', stars = defaultStars }: StarsProps) {
  return (
    <div className={`${styles.stars} ${styles[color]}`}>
      {stars.map((star, i) => (
        <svg
          key={i}
          className={styles.star}
          viewBox="0 0 50 50"
          style={{
            width: star.size,
            height: star.size,
            top: star.top,
            bottom: star.bottom,
            left: star.left,
            right: star.right,
            opacity: star.opacity ?? 0.5,
            animationDuration: star.animationDuration ?? '7s',
            animationDelay: star.animationDelay ?? '0s',
            zIndex: star.zIndex ?? 1,
          }}
        >
          <path d="M25 0 C25 0 27 20 50 25 C50 25 27 30 25 50 C25 50 23 30 0 25 C0 25 23 20 25 0 Z" />
        </svg>
      ))}
    </div>
  )
}