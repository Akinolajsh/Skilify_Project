import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import LandingPage from "../../pages/LandingPage";
const Layout = () => {
  return (
    <div>
      <Header />
      <LandingPage/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
