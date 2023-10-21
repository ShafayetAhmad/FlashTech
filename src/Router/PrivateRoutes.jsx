/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Components/Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) return <h1>Loading</h1>;

  if (user) return children;

  console.log(location.pathname);
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
