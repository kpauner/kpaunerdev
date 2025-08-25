import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import { forwardRef } from "react"

type PageLayoutProps = {
  as?: React.ElementType
  title?: string
  description?: string
  size?: "default" | "sm" | "md"
  variant?: "default" | "page" | "post"
  className?: string
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

const pageLayoutVariants = cva("flex grow flex-col mx-auto px-4 md:px-12 py-12", {
  variants: {
    variant: {
      default: "max-w-screen-2xl",
      page: "max-w-screen-xl",
      post: "max-w-screen-lg",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const PageLayout = forwardRef<HTMLDivElement, PageLayoutProps>(
  (
    {
      as: Comp = "main",
      title,
      description,
      size = "md",
      variant = "default",
      className,
      children,
      ...restProps
    },
    ref,
  ) => {
    return (
      <Comp ref={ref} className={cn(pageLayoutVariants({ variant, className }))} {...restProps}>
        <div>
          {(title || description) && (
            <div className="relative flex grow flex-col pb-14">
              {title && (
                <h1 className={cn("text-3xl font-thin uppercase tracking-wider text-foreground ")}>
                  {title}
                </h1>
              )}

              {description && (
                <div className="pt-12">
                  <p className="text-2xl tracking-wide text-foreground">{description}</p>
                </div>
              )}
            </div>
          )}
          <div className="text-foreground md:text-lg">{children}</div>
        </div>
      </Comp>
    )
  },
)

PageLayout.displayName = "PageLayout"

type PageHeaderProps = {
  variant?: "default" | "page"
  className?: string
  children?: React.ReactNode
}

const PageHeader = ({ variant = "default", className, children }: PageHeaderProps) => {
  return <header className={cn(pageLayoutVariants({ variant, className }))}>{children}</header>
}

PageHeader.displayName = "PageHeader"

export { PageLayout, PageHeader }
