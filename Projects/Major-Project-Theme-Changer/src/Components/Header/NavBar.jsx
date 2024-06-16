import React from "react";
import { NavLink } from "react-router-dom";
import ThemeIcon from "./ThemeIcon";

function NavBar() {
  return (
    <>
      <div className="flex justify-between items-center px-5 py-3 bg-navBackgroundLight text-navBackgroundDark dark:bg-navBackgroundDark dark:text-navBackgroundLight">
        <div className="lg:w-[25%] w-[50%] flex justify-center items-center">
          <h1 className="font-platypi text-2xl text-center font-extrabold select-none">
            SummifyAI
          </h1>
        </div>
        <div className="px-10 lg:w-[40%] w-[0%] flex justify-evenly items-center  font-platypi">
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` text-base hover:text-orange-600 ${
                isActive ? "text-orange-500" : "text-navBackgroundDark dark:text-navBackgroundLight"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/how-it-works"
            className={({ isActive }) =>
              ` text-base hover:text-orange-600 ${
                isActive ? "text-orange-500" : "text-navBackgroundDark dark:text-navBackgroundLight"
              }`
            }
          >
            How it works
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-base hover:text-orange-600 ${
                isActive ? "text-orange-500" : "text-navBackgroundDark dark:text-navBackgroundLight"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="lg:w-[25%] w-[50%] flex justify-evenly items-center ">
          <button className=" hover:text-orange-600 text-xs">Login</button>
          <button className=" bg-orange-700 rounded-full p-3 py-2 font-semibold hover:bg-red-600 hover:text-white dark:hover:bg-navBackgroundLight dark:hover:text-orange-600 text-xs">
            Sign Up
          </button>
          <ThemeIcon />
        </div>
      </div>
    </>
  );
}

export default NavBar;
