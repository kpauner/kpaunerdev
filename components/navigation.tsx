import clsx from "clsx";

type NavigationProps = {
  items: ItemProps[];
  className?: string;
  children?: React.ReactNode;
} & JSX.IntrinsicElements["nav"];

export default function Navigation({
  className,
  items,
  ...props
}: NavigationProps) {
  return (
    <nav
      className={clsx(
        className,
        "text-xs font-medium uppercase tracking-widest"
      )}
      {...props}
    >
      <ul className="flex gap-8">
        {items.map((item, index) => (
          <Item
            key={index}
            active={item.active}
            className=""
            label={item.label}
          />
        ))}
      </ul>
    </nav>
  );
}

type ItemProps = {
  label: string;
  active?: boolean;
} & JSX.IntrinsicElements["span"];

function Item({ active, label, className }: ItemProps) {
  return (
    <li className="group relative">
      <span className={clsx(className, "cursor-not-allowed")}>{label}</span>
      <div
        className={clsx(
          "absolute left-0 top-[150%] h-0.5 w-[2.5em] transition-all",
          active
            ? "rounded-full bg-blue-800"
            : "bg-white [clip-path:inset(0_100%_0_0_round_100px)] group-hover:bg-blue-400 group-hover:[clip-path:inset(0_50%_0_0_round_100px)]"
        )}
      />
    </li>
  );
}
