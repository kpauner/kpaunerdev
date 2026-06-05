import { cn } from "@/lib/utils"

/** Single source of truth for dashboard horizontal padding. */
export const dashboardPadding = "px-4 lg:px-6"

type DashboardContentProps = {
  children: React.ReactNode
  className?: string
}

export function DashboardContent({ children, className }: DashboardContentProps) {
  return (
    <div className={cn("flex flex-1 flex-col", className)}>
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div
          className={cn(
            "flex flex-col gap-4 py-4 md:gap-6 md:py-6",
            dashboardPadding,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
