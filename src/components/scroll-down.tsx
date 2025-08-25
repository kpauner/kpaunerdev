"use client"
import Lottie from "lottie-react"
import animationData from "../../public/scrolldown.json"
import { cn } from "@/lib/utils"

export default function ScrollDown({ className }: { className?: string }) {
  return <Lottie className={cn("size-10", className)} animationData={animationData} loop={true} />
}
