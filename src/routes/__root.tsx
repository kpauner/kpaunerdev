import { mainNav } from "@/config/navigation";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar />

      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

function NavBar() {
  return (
    <div className="flex gap-2 p-2">
      {mainNav.map((item) => (
        <Link key={item.name} to={item.href} className="[&.active]:font-bold">
          {item.name}
        </Link>
      ))}
    </div>
  );
}
