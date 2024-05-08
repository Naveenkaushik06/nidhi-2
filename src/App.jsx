import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import LoginBtn from "./components/portallogin/LoginBtn";
// import AdminLogin from "./components/portallogin/AdminLogin";
import Login from "./components/portallogin/Login";
import Register from "./components/userlogin/Register";
import Signup from "./components/userlogin/Signup";
import Loans from "./components/loans/Loans";
import PrivateRoutes from "./components/privateroute/PrivateRoutes";
import Dashboard from "./components/dashboard/Dashboard";
import Dashboard2 from "./components/dashboard/Dashboard2"
import Mainsetting from "./components/settingss/Mainsetting";

function AppLayout() {
  return (
    <div>
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
        path: "/login",
        element: <PrivateRoutes />,
      },
      {
        path: "/*",
        element: <PrivateRoutes />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "transactions",
            element: <Dashboard2 />
          },
          {
            path: "settings/editprofile",
            element: <Mainsetting />
          }
        ],
      },
      {
        path: "/forgetpassword",
        element: <Login />,
      },
      {
        path: "/otpvarification",
        element: <Register />,
      },
      {
        path: "/register",
        element: <Signup />,
      },
    ],
  },
]);
export default appRouter;
