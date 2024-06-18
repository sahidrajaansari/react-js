import { createContext, useContext } from "react";
const TodoContext = createContext({
  TODOS: [{ id: 1, msg: "Hello World", completed: false }],
  addTODO: (todo) => {},
  deleteTODO: (id) => {},
  toggleTODO: (id) => {},
  updateTODO: (id,todoMsg) => {},
});
export const useTodoContext = () => useContext(TodoContext);

export const TodoContextProvider = TodoContext.Provider;
