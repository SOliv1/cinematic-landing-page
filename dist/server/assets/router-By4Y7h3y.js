import { createRootRoute, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
const Route$4 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Seasonal — Web apps that breathe" },
      { name: "description", content: "Designed for clarity, mood, and quiet delight." }
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/mood-logo.png" }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$3 = () => import("./explore-BWNlN3Jf.js");
const Route$3 = createFileRoute("/explore")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./begin-the-journey-BdrBSPmZ.js");
const Route$2 = createFileRoute("/begin-the-journey")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-D9GjU5gz.js");
const Route$1 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const products = [
  {
    id: 1,
    name: "Product 1",
    image: "/placeholder.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    shortDescription: "A generic product description for your first product.",
    price: 3e3
  }
];
const $$splitComponentImporter = () => import("./_productId-CGvZ4Ik8.js");
const Route = createFileRoute("/products/$productId")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  loader: async ({
    params
  }) => {
    const product = products.find((product2) => product2.id === +params.productId);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }
});
const ExploreRoute = Route$3.update({
  id: "/explore",
  path: "/explore",
  getParentRoute: () => Route$4
});
const BeginTheJourneyRoute = Route$2.update({
  id: "/begin-the-journey",
  path: "/begin-the-journey",
  getParentRoute: () => Route$4
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const ProductsProductIdRoute = Route.update({
  id: "/products/$productId",
  path: "/products/$productId",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  BeginTheJourneyRoute,
  ExploreRoute,
  ProductsProductIdRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  router as r
};
