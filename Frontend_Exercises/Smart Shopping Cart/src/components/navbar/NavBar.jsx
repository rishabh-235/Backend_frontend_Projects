import React from "react";
import "./navbar.css";
import SearchBar from "../searchbar/SearchBar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../ContextApi/Providers/UserProvider";

function NavBar() {
  const { state } = useContext(UserContext);

  return (
    <nav>
      <Link
        to={`${state.isUserLoggedIn ? "/products" : "/"}`}
        className="link logo"
      >
        <img
          className="logo-img"
          src="https://img.icons8.com/clouds/100/shopify.png"
          alt="logo"
          width="60"
          height="60"
        />
        <p className="logo-name">Shopping Cloud</p>
      </Link>

      <SearchBar />

      <div className="home-container">
        <Link
          className="home"
          to={`${state.isUserLoggedIn ? "/products" : "/"}`}
        >
          Home
        </Link>
        <Link className="link home" to={`${state.isUserLoggedIn ? "/profile" : "/"}`}>
          {state.isUserLoggedIn ? <img
            src="https://img.icons8.com/ios-glyphs/100/user-male-circle.png"
            width="35"
            height="35"
            alt="profile"
          /> : "Register"}
        </Link>
        <Link to={`${state.isUserLoggedIn ? "/cart" : "/"}`}>
          <img
            src="https://img.icons8.com/ios-filled/100/shopping-cart.png"
            alt="cart"
            width="35"
            height="35"
          />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
