"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"
import { Plus } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  return <button type="button" className={className} ref={ref} {...props} />
})

AccordionTrigger.displayName = "AccordionTrigger"

type AccordionProps = {
  data: {
    question: string
    answer: string
  }[]
  className?: string
}
const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ data, className }: AccordionProps, ref) => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
    return (
      <div ref={ref} className={cn("mx-auto flex flex-col gap-6", className)}>
        {data.map((item, index) => (
          <div key={index} className="rounded-2xl border border-secondary bg-card p-6">
            <AccordionTrigger
              className="flex w-full items-center justify-between text-xl text-card-foreground"
              onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
              aria-expanded={selectedIndex === index}
            >
              {item.question}
              <Plus
                className={cn(
                  "flex-shrink-0 cursor-pointer text-primary",
                  selectedIndex === index && "rotate-45 transition-all duration-300",
                )}
              />
            </AccordionTrigger>
            <AnimatePresence>
              {selectedIndex === index && (
                <motion.div
                  className="overflow-hidden"
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: "1rem" }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                >
                  <p className="mt-4 text-left text-muted-foreground">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    )
  },
)

Accordion.displayName = "Accordion"

export { Accordion, AccordionTrigger }
