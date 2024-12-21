import { NavLink } from "react-router-dom";
import './Navbar.css'
import { SiCodechef } from "react-icons/si";


const Navbar = () => {
    const links = <div className="flex flex-col md:flex-col lg:flex-row" id="navbar">
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/allFood'>All Food</NavLink></li>
      <li><NavLink to='/gallery'>Gallery</NavLink></li>
    </div>
    return (
     <div className="bg-[#F1F8E8]">
           <div className="navbar  w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             {links}
            </ul>
          </div>
      
        <div className="flex items-center gap-2 text-[#55AD9B]">
        <a className="btn btn-ghost text-2xl font-bold">DineWise</a>
        <SiCodechef className="h-10 w-10 hidden md:block" />
        </div>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end ">
          <a className="btn text-[#55AD9B] font-bold">Login</a>
        </div>
      </div>
     </div>
    );
};

export default Navbar;