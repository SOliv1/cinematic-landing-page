import { type ReactNode } from "react";
import StudioNavBar from "@/components/StudioNavBar.tsx";

interface StudioLayoutProps {
  title: string;
  children: ReactNode;
}

export default function StudioLayout({ title, children }: StudioLayoutProps) {
  return (
    <div className="studio-layout">

      <h1 className="positioning-header">{title}</h1>

      <div className="positioning-wrapper">
        <div className="positioning-glow" />

        <div className="positioning-container">

          <StudioNavBar />

          {children}

        </div>
      </div>
    </div>
  );
}
