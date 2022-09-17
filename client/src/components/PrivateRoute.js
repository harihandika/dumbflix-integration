// import necessary utility from rrd
import { Outlet, Navigate } from "react-router-dom";

// create component here
const PrivateRoute = () => {
  const isLogin = false;

  return isLogin == true ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
