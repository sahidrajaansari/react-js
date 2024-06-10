import { useState } from "react";

function App() {
  let [sliderValue, setSliderValue] = useState(0);


  return (
    <>
      <div
        className="bg-black flex align-top justify-center w-full h-[100vh]"
        id="container"
      >
        <div
          className="w-[70%] h-[30%] bg-gray-800 rounded-3xl mt-20 flex-row justify-center align-center py-10"
          id="inputContainer"
        >
          <div className="flex justify-center align-center my-4">
            <input
              type="text"
              className="rounded-l-xl py-2 px-4 w-[70%] outline-none"
              name="password"
              id="passwordGenerator"
              readOnly
            />
            <button className="bg-blue-500 px-4 rounded-r-xl py-2 text-white w-[15%]">
              Copy
            </button>
          </div>
          <div className="flex sm:flex-row justify-evenly align-center my-4 text-white flex-wrap">

            <div className="flex justify-center">
              <input
                type="range"
                min="0"
                max="100"
                className="slider"
                id="sliderButton"
                onChange={(e) => setSliderValue(e.target.value)}
              />
              <span className="px-2" id="sliderValue">
                {sliderValue}
              </span>
            </div>

            <li className="flex justify-evenly align-center">
              <ul className="px-3 flex justify-center align-center">
                <input type="checkbox" name="" id="specialCharacter" />
                <label className="px-2" htmlFor="specialCharacter">
                  Special Character
                </label>
              </ul>
              <ul className="px-3 flex justify-center align-center">
                <input type="checkbox" name="" id="Numbers" />
                <label className="px-2" htmlFor="Numbers">
                  Numbers
                </label>
              </ul>
              <ul className="px-3 flex justify-center align-center">
                <input type="checkbox" name="" id="uppercase" />
                <label className="px-2" htmlFor="uppercase">
                  Uppercase
                </label>
              </ul>
            </li>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
