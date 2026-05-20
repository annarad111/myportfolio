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

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
    }

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.12
      followerY += (mouseY - followerY) * 0.12
      follower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`
      requestAnimationFrame(animateFollower)
    }

    const handleHoverStart = () => {
      document.documentElement.setAttribute('data-hovering', 'true')
    }

    const handleHoverEnd = () => {
      document.documentElement.removeAttribute('data-hovering')
    }

    const updateInteractives = () => {
      const interactives = document.querySelectorAll('a, button, [data-cursor]')
      interactives.forEach(el => {
        el.addEventListener('mouseenter', handleHoverStart)
        el.addEventListener('mouseleave', handleHoverEnd)
      })
    }

    window.addEventListener('mousemove', moveCursor, { passive: true })
    updateInteractives()
    const raf = requestAnimationFrame(animateFollower)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className={styles.cursor} />
      <div ref={followerRef} className={styles.follower} />
    </>
  )
}