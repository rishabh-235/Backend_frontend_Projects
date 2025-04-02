import React, { useEffect } from "react";
import "./searchbar.css";
import { useContext } from "react";
import SearchContext from "../../ContextApi/Providers/SearchProvider";
import UserContext from "../../ContextApi/Providers/UserProvider";

export default function SearchBar() {
  const { state:search ,dispatch } = useContext(SearchContext);
  const { state: user } = useContext(UserContext);


  useEffect(() => {
    if (!user.isUserLoggedIn)
      document.getElementById("searchbar").disabled = true;
    else document.getElementById("searchbar").disabled = false;
  }, [user.isUserLoggedIn]);

  const handlechange = (e) => {
    dispatch({
      searchedText: e.target.value,
    });
  };

  return (
    <div className="searchbar-container">
      <input
        onChange={handlechange}
        className="searchbar"
        id="searchbar"
        type="text"
        placeholder="Search Items"
        value={search.searchedText}
      />
      <img
        className="search-logo"
        src="https://img.icons8.com/fluency-systems-regular/48/search--v1.png"
        alt="search"
        width="25"
        height="25"
      />
    </div>
  );
}
