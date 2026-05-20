'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface HorizontalScrollProps {
  children: React.ReactNode
}

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return

    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return

    const sections = gsap.utils.toArray<HTMLElement>('.h-section')
    const getTotal = () => sections.length * window.innerWidth

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement
          if (entry.intersectionRatio < 0.99) {
            el.style.overflowY = 'hidden'
            el.scrollTop = 0
          } else {
            el.style.overflowY = 'auto'
          }
        })
      },
      { threshold: [0.99], root: null }
    )

    sections.forEach((section) => observer.observe(section))

    const ctx = gsap.context(() => {
      const mainTween = gsap.to(track, {
        x: () => -(getTotal() - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${getTotal() - window.innerWidth}`,
          invalidateOnRefresh: true,
        },
      })

      sections.forEach((section) => {
        gsap.fromTo(
          section.querySelectorAll('.gsap-reveal'),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              containerAnimation: mainTween,
              start: 'left 80%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, container)

    const handleResize = () => ScrollTrigger.refresh()
    window.addEventListener('resize', handleResize)

    return () => {
      ctx.revert()
      observer.disconnect()
      window.removeEventListener('resize', handleResize)
    }
  }, [isMobile])

  // Mobile — vertical simplu
  if (isMobile) {
    return (
      <div className="mobile-container">
        {children}
      </div>
    )
  }

  // Desktop — horizontal GSAP
  return (
    <div ref={containerRef} className="h-container">
      <div ref={trackRef} className="h-track">
        {children}
      </div>
    </div>
  )
}