'use client'

import { useEffect, useRef } from 'react'
import styles from './CursorCustom.module.scss'

export default function CursorCustom() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    let mouseX = -100, mouseY = -100
    let followerX = -100, followerY = -100
    let rafId: number

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      cursor.style.left = `${mouseX}px`
      cursor.style.top = `${mouseY}px`

      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      follower.style.left = `${followerX}px`
      follower.style.top = `${followerY}px`

      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', moveCursor, { passive: true })
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className={styles.cursor} />
      <div ref={followerRef} className={styles.follower} />
    </>
  )
}