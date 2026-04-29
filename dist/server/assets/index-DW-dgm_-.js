import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
const palettes = {
  spring: {
    blob1: "radial-gradient(ellipse 70% 60% at 15% 20%, rgba(220,195,215,0.55) 0%, transparent 70%)",
    blob2: "radial-gradient(ellipse 65% 55% at 88% 75%, rgba(195,220,205,0.48) 0%, transparent 70%)",
    blob3: "radial-gradient(ellipse 55% 50% at 55% 50%, rgba(235,220,230,0.30) 0%, transparent 65%)",
    orbCenter: "#f5f0f4",
    orbEdge: "#d4b8d0",
    orbGlowA: "rgba(212,184,208,0.35)",
    orbGlowB: "rgba(195,218,200,0.20)",
    accent: "#8a6b87",
    accentSoft: "rgba(138,107,135,0.12)",
    ctaBg: "linear-gradient(135deg, #9b7a98 0%, #8a6b87 100%)",
    ctaHover: "linear-gradient(135deg, #b090ad 0%, #9b7a98 100%)",
    ctaShadow: "rgba(138,107,135,0.35)",
    panelTint: "rgba(245,240,243,0.18)",
    cardAccent: "rgba(212,184,208,0.25)",
    label: "Spring"
  },
  summer: {
    blob1: "radial-gradient(ellipse 70% 60% at 18% 25%, rgba(220,205,185,0.52) 0%, transparent 70%)",
    blob2: "radial-gradient(ellipse 65% 55% at 85% 70%, rgba(185,215,205,0.45) 0%, transparent 70%)",
    blob3: "radial-gradient(ellipse 55% 50% at 50% 45%, rgba(228,218,205,0.28) 0%, transparent 65%)",
    orbCenter: "#f5f2ed",
    orbEdge: "#d4c4a8",
    orbGlowA: "rgba(212,196,168,0.35)",
    orbGlowB: "rgba(185,215,205,0.20)",
    accent: "#7a6850",
    accentSoft: "rgba(122,104,80,0.12)",
    ctaBg: "linear-gradient(135deg, #8f7d62 0%, #7a6850 100%)",
    ctaHover: "linear-gradient(135deg, #a49278 0%, #8f7d62 100%)",
    ctaShadow: "rgba(122,104,80,0.35)",
    panelTint: "rgba(245,242,237,0.18)",
    cardAccent: "rgba(212,196,168,0.25)",
    label: "Summer"
  },
  autumn: {
    blob1: "radial-gradient(ellipse 70% 60% at 12% 22%, rgba(215,190,165,0.55) 0%, transparent 70%)",
    blob2: "radial-gradient(ellipse 65% 55% at 90% 72%, rgba(210,185,160,0.48) 0%, transparent 70%)",
    blob3: "radial-gradient(ellipse 55% 50% at 50% 48%, rgba(228,210,190,0.30) 0%, transparent 65%)",
    orbCenter: "#f5f0eb",
    orbEdge: "#d4b898",
    orbGlowA: "rgba(212,184,152,0.38)",
    orbGlowB: "rgba(215,185,160,0.22)",
    accent: "#8a6040",
    accentSoft: "rgba(138,96,64,0.12)",
    ctaBg: "linear-gradient(135deg, #a0734f 0%, #8a6040 100%)",
    ctaHover: "linear-gradient(135deg, #b88868 0%, #a0734f 100%)",
    ctaShadow: "rgba(138,96,64,0.35)",
    panelTint: "rgba(245,240,235,0.18)",
    cardAccent: "rgba(212,184,152,0.25)",
    label: "Autumn"
  },
  winter: {
    blob1: "radial-gradient(ellipse 70% 60% at 16% 20%, rgba(190,198,228,0.52) 0%, transparent 70%)",
    blob2: "radial-gradient(ellipse 65% 55% at 86% 76%, rgba(185,215,228,0.45) 0%, transparent 70%)",
    blob3: "radial-gradient(ellipse 55% 50% at 52% 50%, rgba(210,215,235,0.28) 0%, transparent 65%)",
    orbCenter: "#f2f3f8",
    orbEdge: "#b8c2d8",
    orbGlowA: "rgba(184,194,216,0.35)",
    orbGlowB: "rgba(185,215,228,0.22)",
    accent: "#5a6888",
    accentSoft: "rgba(90,104,136,0.12)",
    ctaBg: "linear-gradient(135deg, #6e82a8 0%, #5a6888 100%)",
    ctaHover: "linear-gradient(135deg, #8298be 0%, #6e82a8 100%)",
    ctaShadow: "rgba(90,104,136,0.35)",
    panelTint: "rgba(242,243,250,0.18)",
    cardAccent: "rgba(184,194,216,0.25)",
    label: "Winter"
  }
};
function getSeason() {
  const m = (/* @__PURE__ */ new Date()).getMonth();
  if (m >= 2 && m <= 4) return "spring";
  if (m >= 5 && m <= 7) return "summer";
  if (m >= 8 && m <= 10) return "autumn";
  return "winter";
}
function SeasonalOrb({
  palette
}) {
  return /* @__PURE__ */ jsxs("div", { style: {
    position: "relative",
    width: "84px",
    height: "84px",
    margin: "0 auto 36px",
    animation: "orbPulse 4.5s ease-in-out infinite",
    ["--orb-glow-a"]: palette.orbGlowA,
    ["--orb-glow-b"]: palette.orbGlowB
  }, children: [
    /* @__PURE__ */ jsx("div", { style: {
      position: "absolute",
      inset: "-20px",
      borderRadius: "50%",
      background: `radial-gradient(circle, ${palette.orbGlowA} 0%, ${palette.orbGlowB} 45%, transparent 70%)`,
      animation: "orbGlow 4.5s ease-in-out infinite",
      ["--orb-glow-a"]: palette.orbGlowA,
      ["--orb-glow-b"]: palette.orbGlowB
    } }),
    /* @__PURE__ */ jsx("div", { style: {
      position: "relative",
      width: "84px",
      height: "84px",
      borderRadius: "50%",
      background: `radial-gradient(circle at 35% 32%, ${palette.orbCenter} 0%, ${palette.orbEdge} 65%, rgba(0,0,0,0.06) 100%)`,
      boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.9),
            inset 0 -2px 8px rgba(0,0,0,0.06),
            0 2px 8px rgba(0,0,0,0.06),
            0 0 0 1px rgba(255,255,255,0.6)
          `
    }, children: /* @__PURE__ */ jsx("div", { style: {
      position: "absolute",
      top: "14px",
      left: "18px",
      width: "28px",
      height: "18px",
      borderRadius: "50%",
      background: "radial-gradient(ellipse, rgba(255,255,255,0.7) 0%, transparent 100%)",
      transform: "rotate(-20deg)"
    } }) })
  ] });
}
function ScrollIndicator({
  accent
}) {
  return /* @__PURE__ */ jsxs("div", { style: {
    position: "absolute",
    bottom: "36px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    animation: "fadeIn 1.8s ease 1.4s both"
  }, children: [
    /* @__PURE__ */ jsx("span", { style: {
      fontFamily: "'Outfit', sans-serif",
      fontSize: "0.68rem",
      fontWeight: 400,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: `color-mix(in srgb, ${accent} 60%, transparent)`
    }, children: "Scroll" }),
    /* @__PURE__ */ jsx("div", { style: {
      width: "1px",
      height: "32px",
      background: `linear-gradient(to bottom, ${accent}60, transparent)`,
      animation: "scrollIndicator 2.2s ease-in-out infinite"
    } })
  ] });
}
const features = [{
  index: "01",
  title: "Seasonal Awareness",
  body: "The interface breathes with the calendar. Palette, mood, and tone shift quietly with the turning of the year — without announcement, without ceremony."
}, {
  index: "02",
  title: "Quiet Performance",
  body: "Motion exists to serve meaning, not to impress. Every transition earns its frame. Every pause is intentional."
}, {
  index: "03",
  title: "Modular Clarity",
  body: "Each section holds its own weight. Composable, restrained, and sized to breathe — never crowded into obligation."
}];
function FeatureCard({
  feature,
  palette,
  delay,
  tall
}) {
  return /* @__PURE__ */ jsxs("div", { className: "glass-card", style: {
    padding: tall ? "48px 40px" : "36px 36px",
    gridRow: tall ? "span 2" : void 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: tall ? "space-between" : "flex-start",
    animation: `fadeUp 1s cubic-bezier(0.16,1,0.3,1) ${delay} both`,
    borderTop: `2px solid ${palette.cardAccent}`,
    minHeight: tall ? "320px" : void 0
  }, children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { style: {
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "0.78rem",
        fontWeight: 400,
        letterSpacing: "0.22em",
        color: palette.accent,
        opacity: 0.7,
        marginBottom: "20px",
        textTransform: "uppercase"
      }, children: feature.index }),
      /* @__PURE__ */ jsx("h3", { className: "font-display", style: {
        fontSize: tall ? "1.85rem" : "1.45rem",
        fontWeight: 400,
        lineHeight: 1.2,
        letterSpacing: "-0.01em",
        color: "#1a1714",
        marginBottom: "18px"
      }, children: feature.title }),
      /* @__PURE__ */ jsx("p", { style: {
        fontFamily: "'Outfit', sans-serif",
        fontSize: "0.92rem",
        fontWeight: 300,
        lineHeight: 1.75,
        color: "rgba(26,23,20,0.58)",
        maxWidth: "320px"
      }, children: feature.body })
    ] }),
    tall && /* @__PURE__ */ jsx("div", { style: {
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      background: palette.accentSoft,
      border: `1px solid ${palette.cardAccent}`,
      marginTop: "32px"
    } })
  ] });
}
function LandingPage() {
  const season = getSeason();
  const palette = palettes[season];
  const cssVars = {
    ["--accent"]: palette.accent,
    ["--orb-glow-a"]: palette.orbGlowA,
    ["--orb-glow-b"]: palette.orbGlowB,
    ["--cta-bg"]: palette.ctaBg,
    ["--cta-hover"]: palette.ctaHover,
    ["--cta-shadow"]: palette.ctaShadow
  };
  return /* @__PURE__ */ jsxs("div", { style: {
    minHeight: "100vh",
    ...cssVars
  }, children: [
    /* @__PURE__ */ jsx("div", { className: "orb neutral" }),
    /* @__PURE__ */ jsx("div", { className: "orb dramatic" }),
    /* @__PURE__ */ jsxs("section", { style: {
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      background: "#f5f3f0",
      padding: "40px 24px"
    }, children: [
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        inset: 0,
        background: palette.blob1,
        animation: "slowDrift 22s ease-in-out infinite",
        willChange: "transform"
      } }),
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        inset: 0,
        background: palette.blob2,
        animation: "slowDriftAlt 28s ease-in-out infinite",
        willChange: "transform"
      } }),
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        inset: 0,
        background: palette.blob3
      } }),
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px",
        pointerEvents: "none",
        zIndex: 1
      } }),
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        top: "24px",
        left: "28px",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        animation: "fadeIn 1.6s ease 1s both"
      }, children: /* @__PURE__ */ jsx("img", { src: "/mood-logo1.png", alt: "Mood", style: {
        width: "44px",
        height: "44px",
        objectFit: "contain",
        filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.08))"
      } }) }),
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        top: "28px",
        right: "32px",
        zIndex: 10,
        fontFamily: "'Outfit', sans-serif",
        fontSize: "0.68rem",
        fontWeight: 500,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: palette.accent,
        opacity: 0.65,
        animation: "fadeIn 1.6s ease 1s both"
      }, children: palette.label }),
      /* @__PURE__ */ jsxs("div", { className: "glass-panel", style: {
        position: "relative",
        zIndex: 5,
        maxWidth: "620px",
        width: "100%",
        padding: "clamp(40px, 6vw, 72px) clamp(32px, 6vw, 80px)",
        textAlign: "center",
        background: `rgba(255,255,255,0.46), ${palette.panelTint}`
      }, children: [
        /* @__PURE__ */ jsx("div", { style: {
          position: "absolute",
          inset: 0,
          borderRadius: "28px",
          border: "1px solid rgba(255,255,255,0.85)",
          animation: "borderShimmer 5s ease-in-out infinite",
          pointerEvents: "none"
        } }),
        /* @__PURE__ */ jsx(SeasonalOrb, { palette }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display animate-fade-up", style: {
          fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
          fontWeight: 300,
          fontStyle: "normal",
          lineHeight: 1.18,
          letterSpacing: "-0.02em",
          color: "#1a1714",
          marginBottom: "20px",
          animationDelay: "0.3s"
        }, children: [
          "Web apps that breathe",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { style: {
            fontStyle: "italic",
            fontWeight: 300
          }, children: "with the seasons." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "font-body animate-fade-up", style: {
          fontSize: "clamp(0.92rem, 1.8vw, 1.05rem)",
          fontWeight: 300,
          lineHeight: 1.7,
          color: "rgba(26,23,20,0.52)",
          letterSpacing: "0.025em",
          marginBottom: "40px",
          animationDelay: "0.52s"
        }, children: "Designed for clarity, mood, and quiet delight." }),
        /* @__PURE__ */ jsx("div", { className: "animate-fade-up", style: {
          animationDelay: "0.72s"
        }, children: /* @__PURE__ */ jsxs(Link, { to: "/begin-the-journey", className: "cta-btn", children: [
          /* @__PURE__ */ jsx("span", { children: "Begin the journey" }),
          /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", style: {
            opacity: 0.8
          }, children: /* @__PURE__ */ jsx("path", { d: "M1 7h12M7 1l6 6-6 6", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(ScrollIndicator, { accent: palette.accent })
    ] }),
    /* @__PURE__ */ jsxs("section", { style: {
      position: "relative",
      padding: "clamp(80px, 10vw, 140px) clamp(24px, 6vw, 80px)",
      background: "#f5f3f0",
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        inset: 0,
        background: palette.blob2,
        opacity: 0.4
      } }),
      /* @__PURE__ */ jsxs("div", { style: {
        position: "relative",
        zIndex: 2,
        maxWidth: "1080px",
        margin: "0 auto"
      }, children: [
        /* @__PURE__ */ jsxs("div", { style: {
          marginBottom: "64px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "24px",
          flexWrap: "wrap"
        }, children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { style: {
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: palette.accent,
              opacity: 0.7,
              marginBottom: "14px"
            }, children: "The philosophy" }),
            /* @__PURE__ */ jsxs("h2", { className: "font-display", style: {
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              fontWeight: 300,
              lineHeight: 1.2,
              letterSpacing: "-0.015em",
              color: "#1a1714",
              maxWidth: "420px"
            }, children: [
              "Three principles that",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("em", { style: {
                fontStyle: "italic"
              }, children: "refuse to be hurried." })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { style: {
            width: "80px",
            height: "1px",
            background: `linear-gradient(to right, ${palette.accent}60, transparent)`,
            flexShrink: 0,
            marginBottom: "8px"
          } })
        ] }),
        /* @__PURE__ */ jsx("div", { style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gridTemplateRows: "auto",
          gap: "20px"
        }, children: /* @__PURE__ */ jsxs("div", { style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          gridColumn: "1 / -1"
        }, className: "feature-grid", children: [
          /* @__PURE__ */ jsx("style", { children: `
                .feature-grid {
                  grid-template-columns: 1fr;
                }
                @media (min-width: 640px) {
                  .feature-grid {
                    grid-template-columns: 1.1fr 0.9fr;
                    grid-template-rows: auto auto;
                  }
                  .feature-grid > *:first-child {
                    grid-row: span 2;
                  }
                }
              ` }),
          features.map((f, i) => /* @__PURE__ */ jsx(FeatureCard, { feature: f, palette, delay: `${0.85 + i * 0.15}s`, tall: i === 0 }, f.index))
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { style: {
      position: "relative",
      padding: "clamp(80px, 10vw, 140px) clamp(24px, 6vw, 80px)",
      background: `linear-gradient(170deg, #f5f3f0 0%, color-mix(in srgb, ${palette.orbEdge} 12%, #f5f3f0) 100%)`,
      overflow: "hidden",
      textAlign: "center"
    }, children: [
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        inset: 0,
        background: palette.blob1,
        opacity: 0.35
      } }),
      /* @__PURE__ */ jsxs("div", { style: {
        position: "relative",
        zIndex: 2,
        maxWidth: "700px",
        margin: "0 auto"
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "prose-divider", style: {
          marginBottom: "48px"
        } }),
        /* @__PURE__ */ jsx("blockquote", { className: "font-display", style: {
          fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
          fontWeight: 300,
          fontStyle: "italic",
          lineHeight: 1.4,
          letterSpacing: "-0.01em",
          color: "#1a1714",
          marginBottom: "32px",
          quotes: "none"
        }, children: '"Good design is like a clear sky — you notice the world, not the weather."' }),
        /* @__PURE__ */ jsx("cite", { style: {
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.78rem",
          fontWeight: 400,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: palette.accent,
          opacity: 0.65,
          fontStyle: "normal"
        }, children: "On craft & restraint" }),
        /* @__PURE__ */ jsx("div", { className: "prose-divider", style: {
          marginTop: "48px"
        } })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { style: {
      position: "relative",
      padding: "clamp(100px, 12vw, 180px) clamp(24px, 6vw, 80px)",
      background: `
            radial-gradient(ellipse 80% 70% at 50% 50%, color-mix(in srgb, ${palette.orbEdge} 22%, transparent) 0%, transparent 70%),
            linear-gradient(180deg, color-mix(in srgb, ${palette.orbEdge} 12%, #f5f3f0) 0%, #f5f3f0 60%, color-mix(in srgb, ${palette.accent} 8%, #f5f3f0) 100%)
          `,
      overflow: "hidden",
      textAlign: "center"
    }, children: [
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        inset: 0,
        background: palette.blob3,
        opacity: 0.6,
        animation: "slowDrift 24s ease-in-out infinite",
        willChange: "transform"
      } }),
      /* @__PURE__ */ jsx("div", { style: {
        position: "absolute",
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.028'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px",
        pointerEvents: "none",
        zIndex: 1
      } }),
      /* @__PURE__ */ jsxs("div", { style: {
        position: "relative",
        zIndex: 2,
        maxWidth: "560px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }, children: [
        /* @__PURE__ */ jsx("div", { className: "prose-divider", style: {
          marginBottom: "40px"
        } }),
        /* @__PURE__ */ jsx("h2", { className: "font-display", style: {
          fontSize: "clamp(2rem, 4.2vw, 3rem)",
          fontWeight: 300,
          fontStyle: "italic",
          lineHeight: 1.2,
          letterSpacing: "-0.015em",
          color: "#1a1714",
          marginBottom: "44px"
        }, children: "Ready to explore?" }),
        /* @__PURE__ */ jsxs(Link, { to: "/explore", className: "cta-btn", children: [
          /* @__PURE__ */ jsx("span", { children: "Step inside" }),
          /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", style: {
            opacity: 0.8
          }, children: /* @__PURE__ */ jsx("path", { d: "M1 7h12M7 1l6 6-6 6", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }) })
        ] }),
        /* @__PURE__ */ jsx("p", { style: {
          marginTop: "32px",
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.78rem",
          fontWeight: 300,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: `color-mix(in srgb, ${palette.accent} 70%, transparent)`,
          opacity: 0.75
        }, children: "No noise. Just clarity." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("footer", { style: {
      padding: "40px 24px",
      background: "#f0ede8",
      borderTop: "1px solid rgba(26,23,20,0.07)",
      textAlign: "center"
    }, children: [
      /* @__PURE__ */ jsxs("div", { style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        marginBottom: "16px"
      }, children: [
        /* @__PURE__ */ jsx("div", { style: {
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: `radial-gradient(circle at 35% 32%, ${palette.orbCenter}, ${palette.orbEdge})`,
          boxShadow: `0 0 8px ${palette.orbGlowA}`
        } }),
        /* @__PURE__ */ jsx("span", { className: "font-display", style: {
          fontSize: "1.1rem",
          fontWeight: 400,
          letterSpacing: "0.04em",
          color: "#1a1714",
          opacity: 0.7
        }, children: "Seasonal" })
      ] }),
      /* @__PURE__ */ jsxs("p", { style: {
        fontFamily: "'Outfit', sans-serif",
        fontSize: "0.75rem",
        fontWeight: 300,
        letterSpacing: "0.08em",
        color: "rgba(26,23,20,0.38)"
      }, children: [
        "Crafted with restraint & intention · ",
        (/* @__PURE__ */ new Date()).getFullYear()
      ] })
    ] })
  ] });
}
export {
  LandingPage as component
};
