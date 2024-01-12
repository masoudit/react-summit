import React from "react";
import { Outlet, Navigate } from "react-router-dom";

type Props = {
  isPublic: boolean;
  isAuthorized: boolean;
};
const PublicLayout = ({ isPublic, isAuthorized }: Props) => {
  return isPublic && !isAuthorized ? <Outlet /> : <Navigate to='/dashboard' />;
};

export default PublicLayout;
