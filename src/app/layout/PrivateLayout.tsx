import React from "react";
import { Navigate, Outlet } from "react-router-dom";

type Props = {
  isAuthorized: boolean;
};
const PrivateLayout = ({ isAuthorized }: Props) => {
  return isAuthorized ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateLayout;
