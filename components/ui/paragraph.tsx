import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const paragraphVariants = cva(
  "text-base leading-7 [&:not(:first-child)]:mt-6",
  {
    variants: {
      variant: {
        default: "text-foreground",
        muted: "text-gray-300 text-sm",
        quote: "text-5xl italic text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(paragraphVariants({ variant, className }))}
        {...props}
      />
    );
  }
);

Paragraph.displayName = "Paragraph";

export { Paragraph };
