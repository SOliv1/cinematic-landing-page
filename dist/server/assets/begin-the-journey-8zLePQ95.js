import { jsxs, jsx } from "react/jsx-runtime";
import { useNavigate, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import "./router-Dc5DrQGC.js";
function BeginTheJourney() {
  const navigate = useNavigate();
  const [isDeparting, setIsDeparting] = useState(false);
  const departureTimer = useRef(null);
  useEffect(() => {
    return () => {
      if (departureTimer.current !== null) {
        window.clearTimeout(departureTimer.current);
      }
    };
  }, []);
  const handleStepInside = () => {
    if (isDeparting) return;
    setIsDeparting(true);
    departureTimer.current = window.setTimeout(() => {
      navigate({
        to: "/explore",
        viewTransition: true
      });
    }, 1800);
  };
  return /* @__PURE__ */ jsxs("div", { className: `btj-container ${isDeparting ? "is-departing" : ""}`, children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "btj-back", children: [
      /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M13 7H1M7 1L1 7l6 6", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ jsx("span", { children: "Return" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "btj-orb-stage", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx("div", { className: "orb neutral" }),
      /* @__PURE__ */ jsx("div", { className: "orb dramatic" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "btj-text", children: [
      /* @__PURE__ */ jsx("p", { className: "btj-line", children: "Every season begins with a single step into the light." }),
      /* @__PURE__ */ jsx("button", { type: "button", className: "btj-button", onClick: handleStepInside, disabled: isDeparting, children: "Step Inside" })
    ] })
  ] });
}
export {
  BeginTheJourney as component
};
