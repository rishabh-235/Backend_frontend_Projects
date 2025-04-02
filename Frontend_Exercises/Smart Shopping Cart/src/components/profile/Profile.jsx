import React, { useState } from "react";
import "./Profile.css";
import { useContext } from "react";
import UserContext from "../../ContextApi/Providers/UserProvider";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { state, dispatch } = useContext(UserContext);
  const [user, setUser] = useState(state.user);
  const navigate = useNavigate();

  const handleLogout = ()=>{
    dispatch({
        type:"logout"
    })

    navigate("/");
  }

  const handleUpdate = () => {

    dispatch({
        type:"update",
        user: user,
    })
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
            onChange={handleChange}
            name="username"
            id="username"
            type="text"
            placeholder={user.username}
            value={user.username}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            onChange={handleChange}
            name="email"
            id="email"
            type="email"
            placeholder={user.email}
            value={user.email}
          />
        </div>
        <div>
          <label htmlFor="address">Address: </label>
          <input
            onChange={handleChange}
            name="address"
            type="text"
            id="address"
            placeholder={user.address}
            value={user.address}
          />
        </div>
        <button onClick={handleUpdate} className="register-btn">Update</button>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>

    </div>
  );
}

export default Profile;
