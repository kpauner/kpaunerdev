import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Icons } from "./icons";
import { Link } from "@tanstack/react-router";
import { NavItem } from "@/types";

type NavBarProps = {
  items: NavItem[];
};

export default function NavBar({ items }: NavBarProps) {
  return (
    <div>
      <div className="fixed left-0 right-0 top-0 z-10 flex justify-between gap-2 p-6">
        <Icons.logo className="h-6 fill-white" />
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger>Open</SheetTrigger>
            <SheetContent side="top">
              <nav className="flex items-center gap-2">
                {items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="[&.active]:font-bold"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
