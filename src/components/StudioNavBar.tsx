import { Link, useRouterState } from "@tanstack/react-router";
import ReturnHomePill from "@/components/ReturnHomePill";

const studioLinks = [
  { to: "/studio/positioning", label: "Positioning" },
  { to: "/studio/why-seasonal", label: "Why Seasonal" },
  { to: "/studio/depth-levels", label: "Depth Levels" },
  { to: "/studio/interiors", label: "Interiors" },
] as const;

export default function StudioNavBar() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <nav className="studio-nav-bar" aria-label="Studio navigation">
      <div className="studio-nav-inner">
        <Link to="/seasonal-house" className="studio-nav-return">
          ← The Seasonal House
        </Link>

        <div className="studio-nav-links">
          <ReturnHomePill />

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
