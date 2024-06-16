import { useState } from "react";
import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function InputBox() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { setUser } = useContext(UserContext);

  const handleRequest = () => {
    setUser({ name, email });
    console.log(name, email);
  };

  return (
    <div>
      <input
        className="mt-5 text-center text-slate-700 py-1 px-2 outline-none rounded-lg"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        className="mt-5 text-center text-slate-700 py-1 px-2 outline-none rounded-lg"
        type="text"
        placeholder="Enter your password"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <div className="flex justify-center items-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto my-3 py-2 px-4 rounded"
          onClick={handleRequest}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default InputBox;
