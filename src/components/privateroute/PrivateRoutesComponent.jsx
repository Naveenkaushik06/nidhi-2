import React, { useState } from "react";
import Header from "../dashboard/Header";
import Sidebar from "../dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const PrivateRoutesComponent = ({isAuthenticated,onLogout}) => {
  // console.log(isAuthenticated);
  // console.log(onLogout);
  return (
    <div>
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default PrivateRoutesComponent;

