import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // For mobile menu icons
import logo from "../../Assets/code.png";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <div className="container mx-auto sticky top-0 z-40 shadow-md bg-gray-900/80 backdrop-blur-lg">
      <div className="flex justify-between items-center py-3 px-4 lg:px-8">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-12" />
          <Link to="/" className="text-white text-2xl font-bold ml-3">
            SRABON
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden lg:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-5 py-2 border rounded-lg transition-all duration-300 
              ${
                location.pathname === item.path
                  ? "border-blue-500 bg-blue-600/30 text-white"
                  : "border-gray-500 bg-gray-500/20 text-gray-300"
              } 
              hover:scale-105 hover:bg-blue-600/30 hover:border-blue-500 hover:text-white`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side: Contact Button (Desktop) */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="px-5 py-2 border border-indigo-500 text-indigo-400 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-indigo-500/30 hover:text-white"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-4 py-4 bg-gray-800/90">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`w-full text-center py-2 border-b transition-all duration-300 ${
                location.pathname === item.path
                  ? "text-white border-blue-500 bg-blue-600/30"
                  : "text-gray-300 border-gray-600"
              } hover:text-white hover:bg-blue-600/30`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2 border border-indigo-500 text-indigo-400 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-indigo-500/30 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
