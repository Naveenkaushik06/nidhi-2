import React, { useState } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import LoginBtn from "./components/portallogin/LoginBtn";
import AdminLogin from "./components/portallogin/AdminLogin";
import Login from "./components/portallogin/Login";
import Register from "./components/userlogin/Register";
import Signup from "./components/userlogin/Signup";
import Dashboard from "./components/dashboard/Dashboard";
// import Header from "./components/dashboard/Header"

function AppLayout() {
  
  return (
    <div className="">
      {/* <Header /> */}
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LoginBtn />,
      },
      {
        path: "/admin/login",
        element: <AdminLogin />,
      },
      {
        path: "/admin/forgetpassword",
        element: <Login />,
      },
      {
        path: "/admin/otpvarification",
        element: <Register />,
      },
      {
        path: "/admin/register",
        element: <Signup />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
export default appRouter;
