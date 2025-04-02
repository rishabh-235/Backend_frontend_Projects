import React, { useContext, useState } from "react";
import "./profile&setting.css";
import UserContext from "../ContextAPI/UserProvider";
import * as yup from "yup";

function ProfileAndSetting() {
  const { state, dispatch } = useContext(UserContext);
  const [user, setUser] = useState({
    email: state.user?.email ? state.user.email : "",
    username: state.user?.username ? state.user.username : "",
  });

  const schema = yup.object({
    email: yup
      .string()
      .email("Invalid email")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email format"
      )
      .required("Email is required"),
    username: yup.string().required("Username is required"),
  });
  const [errors, setErrors] = useState({
    email: "",
    username: "",
  });

  const handleUpdate = async () => {
    const userData = {
      username: user.username,
      email: user.email,
    };

    try {
      await schema.validate(userData, { abortEarly: false });
      setErrors({ email: "", username: "" });
    } catch (err) {
      const validationErrors = err.inner.reduce((acc, error) => {
        acc[error.path] = error.message;
        return acc;
      }, {});
      console.log(validationErrors);
      setErrors(validationErrors);
      return;
    }

    state.user.username || state.user.email
      ? alert("User updated successfully")
      : alert("User registered successfully");
    dispatch({ type: "UPDATE_USER", user: userData });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-details">
        <h2>Personal Details</h2>

        <div>
          <label htmlFor="username">Name: </label>
          <input
            style={{
              border: errors.username ? "1px solid red" : "none",
              width: "36rem",
              padding: "10px",
              borderRadius: "0.5rem",
              fontSize: "16px",
            }}
            onChange={handleChange}
            name="username"
            id="username"
            type="text"
            placeholder={user.username}
            value={user.username}
          />
          {errors.username && <p style={{
            color: "red",
            fontSize: "10px",
          }}>{errors.username}</p>}
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input
            style={{
              border: errors.email ? "1px solid red" : "",
            }}
            className="profile-email-input"
            onChange={handleChange}
            name="email"
            id="email"
            type="email"
            placeholder={user.email}
            value={user.email}
          />
          {errors.email && <p style={{
            color: "red",
            fontSize: "10px",
          }}>{errors.email}</p>}
        </div>

        {state.user.email || state.user.username ? (
          <button onClick={handleUpdate} className="register-btn">
            Update
          </button>
        ) : (
          <button onClick={handleUpdate} className="register-btn">
            Register
          </button>
        )}
      </div>
    </div>
  );
}

export default ProfileAndSetting;
