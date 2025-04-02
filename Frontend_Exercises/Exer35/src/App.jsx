import "./App.css";
import * as yup from "yup";
import { useState } from "react";

function App() {
  const userSchema = yup.object({
    name: yup
      .string()
      .min(3, "Name must be atleast 3 characters!")
      .required("Name is required!"),
    email: yup
      .string()
      .email("Invalid email formate!")
      .required("Email is required!"),
    password: yup.string().required("Password is required!"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match!")
      .required("confirm Password is required!"),
  });

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await userSchema.validate(user, { abortEarly: false });
      alert("form Submitted Sucessfully");
      setError({});
      setUser({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      const newError = {};
      error.inner.forEach((err) => {
        newError[err.path] = err.message;
      });
      setError(newError);
    }
  };

  return (
    <>
      <form action="">
        <div className="form-input">
          <label htmlFor="name">Name*</label>
          <input
            className={`${error.name ? "error-input" : ""}`}
            onChange={handleChange}
            id="name"
            name="name"
            type="text"
            value={user.name}
            placeholder="Enter Your Name"
          />
          {error.name && <div className="error-display">{error.name}</div>}
        </div>
        <div className="form-input">
          <label htmlFor="email">Email*</label>
          <input
            className={`${error.email ? "error-input" : ""}`}
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            value={user.value}
            placeholder="Enter Your Email"
          />
          {error.email && <div className="error-display">{error.email}</div>}
        </div>
        <div className="form-input">
          <label htmlFor="password">Password*</label>
          <input
            className={`${error.password ? "error-input" : ""}`}
            onChange={handleChange}
            type="password"
            id="password"
            name="password"
            value={user.password}
            placeholder="Enter Your Password"
          />
          {error.password && (
            <div className="error-display">{error.password}</div>
          )}
        </div>
        <div className="form-input">
          <label htmlFor="confirmPassword">Confirm Password*</label>
          <input
            className={`${error.confirmPassword ? "error-input" : ""}`}
            onChange={handleChange}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={user.confirmPassword}
            placeholder="Re-enter Your Password"
          />
          {error.confirmPassword && (
            <div className="error-display">{error.confirmPassword}</div>
          )}
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
}

export default App;
