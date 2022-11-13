import { createContext, useEffect, useState, useContext } from "react";
import React from "react";

export const checkUserRol = () => {
  const userData = JSON.parse(localStorage.getItem("token"));
  return userData ? userData.rol.nombre : "not logged";
};

export const getUserData = () => {
  const userData = JSON.parse(localStorage.getItem("token"));
  return userData?.token ? userData.token : null;
};

export const getUserToken = () => {
  const userData = JSON.parse(localStorage.getItem("token"));
  return userData ? userData : "not token avaiable (probably not logged)";
};

export const logIn = (user) => {
  localStorage.setItem("token", JSON.stringify(user));
};

export const logOut = () => {
  localStorage.removeItem("token");
};
