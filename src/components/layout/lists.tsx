import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef } from "react"

const listVariants = cva("flex", {
  variants: {
    variant: {
      default: "flex-row gap-1 flex-wrap",
      vertical: "flex-col gap-1",
      horizontal: "flex-row gap-2",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

interface ListProps
  extends React.HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof listVariants> {
  title?: string
  items: string | string[]
}

const List = forwardRef<HTMLUListElement, ListProps>(
  ({ className, items, title, variant, children, ...props }, ref) => {
    const itemsArray = Array.isArray(items) ? items : [items]
    return (
      <div className={cn("flex flex-col gap-2 capitalize", className)}>
        {title && (
          <h3 className="text-sm font-thin uppercase tracking-wider text-foreground">{title}</h3>
        )}
        <ul ref={ref} className={cn(listVariants({ variant }))} {...props}>
          {itemsArray.map((item, index) => (
            <li key={index} className="text-xs text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      </div>
    )
  },
)

List.displayName = "List"

export { List }
