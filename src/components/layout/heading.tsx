import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  children: React.ReactNode;
  className?: string;
};

export default function Heading({
  as: Comp = "h1",
  className,
  children,
  size = "lg",
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "leading-none tracking-wide text-foreground",
        size === "xl" && "text-[clamp(3rem,12vmin,14rem)]",
        size === "lg" && "text-7xl md:text-8xl",
        size === "md" && "text-5xl md:text-6xl",
        size === "sm" && "text-3xl md:text-4xl",
        size === "xs" && "text-xs md:text-sm",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
