import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, editTodo, removeTodo } from "../../Features/todoSlice";

const Todo = ({ todo, show = false }) => {
  const dispatch = useDispatch();
  
  const handleCheckboxChange = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleEdit = () => {
    dispatch(editTodo({ id: todo.id, msg }));
  };

  const [msg, setMsg] = useState(todo.msg);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex items-center space-x-2 mb-2 w-[80%] text-center">
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => handleCheckboxChange(todo.id)}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <input
        type="text"
        value={msg}
        className={`w-full p-2 border border-gray-300 rounded ${
          isEditing ? "bg-red-400" : "dark:bg-gray-700"
        } dark:text-gray-100 dark:border-gray-600 outline-none`}
        disabled={!isEditing}
        onChange={(e) => setMsg(e.target.value)}
      />
      {show ? (
        <>
          <button
            className={`p-2 text-white rounded ${
              isEditing
                ? "bg-blue-500 hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
                : "bg-blue-300"
            }`}
            disabled={!isEditing}
            onClick={handleEdit}
          >
            Save
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
        </>
      ) : (
        <></>
      )}
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
