import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../Provider/ThemeProvider";

const MainLayOut = () => {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div className="dark:text-white">
      <Navbar></Navbar>
      <div className="min-h-[350px] pt-16">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
