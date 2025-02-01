import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../Assets/code.png';

const Navbar = () => {
    const location = useLocation();

    const navItems = <>
        <li className="mx-2">
            <Link 
                to="/" 
                className={`px-3 py-2 transition-all duration-300 rounded-md 
                ${location.pathname === '/' ? 'text-indigo-500 bg-gray-800' : 'text-white hover:text-indigo-400 hover:bg-gray-700'}`}
            >
                Home
            </Link>
        </li>
        <li className="mx-2">
            <Link 
                to="/about" 
                className={`px-3 py-2 transition-all duration-300 rounded-md 
                ${location.pathname === '/about' ? 'text-indigo-500 bg-gray-800' : 'text-white hover:text-indigo-400 hover:bg-gray-700'}`}
            >
                About
            </Link>
        </li>
        <li className="mx-2">
            <Link 
                to="/projects" 
                className={`px-3 py-2 transition-all duration-300 rounded-md 
                ${location.pathname === '/projects' ? 'text-indigo-500 bg-gray-800' : 'text-white hover:text-indigo-400 hover:bg-gray-700'}`}
            >
                Projects
            </Link>
        </li>
        <li className="mx-2">
            <Link 
                to="/blog" 
                className={`px-3 py-2 transition-all duration-300 rounded-md 
                ${location.pathname === '/blog' ? 'text-indigo-500 bg-gray-800' : 'text-white hover:text-indigo-400 hover:bg-gray-700'}`}
            >
                Blog
            </Link>
        </li>
    </>;

    return (
        <div className="container mx-auto sticky top-0 z-30 shadow-md">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-900 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="w-12" />
                        <Link to="/" className="text-white text-xl font-bold ml-2">SRABON</Link>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>

                <div className="navbar-end">
                    <Link to="/contact" className="btn btn-outline border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-300">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
