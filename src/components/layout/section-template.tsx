import React from "react";
import clsx from "clsx";

type SectionTemplateProps = {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
};

const SectionTemplate = React.forwardRef<HTMLDivElement, SectionTemplateProps>(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx("mx-auto w-full py-10 md:py-16 lg:py-32", className)}
        {...restProps}
      >
        <div className="mx-auto h-full w-full">{children}</div>
      </Comp>
    );
  },
);

SectionTemplate.displayName = "SectionTemplate";

export default SectionTemplate;
