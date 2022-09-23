import React from 'react'
import { Outlet, Navigate } from "react-router-dom";

// create component here
function PrivateRoute({isAdmin}) {
  return isAdmin ? <Outlet /> : <Navigate to='/comeback' />    
}

export default PrivateRoute

