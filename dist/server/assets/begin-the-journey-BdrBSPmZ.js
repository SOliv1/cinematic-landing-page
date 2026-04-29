import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import "./router-By4Y7h3y.js";
function BeginTheJourney() {
  return /* @__PURE__ */ jsxs("div", { className: "btj-container", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "btj-back", children: [
      /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M13 7H1M7 1L1 7l6 6", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }) }),
      /* @__PURE__ */ jsx("span", { children: "Return" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "btj-orb" }),
    /* @__PURE__ */ jsxs("div", { className: "btj-text", children: [
      /* @__PURE__ */ jsx("p", { className: "btj-line", children: "Every season begins with a single step into the light." }),
      /* @__PURE__ */ jsx(Link, { to: "/explore", className: "btj-button", viewTransition: true, children: "Step Inside" })
    ] })
  ] });
}
export {
  BeginTheJourney as component
};
