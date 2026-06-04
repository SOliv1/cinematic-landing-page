interface AtmosphericBannerProps {
  src: string;
  alt: string;
  title?: string;
}

export default function AtmosphericBanner({ src, alt, title }: AtmosphericBannerProps) {
  return (
    <div
      className="
        relative w-full overflow-hidden
        rounded-3xl
        aspect-[16/9]
        mb-10
        opacity-0 animate-fadeInSlow
      "
    >
      {/* Base image */}
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />

      {title && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-5 md:p-7">
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-5xl font-light italic leading-tight text-white/90">
            {title}
          </h2>
        </div>
      )}

      {/* Dusk tint overlay */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,200,150,0.35),transparent_60%)]
          mix-blend-soft-light
        "
      />

      {/* Grain layer */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-40
          mix-blend-soft-light
        "
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.24) 0 1px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      />
    </div>
  );
}
