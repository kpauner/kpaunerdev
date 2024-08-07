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
        "tracking-none tracking-wide text-white uppercase",
        size === "xl" &&
          "py-8 text-[clamp(2rem,10vmin,10rem)] leading-10 sm:leading-[3rem] md:leading-[4.5rem]",
        size === "lg" && "text-5xl md:text-6xl leading-10 md:leading-[4.5rem]",
        size === "md" && "text-3xl md:text-4xl font-black",
        size === "sm" && "text-base md:text-xl font-black",
        size === "xs" && "text-xs md:text-sm",
        className
      )}
    >
      {children}
    </Comp>
  );
}
