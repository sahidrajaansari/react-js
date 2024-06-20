import React, { useState } from "react";
import InputBox from "../InputBox/InputBox";
import { TodosList } from "../index";
const Home = () => {
  return (
    <div className="w-full p-4 mx-auto my-0 bg-white dark:bg-gray-800 h-[80vh]">
      <InputBox />
      <TodosList />
    </div>
  );
};

export default Home;
