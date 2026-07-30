import { Link, useRouterState } from "@tanstack/react-router";
import ReturnHomePill from "@/components/ReturnHomePill";

const studioLinks = [
  { to: "/studio/about", label: "About" },
  { to: "/studio/depth-levels", label: "Depth Levels" },
  { to: "/studio/manifesto", label: "Manifesto" },
  { to: "/studio/journal", label: "Journal" },
  { to: "/studio/morning-room", label: "Morning Room" },
  { to: "/studio/positioning", label: "Positioning" },
  { to: "/studio/seasonal-weather", label: "Seasonal Weather" },
  { to: "/studio/soft-room", label: "Soft Room" },
  { to: "/studio/why-seasonal", label: "Why Seasonal" },
  { to: "/studio/unlock-more", label: "Unlock More" },
  { to: "/studio/work-with-me", label: "Work With Me" },
  { to: "/studio/collections", label: "Boutique House" },
  { to: "/studio/vintage-notes", label: "Vintage Notes ✦" },
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
