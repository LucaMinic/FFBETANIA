import { motion } from 'motion/react'
import type { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  immediate?: boolean
}

const directionOffset = {
  up: { y: 72, scale: 0.96 },
  down: { y: -72, scale: 0.96 },
  left: { x: 72, scale: 0.96 },
  right: { x: -72, scale: 0.96 },
}

export function AnimatedSection({ children, delay = 0, direction = 'up', immediate = false }: AnimatedSectionProps) {
  const revealProps = immediate
    ? { animate: { opacity: 1, y: 0, x: 0, scale: 1 } }
    : { whileInView: { opacity: 1, y: 0, x: 0, scale: 1 }, viewport: { once: true, margin: '-100px' } }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      {...revealProps}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedImage({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.82, rotate: -1.5 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
