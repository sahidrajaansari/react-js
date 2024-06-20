import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <header className="bg-white dark:bg-gray-800 ">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
          Logo
        </div>

        {/* Navigation */}
        <nav className="flex space-x-4">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `text-gray-900 dark:text-gray-100 ${isActive ? "font-bold" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              `text-gray-900 dark:text-gray-100 ${isActive ? "font-bold" : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/todo"}
            className={({ isActive }) =>
              `text-gray-900 dark:text-gray-100 ${isActive ? "font-bold" : ""}`
            }
          >
            Todo
          </NavLink>
        </nav>

        {/* Theme Switcher */}
        <button
          onClick={toggleTheme}
          className="text-gray-900 dark:text-gray-100"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
