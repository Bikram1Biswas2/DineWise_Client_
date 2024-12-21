import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";



const MainLayOut = () => {
    return (
        <div className="">
           <Navbar></Navbar>
          <div className="min-h-[350px] pt-16">
          <Outlet></Outlet>
          </div>
           <Footer></Footer>
        </div>
    );
};

export default MainLayOut;