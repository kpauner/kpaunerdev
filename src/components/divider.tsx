"use client"

import React from "react"
import { motion } from "motion/react"
import { Separator } from "@/components/ui/separator"
import Heading from "@/components/heading"
import { cn } from "@/lib/utils"

type DividerProps = {
  title: string
  description?: string
  className?: string
  descriptionClassName?: string
}

export default function Divider({
  title,
  description,
  className,
  descriptionClassName,
}: DividerProps) {
  return (
    <div className={cn(className)}>
      <motion.div
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Separator className="mb-8 mt-16 h-1" />
      </motion.div>
      <motion.div
        className="flex justify-between gap-16 pb-16"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: 0.6,
        }}
      >
        <h2 className="font-sans text-4xl font-extrabold">{title}</h2>
        {description && (
          <p className={cn("whitespace-pre-line text-right", descriptionClassName)}>
            {description}
          </p>
        )}
      </motion.div>
    </div>
  )
}
