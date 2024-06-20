import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Todo from "./Todo";
import { setTodoList } from "../../Features/todoSlice";

const TodosList = (classList = "") => {
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const show = `${classList.classList}`;
  console.log("Show ", show);
  console.log(classList);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todoList"));
    if (todos) {
      dispatch(setTodoList(todos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div
      className={`container bg-white dark:bg-gray-800 mx-auto p-4 ${classList.classList}`}
    >
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
        Todos
      </h1>

      {/* Render list of Todo components */}
      <div className="space-y-2 flex flex-col items-center">
        {todoList.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            show={show == "h-[80vh]" ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default TodosList;
