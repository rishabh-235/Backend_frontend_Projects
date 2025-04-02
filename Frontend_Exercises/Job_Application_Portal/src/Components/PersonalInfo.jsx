import React, { useContext, useEffect, useState } from "react";
import "./personalinfo.css";
import FormDateContext from "../ContextAPI/FormDataProvider";
import * as yup from "yup";

const PersonalInfo = ({ setStep, application }) => {
  const [formData, setFormData] = useState({
    username: application?.applicantName || "",
    email: application?.email || "",
    phone: application?.phone || "",
  });
  const { dispatch } = useContext(FormDateContext);

  const schema = yup.object({
    username: yup
      .string()
      .matches(/^[A-Za-z\s]+$/, "Name should only contain letters")
      .required("Name is required"),
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email format"
      )
      .email("Invalid email")
      .required("Email is required"),
    phone: yup
      .string()
      .matches(/^[0-9]{10}$/, "Enter a valid phone number")
      .required("Phone number is required"),
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
    } catch (error) {
      const validationErrors = error.inner.reduce((acc, curr) => {
        acc[curr.path] = curr.message;
        return acc;
      }, {});
      setErrors(validationErrors);
      return;
    }

    dispatch({
      type: "personalInfo",
      personalInfo: formData,
    });

    setStep(1);
  };

  return (
    <div className="personal-info-container">
      <h1>Personal Details</h1>
      <form className="personal-info-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Name:</label>
          <input
            style={{ border: errors.username ? "1px solid red" : "" }}
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && (
            <p className="error-message">{errors.username}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            style={{ border: errors.email ? "1px solid red" : "" }}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            style={{ border: errors.phone ? "1px solid red" : "" }}
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error-message">{errors.phone}</p>}
        </div>
        <button className="next-btn" type="submit">
          Next
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;
