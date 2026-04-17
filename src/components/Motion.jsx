import { motion, useReducedMotion } from 'framer-motion'

export const FadeUp = ({ children, delay = 0 }) => {
  const prefersReducedMotion = useReducedMotion()
  const initial = prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }
  const animate = prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: prefersReducedMotion ? 0.2 : 0.5, delay: prefersReducedMotion ? 0 : delay }}
    >
      {children}
    </motion.div>
  )
}
