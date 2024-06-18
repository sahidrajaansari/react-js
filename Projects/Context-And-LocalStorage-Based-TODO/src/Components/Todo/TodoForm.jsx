import React, { useId } from "react";
import { useState } from "react";
import { useTodoContext } from "../../Context/TodoContext";
function TodoForm() {
  const [message, setMessage] = useState("");

  //   function handleSubmit(e) {
  //     e.preventDefault();
  //   }

  const { addTODO } = useTodoContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === "") {
      console.log("Please write something");
      return;
    }
    const id = Date.now();
    const todo = {
      id,
      msg: message,
      completed: false,
    };
    setMessage("");
    console.log(todo);
    addTODO(todo);
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
