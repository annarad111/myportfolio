'use client'

import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import styles from './CursorCustom.module.scss'

export default function CursorCustom() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)

  const followerSpring = { damping: 15, stiffness: 150, mass: 0.8 }
  const followerX = useSpring(cursorX, followerSpring)
  const followerY = useSpring(cursorY, followerSpring)

  const isHovering = useRef(false)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleHoverStart = () => {
      isHovering.current = true
      document.documentElement.setAttribute('data-hovering', 'true')
    }

    const handleHoverEnd = () => {
      isHovering.current = false
      document.documentElement.removeAttribute('data-hovering')
    }

    const interactives = document.querySelectorAll('a, button, [data-cursor]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart)
      el.addEventListener('mouseleave', handleHoverEnd)
    })

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart)
        el.removeEventListener('mouseleave', handleHoverEnd)
      })
    }
  }, [cursorX, cursorY])

  return (
    <>
      <motion.div
        className={styles.cursor}
        style={{ x: springX, y: springY }}
      />
      <motion.div
        className={styles.follower}
        style={{ x: followerX, y: followerY }}
      />
    </>
  )
}