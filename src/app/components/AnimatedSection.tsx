import { motion } from 'motion/react'
import type { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  immediate?: boolean
}

const directionOffset = {
  up: { y: 60 },
  down: { y: -60 },
  left: { x: 60 },
  right: { x: -60 },
}

export function AnimatedSection({ children, delay = 0, direction = 'up', immediate = false }: AnimatedSectionProps) {
  const revealProps = immediate
    ? { animate: { opacity: 1, y: 0, x: 0 } }
    : { whileInView: { opacity: 1, y: 0, x: 0 }, viewport: { once: true, margin: '-100px' } }

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      {...revealProps}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedImage({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
