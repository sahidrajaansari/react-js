import { useState } from "react";
import { Header, Footer } from "./Components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="w-full h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
