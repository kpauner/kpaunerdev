"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
import { useAnimationPlayedStore } from "@/hooks/store"

interface RevealUpProps {
  word: string
  className?: string
  variant?: {
    hidden: { y: number }
    visible: { y: number }
  }
  duration?: number
  delay?: number
  waitForLoader?: boolean
  offset?: number // Added this
}

const RevealUp = ({
  word,
  className,
  variant,
  duration = 1,
  delay = 0,
  offset = 0,
  waitForLoader = false,
}: RevealUpProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(!waitForLoader)
  const played = useAnimationPlayedStore((state) => state.played)

  const defaultVariants = {
    hidden: { y: "100%" },
    visible: { y: 0 },
  }
  const combinedVariants = variant || defaultVariants

  useEffect(() => {
    if (waitForLoader && played) {
      setShouldAnimate(true)
    }
  }, [played, waitForLoader])

  return (
    <AnimatePresence>
      {shouldAnimate && (
        <div className="grid overflow-hidden">
          <motion.h1
            initial="hidden"
            animate={{
              ...combinedVariants.visible,
              y: combinedVariants.visible.y + offset,
            }}
            exit="hidden"
            transition={{
              duration,
              delay,
              ease: [0.33, 1, 0.68, 1],
            }}
            variants={combinedVariants}
            className={cn(className, "min-h-0 leading-none")}
          >
            {word}
          </motion.h1>
        </div>
      )}
    </AnimatePresence>
  )
}

export default RevealUp
