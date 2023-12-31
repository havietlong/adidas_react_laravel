import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Tables_Detail from "../views/ui/Tables_Detail.js";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));
const Products = lazy(() => import("../views/ui/ProductsDisplay.js"));
const ProductsEdit = lazy(() => import("../views/ui/ProductsEdit.js"));
const ProductDelete  = lazy(() => import("../process/productDelete.js"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/starter" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/about", exact: true, element: <About /> },
      { path: "/alerts", exact: true, element: <Alerts /> },
      { path: "/badges", exact: true, element: <Badges /> },
      { path: "/buttons", exact: true, element: <Buttons /> },
      { path: "/cards", exact: true, element: <Cards /> },
      { path: "/grid", exact: true, element: <Grid /> },
      { path: "/table", exact: true, element: <Tables /> },
      { path: "/forms", exact: true, element: <Forms /> },
      { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
      { path: "/products", exact: true, element: <Products /> },
      { path: "/products/:type", exact: true, element: <Products /> },
      { path: "/products/:type/:category", exact: true, element: <Products /> },
      { path: "/product_info/:id", exact: true, element: <ProductsEdit /> },
      { path: "/product/delete/:id", exact: true, element: <ProductDelete /> },
      { path: "/admin/orders", exact: true, element: <Tables /> },
      { path: "/admin/order_detail/:id", exact: true, element: <Tables_Detail /> },
    ],
  },
];

export default ThemeRoutes;
