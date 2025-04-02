import React, { useReducer, useState } from "react";
import { createContext } from "react";

export const TodoContext = createContext();

function TodoProvider({ children }) {
  const intialState = [];

  const handleTodoOperation = (state, action) => {
    switch (action.type) {
      case "add":
        return [...state, action.task];

      case "delete":
        return state.filter((_, i) => i !== action.index);

      case "update": {
        state[action.index] = action.task;
        return [...state];
      }
    }
  };

  const [state, dispatch] = useReducer(handleTodoOperation, intialState);

  return (
    <TodoContext
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </TodoContext>
  );
}

export default TodoProvider;
