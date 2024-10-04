"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  // State to handle mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to handle active link
  const [activeLink, setActiveLink] = useState("Home");

  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const navblink = [
    {
      pathName: "Home",
      path: "/",
    },
    {
      pathName: "About",
      path: "/about",
    },
    {
      pathName: "Shop",
      path: "/shop",
    },
    {
      pathName: "Contact Us",
      path: "/contact_us",
    },
  ];

  return (
    <div className=" bg-white shadow-sm py-7 fixed w-full z-40 ">
      <nav className=" container mx-auto">
        <div className="container mx-auto sm:grid grid-cols-3 flex justify-between items-center px-4 sm:px-0">
          {/* Logo */}
          <div className="text-2xl font-bold ">Logo</div>

          {/* Navigation Links (Desktop) */}
          <ul className="hidden md:flex space-x-10  font-medium mx-auto ">
            {navblink.map((link) => (
              <Link
                href={link.path}
                key={link?.pathName}
                onClick={() => handleLinkClick(link.pathName)}
                className={`cursor-pointer ${
                  activeLink === link ? "text-blue-600" : "text-gray-700"
                } hover:text-blue-600 text-xl font-medium`}
              >
                {link.pathName}
              </Link>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center space-x-5  ml-auto">
            <FaSearch className="cursor-pointer text-2xl text-gray-600 hover:text-blue-600" />
            <FaUser className="cursor-pointer text-gray-600 text-2xl hover:text-blue-600" />
            <div className="relative">
              <FaShoppingBag className="cursor-pointer text-gray-600 text-2xl hover:text-blue-600" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
                2
              </span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={handleMenuClick}
            className="md:hidden text-gray-600 ml-5 hover:text-blue-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Links */}
        {isMobileMenuOpen && (
          <ul className="md:hidden bg-white border-t mt-2">
            {navblink.map((link) => (
              <Link
                href={link?.path}
                key={link?.pathName}
                onClick={() => {
                  handleLinkClick(link?.pathName);
                  setIsMobileMenuOpen(false);
                }}
                className={`block py-2 px-4 text-center ${
                  activeLink === link?.pathName
                    ? "text-blue-600"
                    : "text-gray-700"
                } hover:bg-gray-100 hover:text-blue-600 cursor-pointer`}
              >
                {link?.pathName}
              </Link>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
