import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Features/todoSlice";

const InputBox = () => {
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();

  function AddTodo(e) {
    e.preventDefault();
    console.log("Add Todo");
    const todo = {
      id: Date.now(),
      msg: msg,
      isCompleted: false,
    };
    dispatch(addTodo(todo));
    setMsg("");
  }

  return (
    <div className="mt-10 p-4">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Add Todo
      </h1>

      {/* Add do Input */}
      <div >
        <form className="flex items-center space-x-2 mb-4" onSubmit={AddTodo}>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600 outline-none"
            placeholder="Add a new todo..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputBox;
