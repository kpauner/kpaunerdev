import React from "react";
import clsx from "clsx";

type PageTemplateProps = {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
};

const PageTemplate = React.forwardRef<HTMLDivElement, PageTemplateProps>(
  ({ as: Comp = "main", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx(
          "flex min-h-screen w-full flex-col px-6 sm:gap-4",
          className,
        )}
        {...restProps}
      >
        {children}
      </Comp>
    );
  },
);

PageTemplate.displayName = "PageTemplate";

export default PageTemplate;
