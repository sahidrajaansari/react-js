import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

function ThemeIcon() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  if (theme === "light") {
    return <i className="fas fa-sun text-yellow-500 text-2xl" onClick={toggleTheme}></i>;
  }
  return <i className="fas fa-moon text-white text-2xl" onClick={toggleTheme}></i>;
}

export default ThemeIcon;
