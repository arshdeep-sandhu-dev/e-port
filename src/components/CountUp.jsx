import React, { useEffect, useRef, useState } from 'react'
import { Box } from '@mui/material'
import { useReducedMotion } from 'framer-motion'

function parseTarget(str) {
  const match = String(str).match(/^(\D*)([\d.]+)(.*)$/)
  if (!match) return { prefix: '', number: 0, suffix: str, decimals: 0 }
  const numStr = match[2]
  const number = parseFloat(numStr)
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0
  return { prefix: match[1], number, suffix: match[3], decimals }
}

export default function CountUp({ target, duration = 1200, sx }) {
  const { prefix, number, suffix, decimals } = parseTarget(target)
  const prefersReducedMotion = useReducedMotion()
  const [current, setCurrent] = useState(prefersReducedMotion ? number : 0)
  const ref = useRef(null)
  const startedRef = useRef(prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion) {
      setCurrent(number)
      startedRef.current = true
      return
    }
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const start = performance.now()
            const tick = (now) => {
              const elapsed = now - start
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCurrent(number * eased)
              if (progress < 1) requestAnimationFrame(tick)
              else setCurrent(number)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [number, duration, prefersReducedMotion])

  const display = decimals > 0
    ? current.toFixed(decimals)
    : Math.round(current).toString()

  return (
    <Box component="span" ref={ref} sx={sx}>
      {prefix}{display}{suffix}
    </Box>
  )
}
