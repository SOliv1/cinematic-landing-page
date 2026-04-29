import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useRef, useCallback, useEffect } from "react";
const images = [
  "reflections-door-of-wonder-banner.png",
  "reflections-features1.png",
  "reflections-features2.png",
  "reflections-features3.png",
  "reflections-features4.png",
  "reflections-features5.png",
  "reflections-features6.png",
  "reflections-features7.png",
  "reflections-features8.png",
  "reflections-features9.png",
  "reflections-features10.png",
  "reflections-features11.png",
  "reflections-photo-gallery.png"
];
const carouselImages = images.map((filename) => ({
  src: `/images/${filename}`,
  caption: filename.replace(/^reflections-/, "").replace(/\.png$/, "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
}));
const SLIDE_DURATION = 15e3;
const FADE_DURATION = 1200;
const INTRO_DURATION = 1600;
function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(null);
  const [fading, setFading] = useState(false);
  const [isSettled, setIsSettled] = useState(false);
  const fadeTimer = useRef(null);
  const advance = useCallback((target) => {
    const to = target ?? (current + 1) % carouselImages.length;
    setNext(to);
    setFading(true);
    if (fadeTimer.current !== null) {
      window.clearTimeout(fadeTimer.current);
    }
    fadeTimer.current = window.setTimeout(() => {
      setCurrent(to);
      setNext(null);
      setFading(false);
    }, FADE_DURATION);
  }, [current]);
  useEffect(() => {
    const settleTimer = window.setTimeout(() => {
      setIsSettled(true);
    }, INTRO_DURATION);
    return () => {
      window.clearTimeout(settleTimer);
      if (fadeTimer.current !== null) {
        window.clearTimeout(fadeTimer.current);
      }
    };
  }, []);
  useEffect(() => {
    if (fading || !isSettled) return;
    const id = setTimeout(() => advance(), SLIDE_DURATION);
    return () => clearTimeout(id);
  }, [current, fading, isSettled, advance]);
  const goTo = (i) => {
    if (i === current || fading) return;
    advance(i);
  };
  return /* @__PURE__ */ jsxs("div", { className: `carousel-root ${isSettled ? "carousel-is-settled" : "carousel-is-entering"}`, children: [
    carouselImages.map((img, i) => {
      const isCurrent = i === current;
      const isNext = i === next;
      if (!isCurrent && !isNext) return null;
      return /* @__PURE__ */ jsxs("div", { className: `carousel-slide ${isCurrent && !fading ? "slide-visible" : ""} ${isNext && fading ? "slide-entering" : ""} ${isCurrent && fading ? "slide-exiting" : ""}`, children: [
        /* @__PURE__ */ jsx("img", { src: img.src, alt: img.caption, className: `carousel-img ${isCurrent && !fading ? "carousel-img-current" : ""}` }),
        /* @__PURE__ */ jsx("div", { className: "carousel-vignette" })
      ] }, img.src);
    }),
    /* @__PURE__ */ jsxs("div", { className: "carousel-caption", children: [
      /* @__PURE__ */ jsxs("span", { className: "carousel-caption-index", children: [
        String(current + 1).padStart(2, "0"),
        " / ",
        String(carouselImages.length).padStart(2, "0")
      ] }),
      /* @__PURE__ */ jsx("span", { className: "carousel-caption-text", children: carouselImages[current].caption })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "carousel-progress-track", children: /* @__PURE__ */ jsx("div", { className: `carousel-progress-fill ${fading ? "progress-paused" : ""}`, style: {
      animationDelay: isSettled ? "0ms" : `${INTRO_DURATION}ms`
    } }, `${current}-progress`) }),
    /* @__PURE__ */ jsx("div", { className: "carousel-dots", children: carouselImages.map((_, i) => /* @__PURE__ */ jsx("button", { onClick: () => goTo(i), className: `carousel-dot ${i === current ? "dot-active" : ""}`, "aria-label": `Go to slide ${i + 1}` }, i)) }),
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "carousel-back", children: [
      /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M13 7H1M7 1L1 7l6 6", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ jsx("span", { children: "Return" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "carousel-title", children: [
      /* @__PURE__ */ jsx("span", { className: "carousel-title-eyebrow", children: "The Collection" }),
      /* @__PURE__ */ jsx("span", { className: "carousel-title-name", children: "Reflections" })
    ] })
  ] });
}
function ExplorePage() {
  return /* @__PURE__ */ jsx(ImageCarousel, {});
}
export {
  ExplorePage as component
};
