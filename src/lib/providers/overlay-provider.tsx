"use client"

import ContactSheet from "@/components/contact-sheet"
import { Toaster } from "@/components/ui/sonner"
import React, { useEffect, useState } from "react"

export default function OverlayProvider({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  return (
    <>
      {children}
      <Toaster />
      <ContactSheet />
    </>
  )
}
