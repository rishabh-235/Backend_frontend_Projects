import { createContext, useReducer } from "react";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const initialState = {
    user: {
      username: "",
      email: "",
      address: "",
    },
    isUserLoggedIn: false,
  };

  const handleUserOperation = (state, action) => {
    switch (action.type) {
      case "login":
        return { user: action.user, isUserLoggedIn: true };

      case "update":
        return { ...state, user: action.user };

      case "logout":
        return {
          user: { username: "", email: "", address: "" },
          isUserLoggedIn: false,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(handleUserOperation, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;