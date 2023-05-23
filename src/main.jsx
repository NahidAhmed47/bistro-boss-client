import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/Home/Home/Home";
import Contract from "./pages/Contract/Contract";
import Dashboard from "./pages/Dashboard/Dashboard";
import Menu from "./pages/Menu/Menu";
import Shop from "./pages/Shop/Shop";
import Login from "./pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: 'contract',
        element: <Contract></Contract>
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: 'menu',
        element:<Menu></Menu>
      },
      {
        path: 'shop',
        element: <Shop></Shop>
      },
      {
        path: 'login',
        element: <Login></Login>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
