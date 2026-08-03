import { Link, useRouterState } from "@tanstack/react-router";

const studioLinks = [
  { to: "/studio/demo", label: "Demo" },
  { to: "/studio/depth-levels", label: "Depth Levels" },
  { to: "/studio/licencing", label: "Licensing" },
  { to: "/studio/support", label: "Support" },
  { to: "/studio/maintenance-roadmap", label: "Maintenance" },
  { to: "/studio/terms", label: "Terms" },
] as const;

export default function StudioNavBar() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <nav className="studio-nav-bar" aria-label="Studio section navigation">
      <div className="studio-nav-inner">
        <div className="studio-nav-links">
          {studioLinks.map((link) => {
            const isActive = pathname === link.to;

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`studio-nav-link ${isActive ? "is-active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
