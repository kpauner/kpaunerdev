"use client";

import clsx from "clsx";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationProps = {
  items: ItemProps[];
  className?: string;
} & JSX.IntrinsicElements["nav"];

export default function Navigation({
  className,
  items,
  ...props
}: NavigationProps) {
  const currentPath = usePathname();
  console.log("CURRENT", currentPath);
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
          <Item key={index} href={item.href} className="" label={item.label} />
        ))}
      </ul>
    </nav>
  );
}

type ItemProps = {
  label: string;
  href: string;
} & JSX.IntrinsicElements["span"];

function Item({ href, label, className }: ItemProps) {
  const currentPath = usePathname();
  const locale = useLocale(); // Use the useLocale hook
  const localizedHref = href === "/" ? `/${locale}` : `/${locale}${href}`;

  console.log("CURRENT", localizedHref, currentPath);

  const isActive = currentPath === localizedHref;
  return (
    <li className="group relative">
      <Link
        href={`${localizedHref}`}
        className={clsx(className, "cursor-pointer")}
      >
        {label}
      </Link>
      <div
        className={clsx(
          "absolute left-0 top-[150%] h-0.5 w-[2.5em] transition-all",
          isActive
            ? "rounded-full bg-blue-800"
            : "bg-white [clip-path:inset(0_100%_0_0_round_100px)] group-hover:bg-blue-400 group-hover:[clip-path:inset(0_50%_0_0_round_100px)]"
        )}
      />
    </li>
  );
}
