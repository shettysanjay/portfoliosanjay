import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Themes from "../components/Themes";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Themes />
      <Outlet />
    </>
  );
};

export default Layout;
