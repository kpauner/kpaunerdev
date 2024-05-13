import { Icons } from "@/components/icons";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { mainNav } from "@/config/navigation";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NavBar />
        <main className="antialiased">
          <Outlet />
        </main>
        <TanStackRouterDevtools />
      </ThemeProvider>
    </>
  ),
});

function NavBar() {
  return (
    <div className="fixed left-0 right-0 top-0 z-10 flex justify-between gap-2 p-6">
      <Icons.logo className="h-8 fill-white" />
      <div className="flex items-center gap-2">
        <nav className="flex items-center gap-2">
          {mainNav.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="[&.active]:font-bold"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </div>
  );
}
