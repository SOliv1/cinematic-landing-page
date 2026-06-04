import { type ReactNode } from "react";
import StudioNavBar from "@/components/StudioNavBar.tsx";

interface StudioLayoutProps {
  title: string;
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
  containerClassName?: string;
}

export default function StudioLayout({
  title,
  children,
  className = "",
  wrapperClassName = "",
  containerClassName = "",
}: StudioLayoutProps) {
  return (
    <div className={`studio-layout ${className}`.trim()}>

      <h1 className="positioning-header">{title}</h1>

      <div className={`positioning-wrapper ${wrapperClassName}`.trim()}>
        <div className="positioning-glow" />

        <div className={`positioning-container ${containerClassName}`.trim()}>

          <StudioNavBar />

          {children}

        </div>
      </div>
    </div>
  );
}
