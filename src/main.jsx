import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./pages/Home/Home/Home";
import Contract from "./pages/Contract/Contract";
import Menu from "./pages/Menu/Menu";
import Shop from "./pages/Shop/Shop";
import Login from "./pages/Login/Login";
import Registration from "./pages/Login/Registration";
import AuthProviders from "./Providers/AuthProviders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./layouts/Dashboard";
import MyCart from "./pages/Dashboard/Users/MyCart/MyCart";
import UserHome from "./pages/Dashboard/Users/UserHome/UserHome";
import Reservation from "./pages/Dashboard/Users/Reservation/Reservation";
import PaymentHistory from "./pages/Dashboard/Users/PaymentHistory/PaymentHistory";
import AddReview from "./pages/Dashboard/Users/AddReview/AddReview";
import MyBooking from "./pages/Dashboard/Users/MyBooking/MyBooking";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import AdminHome from "./pages/Dashboard/Admin/AdminHome/AdminHome";
import AddItems from "./pages/Dashboard/Admin/AddItems/AddItems";
import ManageItems from "./pages/Dashboard/Admin/ManageItems/ManageItems";
import ManageBookings from "./pages/Dashboard/Admin/ManageBookings/ManageBookings";
import AllUsers from "./pages/Dashboard/Admin/AllUsers/AllUsers";
import AdminRoutes from "./PrivateRoutes/AdminRoutes";

const queryClient = new QueryClient();

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
        path: "contract",
        element: <Contract></Contract>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "shop/:category",
        element: <Shop></Shop>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path:'dashboard',
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children: [
      {
        path:'user/home',
        element: <UserHome></UserHome>
      },
      {
        path:'reservation',
        element: <Reservation></Reservation>
      },
      {
        path:'payment-history',
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path:'mycart',
        element: <MyCart></MyCart>
      },
      {
        path:'review',
        element: <AddReview></AddReview>
      },
      {
        path:'booking',
        element: <MyBooking></MyBooking>
      },
      {
        path:'admin/home',
        element: <AdminHome></AdminHome>
      },
      {
        path:'add-items',
        element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
      },
      {
        path:'manage-items',
        element: <ManageItems></ManageItems>
      },
      {
        path:'manage-bookings',
        element: <ManageBookings></ManageBookings>
      },
      {
        path:'allusers',
        element: <AllUsers></AllUsers>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </AuthProviders>
  </React.StrictMode>
);
