import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import { SiCodechef } from "react-icons/si";
import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const links = (
    <div className="flex flex-col md:flex-col lg:flex-row" id="navbar">
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/allFood'>All Food</NavLink></li>
      <li><NavLink to='/gallery'>Gallery</NavLink></li>
    </div>
  );

  return (
    <div className="bg-[#F1F8E8] backdrop-blur-lg bg-opacity-80 fixed top-0 left-0 w-full z-50">
      <div className="navbar w-11/12 mx-auto">
        {/* Navbar Start */}
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

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-4">
          {user ? (
            <div className="relative flex items-center gap-4" ref={dropdownRef}>
              {/* User Profile */}
              {user.photoURL && (
                <div
                  className="avatar cursor-pointer"
                  onClick={handleDropdownToggle}
                >
                  <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                    <img
                      referrerPolicy="no-referrer"
                      src={user.photoURL}
                      alt="User Avatar"
                    />
                  </div>
                </div>
              )}

              {/* Logout Button for md and lg screens */}
              <button
                onClick={logOut}
                className="hidden md:block btn btn-secondary"
              >
                Logout
              </button>

              {/* Dropdown for sm screens */}
              {dropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-md rounded-lg z-50">
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/myFood"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        My Foods
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/addFood"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Add Food
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/myOrders"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        My Orders
                      </Link>
                    </li>
                    {/* Logout Button for sm screens */}
                    <li>
                      <button
                        onClick={logOut}
                        className="block md:hidden w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="btn bg-[#55AD9B]">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
