import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../dashboard/Header';
import Sidebar from '../dashboard/Sidebar';

const PrivateRoutesComponent = () => (
    <div>
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );

const PrivateRoutes = () => {
    const [isAuthenticated] = useState(true) ;

    if(isAuthenticated){
        return <PrivateRoutesComponent/>
    }else{
        return <Navigate to= {"/login"}/>;
    }
}

export default PrivateRoutes;