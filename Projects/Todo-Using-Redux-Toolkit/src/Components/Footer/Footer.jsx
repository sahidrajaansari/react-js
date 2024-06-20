import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 ">
      <div className="container mx-auto py-6 px-4 flex flex-col justify-between items-center">
        {/* Company Info */}
        <div className="text-gray-900 dark:text-gray-100">
          © 2024 Company Name
        </div>

        {/* Links */}
        <div className="flex space-x-4 mt-4">
          <a
            href="#"
            className="text-gray-900 dark:text-gray-100 hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-900 dark:text-gray-100 hover:underline"
          >
            Terms of Service
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-gray-900 dark:text-gray-100">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-900 dark:text-gray-100">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-900 dark:text-gray-100">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
