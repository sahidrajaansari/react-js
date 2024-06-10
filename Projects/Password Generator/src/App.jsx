import { useState } from "react";

function App() {
  let [sliderValue, setSliderValue] = useState(0);
  let [password, setPassword] = useState("");

  function generatePassword() {
    let length = sliderValue;
    let result = "";
    let characters = "";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let specialCharacters = "!@#$%^&*()_+";

    characters += lowercase;

    if (document.getElementById("uppercase").checked) {
      characters += uppercase;
    }
    if (document.getElementById("Numbers").checked) {
      characters += numbers;
    }
    if (document.getElementById("specialCharacter").checked) {
      characters += specialCharacters;
    }

    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    setPassword(result);
  }

  function sliderValueChange(e) {
    setSliderValue(e.target.value);
    generatePassword();
  }

  return (
    <>
      <div
        className="bg-black flex align-top justify-center w-full h-[100vh]"
        id="container"
      >
        <div
          className="w-[70%] h-[40vh] bg-gray-800 rounded-3xl mt-20 flex-row justify-center align-center py-10"
          id="inputContainer"
        >
          <div className="flex justify-center align-center my-4">
            <input
              type="text"
              className="rounded-l-xl py-2 px-4 w-[70%] outline-none"
              name="password"
              id="passwordGenerator"
              value={password}
              readOnly
            />
            <button className="bg-blue-500 px-1 rounded-r-xl py-2 text-white w-[15%] text-center">
              Copy
            </button>
          </div>
          <div className="lg:flex sm:flex-row justify-evenly align-center my-4 text-white">
            <div className="flex justify-center">
              <input
                type="range"
                min="0"
                max="20"
                value={sliderValue}
                className="slider"
                id="sliderButton"
                onChange={sliderValueChange}
              />
              <span className="px-2" id="sliderValue">
                {sliderValue}
              </span>
            </div>

            <li className="flex justify-evenly align-center">
              <ul className="px-3 flex justify-center align-center">
                <input
                  type="checkbox"
                  name=""
                  id="specialCharacter"
                  onChange={generatePassword}
                />
                <label className="px-2" htmlFor="specialCharacter">
                  Special Character
                </label>
              </ul>
              <ul className="px-3 flex justify-center align-center">
                <input
                  type="checkbox"
                  name=""
                  id="Numbers"
                  onChange={generatePassword}
                />
                <label className="px-2" htmlFor="Numbers">
                  Numbers
                </label>
              </ul>
              <ul className="px-3 flex justify-center align-center">
                <input
                  type="checkbox"
                  name=""
                  id="uppercase"
                  onChange={generatePassword}
                />
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
