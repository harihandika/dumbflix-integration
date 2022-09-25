import React from 'react'
import { Outlet, Navigate } from "react-router-dom";

// create component here
function PrivateRoute({itAdmin}) {
  return itAdmin ? <Outlet /> : <Navigate to='/auth' />    
}

export default PrivateRoute

