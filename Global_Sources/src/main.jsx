import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.jsx";
import NotFoundRoutes from "./routes/NotFoundRoutes.jsx";
import "./index.css";

const routes = [...AppRoutes, ...NotFoundRoutes];

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
