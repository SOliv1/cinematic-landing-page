import { type ReactNode, useEffect, useRef, useState } from "react";

interface SeasonalCardProps {
  children: ReactNode;
}

export default function SeasonalCard({ children }: SeasonalCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        seasonal-readable-card
        relative overflow-hidden
        transition-all duration-700 ease-out
        rounded-3xl p-6 md:p-8
        bg-white/5 backdrop-blur-xl
        border border-[color:var(--seasonal-tint)]/30
        shadow-[0_0_40px_-10px_var(--seasonal-tint)]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {/* Orb Tint Wash */}
      <div
        className="
          seasonal-card-orb
          absolute inset-0 pointer-events-none
          bg-[radial-gradient(circle_at_top_left,var(--seasonal-tint)/18,transparent_70%)]
        "
      />

      <div className="seasonal-readable-card-content relative text-lg md:text-xl leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}
