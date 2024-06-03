import { useState } from "react";

function App() {
  let [color, setColor] = useState("white");

  const changeColor = (color) => {
    setColor(color);
  };
  return (
    <>
      <div
        className={`w-[100vw] h-[100vh] flex justify-center items-end`}
        style={{ backgroundColor: color }}
      >
        <div className="btnContainer bg-slate-800 w-[80vw] h-[10vh] rounded-xl mb-10 flex justify-evenly items-center px-5 py-2 ">
          <button
            className=" bg-white w-[20%] h-[80%] rounded-lg"
            onClick={() => changeColor("white")}
          ></button>
          <button
            className=" mx-2 w-[20%] h-[80%] rounded-lg"
            style={{ backgroundColor: "pink" }}
            onClick={() => changeColor("pink")}
          ></button>
          <button
            className=" mx-2 w-[20%] h-[80%] rounded-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => changeColor("blue")}
          ></button>
          <button
            className=" mx-2  w-[20%] h-[80%] rounded-lg"
            style={{ backgroundColor: "lavender" }}
            onClick={() => changeColor("lavender")}
          ></button>
          <button
            className=" mx-2 w-[20%] h-[80%] rounded-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => changeColor("red")}
          ></button>
          <button
            className=" mx-2 w-[20%] h-[80%] rounded-lg"
            style={{ backgroundColor: "orange" }}
            onClick={() => changeColor("orange")}
          ></button>
          <button
            className=" mx-2  w-[20%] h-[80%] rounded-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => changeColor("green")}
          ></button>
        </div>
      </div>
    </>
  );
}

export default App;
