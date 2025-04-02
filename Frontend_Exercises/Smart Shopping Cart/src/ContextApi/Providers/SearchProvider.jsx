import { createContext, useReducer } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const initialState = {
    searchedText: "",
  };

  const setSearchedText = (_, action) => {
    return {searchedText: action.searchedText};
  };

  const [state, dispatch] = useReducer(setSearchedText, initialState);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
