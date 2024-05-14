import NavBar from "@/components/nav-bar";
import ModalProvider from "@/components/providers/modal-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { mainNav } from "@/config/navigation";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NavBar items={mainNav} />
        <main className="antialiased">
          <Outlet />
        </main>
        <ModalProvider />
        <TanStackRouterDevtools />
      </ThemeProvider>
    </>
  ),
});
