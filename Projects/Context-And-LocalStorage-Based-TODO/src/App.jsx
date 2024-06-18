import React, { useState, useEffect } from "react";
import { TodoForm, TodoItem } from "./Components";
import { TodoContextProvider } from "./Context/TodoContext";

function App() {
  const [TODOS, setTodos] = useState([]);
  // const [todo, setTodo] = useState("");

  const addTODO = (todo) => {
    setTodos([todo, ...TODOS]);
    // setTodos((prev) => [...prev, todo]);
  };

  const updateTODO = (id, todoMsg) => {
    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id ? { ...todo, msg: todoMsg } : todo
      )
    );
  };

  const toggleTODO = (id) => {
    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTODO = (id) => {
    setTodos(TODOS.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    const todosLocal = JSON.parse(localStorage.getItem("todos"));
    if (todosLocal && todosLocal.length > 0) {
      setTodos(todosLocal);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(TODOS));
  }, [TODOS]);

  return (
    <>
      <TodoContextProvider
        value={{ TODOS, addTODO, updateTODO, toggleTODO, deleteTODO }}
      >
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">{<TodoForm />}</div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {TODOS.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </TodoContextProvider>
    </>
  );
}

export default App;
