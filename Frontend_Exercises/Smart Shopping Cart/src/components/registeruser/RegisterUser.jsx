import React, { use } from "react";
import "./RegisterUser.css";
import { useContext } from "react";
import UserContext from "../../ContextApi/Providers/UserProvider";

function RegisterUser() {
  const { dispatch } = useContext(UserContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const address = e.target[2].value;

    dispatch({
      type: "login",
      user: { username, email, address},
    });

    e.target.reset();
  };

  return (
    <div className="register-user-container">
      <h1>Register User</h1>
      <form onSubmit={handleRegister} className="register-form">
        <div>
          <label htmlFor="username">Name</label>
          <input
            name="username"
            id="username"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            name="address"
            type="text"
            id="address"
            placeholder="Enter your address"
          />
        </div>
        <input type="submit" placeholder="Register" className="register-btn" />
      </form>
    </div>
  );
}

export default RegisterUser;
