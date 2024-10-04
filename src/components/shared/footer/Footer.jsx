import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section: Logo, Store Name, and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-600 pb-4 mb-4 space-y-4 md:space-y-0">
          {/* Logo and Store Name */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">3legant.</h1>
            <span className="text-gray-400">Headphone Store</span>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">Product</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Bottom Section: Copyright and Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright and Policies */}
          <div className="text-center md:text-left text-gray-400">
            <p>
              Copyright © 2023 <span className="font-bold">3legant</span>. All
              rights reserved
            </p>
            <div className="flex justify-center md:justify-start space-x-4 text-sm mt-2">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6">
            <a href="#" aria-label="Instagram" className="hover:text-gray-200">
              <FaInstagram size={24} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gray-200">
              <FaFacebookF size={24} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-200">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
