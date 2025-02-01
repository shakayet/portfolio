import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Assets/code.png";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <div className="container mx-auto sticky top-0 z-30 shadow-md bg-gray-900/80 backdrop-blur-lg">
      <div className="navbar py-3">
        {/* Left Side: Logo */}
        <div className="navbar-start flex items-center">
          <img src={logo} alt="Logo" className="w-12" />
          <Link to="/" className="text-white text-2xl font-bold ml-3">
            SRABON
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center px-5 py-2 border rounded-lg transition-all duration-300 
                  ${
                    location.pathname === item.path
                      ? "border-blue-500 bg-blue-600/30 text-white"
                      : "border-gray-500 bg-gray-500/20 text-gray-300"
                  } 
                  hover:scale-105 hover:bg-blue-600/30 hover:border-blue-500 hover:text-white`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Contact Button */}
        <div className="navbar-end">
          <Link
            to="/contact"
            className="px-5 py-2 border border-indigo-500 text-indigo-400 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-indigo-500/30 hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
