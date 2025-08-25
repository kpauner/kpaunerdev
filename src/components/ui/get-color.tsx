import { cn } from "@/lib/utils"

type GetColorProps = {
  variant?:
    | "background"
    | "primary"
    | "secondary"
    | "destructive"
    | "muted"
    | "accent"
    | "popover"
    | "card"
    | "ring"
    | "background"
    | "foreground"
  size?: "xl" | "lg" | "md" | "sm" | "xs"

  className?: string
}

export function GetColor({ variant }: GetColorProps) {
  return (
    <div
      className={cn(
        "my-4 rounded-lg  p-4",
        variant === "background" && "border border-foreground/10 bg-background",
        variant === "primary" && "bg-primary",
        variant === "secondary" && "bg-secondary",
        variant === "destructive" && "bg-destructive",
        variant === "muted" && "bg-muted",
        variant === "accent" && "bg-accent",
        variant === "popover" && "bg-popover",
        variant === "card" && "bg-card",
        variant === "ring" && "bg-ring",
      )}
    >
      <p
        className={cn(
          "block font-bold uppercase italic",
          variant === "background" && "text-foreground",
          variant === "primary" && "text-primary-foreground",
          variant === "secondary" && "text-secondary-foreground",
          variant === "destructive" && "text-destructive-foreground",
          variant === "muted" && "text-muted-foreground",
          variant === "accent" && "text-accent-foreground",
          variant === "popover" && "text-popover-foreground",
          variant === "card" && "text-card-foreground",
          variant === "ring" && "text-ring-foreground",
        )}
      >
        {variant}
      </p>
    </div>
  )
}
