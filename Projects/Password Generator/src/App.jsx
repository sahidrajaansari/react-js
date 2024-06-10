import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  let [sliderValue, setSliderValue] = useState(0);
  let [charactersAllowed, setcharacterAllowed] = useState(false);
  let [numberAllowed, setnumberAllowed] = useState(false);
  let [uppercaseAllowed, setUppercaseAllowed] = useState(false);
  let [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let length = sliderValue;
    let result = "";
    let characters = "";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let specialCharacters = "!@#$%^&*()_+";
    characters += lowercase;

    if (charactersAllowed) characters += specialCharacters;
    if (numberAllowed) characters += numbers;
    if (uppercaseAllowed) characters += uppercase;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(result);
  }, [
    sliderValue,
    charactersAllowed,
    numberAllowed,
    uppercaseAllowed,
    setPassword,
  ]);

  useEffect(() => {
    generatePassword();
  }, [
    charactersAllowed,
    numberAllowed,
    uppercaseAllowed,
    length,
    generatePassword,
  ]);

  const copyPassword = useCallback(() => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(passwordRef.current.value);
  }, [passwordRef]);

  
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
              ref={passwordRef}
            />
            <button
              className="bg-blue-500 px-1 rounded-r-xl py-2 text-white w-[15%] text-center"
              onClick={copyPassword}
            >
              Copy
            </button>
          </div>

          <div className="lg:flex sm:flex-row justify-evenly align-center my-4 text-white">
            <div className="flex justify-center">
              <input
                type="range"
                min="8"
                max="20"
                value={sliderValue}
                className="slider"
                id="sliderButton"
                onChange={(e) => {
                  setSliderValue(e.target.value);
                }}
              />
              <span className="px-2" id="sliderValue">
                Length {sliderValue}
              </span>
            </div>

            <li className="flex justify-evenly align-center">
              <ul className="px-3 flex justify-center align-center">
                <input
                  type="checkbox"
                  defaultChecked={charactersAllowed}
                  name=""
                  id="specialCharacter"
                  onChange={() => {
                    setcharacterAllowed(!charactersAllowed);
                  }}
                />
                <label className="px-2" htmlFor="specialCharacter">
                  Special Character
                </label>
              </ul>
              <ul className="px-3 flex justify-center align-center">
                <input
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  name=""
                  id="Numbers"
                  onChange={() => {
                    setnumberAllowed(!numberAllowed);
                  }}
                />
                <label className="px-2" htmlFor="Numbers">
                  Numbers
                </label>
              </ul>
              <ul className="px-3 flex justify-center align-center">
                <input
                  type="checkbox"
                  defaultChecked={uppercaseAllowed}
                  name=""
                  id="uppercase"
                  onChange={() => {
                    // console.log(uppercaseAllowed);
                    uppercaseAllowed = !uppercaseAllowed;
                    setUppercaseAllowed(uppercaseAllowed);
                    console.log(uppercaseAllowed);
                  }}
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
