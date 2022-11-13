import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { checkUserRol } from "../services/userServices";

const AdminRoles = ["User", "Admin"];
const userRoles = ["User"];

export const AdminRoutes = () => {
  const navigate = useNavigate();
  return AdminRoles.some((rol) => rol.includes(checkUserRol())) ? (
    <Outlet />
  ) : (
    navigate("/home")
  );
};

export const UserRoutes = () => {
  const navigate = useNavigate();
  return userRoles.some((rol) => rol.includes(checkUserRol())) ? (
    <Outlet />
  ) : (
    navigate("/home")
  );
};
