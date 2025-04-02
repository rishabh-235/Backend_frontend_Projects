import React, { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import UserContext from "../ContextAPI/UserProvider";

function NavBar() {
  const {state} = useContext(UserContext);


  return (
    <nav>
      <Link to="/" className="link logo">
        <img
          className="logo-img"
          src="https://img.icons8.com/external-flaticons-flat-flat-icons/100/external-career-achievements-flaticons-flat-flat-icons.png"
          alt="logo"
          width="60"
          height="60"
        />
        <p className="logo-name">Career Cloud</p>
      </Link>

      <div className="home-container">
        <Link className="home" to="/">
          Home
        </Link>
        <Link to="/applications" className="home">View Applications</Link>
        <Link className="link home" to="/profile">
          <img
            src="https://img.icons8.com/ios-glyphs/100/user-male-circle.png"
            width="35"
            height="35"
            alt="profile"
          />

          <div className="loggedin-info">
            <p className="loggedin-info-name">{state.user.username}</p>
            <p className="loggedin-info-email">{state.user.email}</p>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
