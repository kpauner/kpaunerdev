import React from "react"
import { Button, ButtonProps } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"

type LoadingButtonProps = {
  className?: string
  loading: boolean
} & ButtonProps

export default function LoadingButton({
  loading,
  children,
  className,
  ...props
}: LoadingButtonProps) {
  return (
    <Button
      {...props}
      disabled={props.disabled || loading}
      className={cn("flex items-center font-bold text-white", className)}
    >
      {loading && <Icons.loader className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  )
}
