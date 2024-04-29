import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../dashboard/Header';
import Sidebar from '../dashboard/Sidebar'

const PrivateRoutesComponents = () => {
    // console.log(handleLogout);
  return (
    <div>
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default PrivateRoutesComponents;