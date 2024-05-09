import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import LoginBtn from "./components/portallogin/LoginBtn";
// import AdminLogin from "./components/portallogin/AdminLogin";
import Login from "./components/portallogin/Login";
import Register from "./components/userlogin/Register";
import Signup from "./components/userlogin/Signup";
import Loans from "./components/loans/Loans";
import PrivateRoutes from "./components/privateroute/PrivateRoutes";


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

      },
    
      {

      },
     
      {
        path: "/otpvarification",
        element: <Register />,
      },
      {
        path: "/register",
        element: <Signup />,
      },
      {
        path: "/loans",
        element: <Loans/>,
      },
    ],
  },
]);
export default appRouter;
