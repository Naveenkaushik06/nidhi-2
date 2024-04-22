import React from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import LoginBtn from './Components/PortalLogin/LoginBtn';
import AdminLogin from './Components/PortalLogin/AdminLogin';
import Login from './Components/PortalLogin/Login';
import Register from './Components/UserLogin/Register';
import Signup from './Components/UserLogin/Signup';

function AppLayout() {
  return (
    <div className='p-10'>
      <Outlet />
    </div>
  )
};
const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children:
        [
          {
            path: "/",
            element: <LoginBtn />
          },
          {
            path: "/admin",
            element: <AdminLogin />,
          },
          {
            path:"/admin/adminlogin",
            element: <Login/>,
          } , 
          {
            path: "/register",
            element: <Signup/>,
          },
          {
            path: "/register/registration",
            element: <Register/>
          },
        ],
    },
  ],)
export default appRouter;
