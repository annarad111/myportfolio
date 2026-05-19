'use client'

import { useRef, ReactNode, CSSProperties, useEffect } from 'react'

interface ParallaxLayerProps {
  children: ReactNode
  speed?: number
  direction?: 'up' | 'down'
  className?: string
  style?: CSSProperties
}

export default function ParallaxLayer({
  children,
  speed = 0.3,
  direction = 'up',
  className,
  style,
}: ParallaxLayerProps) {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const outer = outerRef.current
    const inner = innerRef.current
    if (!inner || !outer) return

    const handleScroll = () => {
      const rect = outer.getBoundingClientRect()
      const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2
      const factor = direction === 'up' ? -1 : 1
      const offset = centerOffset * speed * factor
      inner.style.transform = `translateY(${offset}px)`
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, direction])

  return (
    <div ref={outerRef} className={className} style={style}>
      <div ref={innerRef} style={{ willChange: 'transform' }}>
        {children}
      </div>
    </div>
  )
}