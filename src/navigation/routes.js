import React from "react";
const Home = React.lazy(() => import("../pages/Home"));
const ProductList = React.lazy(() => import("../pages/products/product-list"));
const NotFound = React.lazy(() => import("../pages/not-found"));

const routes = [
  { path: "/", exact: true, name: "home", component: Home, isPrivate: true },
  {
    path: "/products",
    exact: true,
    name: "products",
    key: "products",
    component: ProductList,
    isPrivate: true,
  },
  {
    path: "*",
    exact: false,
    name: "NotFound",
    component: NotFound,
    isPrivate: false,
  },
];

export default routes;
