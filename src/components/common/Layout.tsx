import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Homescreen from "../../pages/HeroPage";
import CategoryPage from "../../pages/CategoryPage";
import Course from "../../pages/Course";
import Card from "../../pages/Card";
const Layout = () => {
  return (
    <div>
      <Header />
      <Homescreen/>
      <CategoryPage/>
   <Course/>
   <Card/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
