import { useEffect, useState } from "react";
import { NavBar, Footer } from "./Components";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(theme);
    console.log(theme);
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="w-full h-screen">
          <NavBar />
          <Outlet />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
