import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import { AppRoute } from "./utils/AppRoute";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: AppRoute.Home,
        element: <Home />,
      },
      {
        path: AppRoute.Experience,
        element: <Experience />,
      },
      {
        path: AppRoute.Portfolio,
        element: <Portfolio />,
      }
    ],
  },
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

