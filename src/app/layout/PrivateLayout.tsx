import React from "react";
import { Navigate, Outlet } from "react-router-dom";

type Props = {
  isPublic: boolean;
  isAuthorized: boolean;
};
const PrivateLayout = ({ isPublic, isAuthorized }: Props) => {
  return isAuthorized ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateLayout;
