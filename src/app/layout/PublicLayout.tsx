import React from "react";
import { Outlet, Navigate } from "react-router-dom";

type Props = {
  isAuthorized: boolean;
};
const PublicLayout = ({ isAuthorized }: Props) => {
  return !isAuthorized ? <Outlet /> : <Navigate to='/dashboard' />;
};

export default PublicLayout;
