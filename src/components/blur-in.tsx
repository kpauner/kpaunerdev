"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
import { useAnimationPlayedStore } from "@/hooks/store"

interface BlurInProps {
  word: string
  className?: string
  variant?: {
    hidden: { filter: string; opacity: number }
    visible: { filter: string; opacity: number }
  }
  duration?: number
  delay?: number
  waitForLoader?: boolean // New prop to control behavior
}

const BlurIn = ({
  word,
  className,
  variant,
  duration = 1,
  delay = 0,
  waitForLoader = false, // Default to instant animation
}: BlurInProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(!waitForLoader) // Start instantly if not waiting for loader
  const played = useAnimationPlayedStore((state) => state.played)

  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
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
        <motion.h1
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration, delay }}
          variants={combinedVariants}
          className={cn(className, "")}
        >
          {word}
        </motion.h1>
      )}
    </AnimatePresence>
  )
}

export default BlurIn
