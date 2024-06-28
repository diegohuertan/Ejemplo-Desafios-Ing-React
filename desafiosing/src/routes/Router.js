import React, { lazy } from "react";
import Loadable from "../layouts/loadable";

const FullLayout = Loadable(
  lazy(() => import("../layouts/full-layout/MainLayout"))
);


const Error = Loadable(lazy(() => import("../pages/error/404")));

const Heroes = Loadable(lazy(() => import("../pages/home/superheroes")));

const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", exact: true, element: <Heroes /> },
      { path: "*", element: <Error/> },
      
      
    ],
  },
];

export default Router;