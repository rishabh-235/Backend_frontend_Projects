import React, { useState } from "react";
import ThankPage from "./ThankPage";

// Styling using CSS classes
export default function Contact() {
    const [name, setName] = useState("");
    const [showGreet, setShowGreet] = useState(false);

    const handleName = (e)=>{
        setName(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        document.getElementById('body').style.overflow = "hidden";
        setShowGreet(true);
    }

  return (
    <>
      <div className="container roboto">
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleName}
            className="name"
            type="text"
            id="name"
            placeholder="Enter Your Name Here"
            value={name}
          />

          <label htmlFor="email">Email</label>
          <input
            className="email"
            type="email"
            id="name"
            placeholder="Enter Your Email Id"
          />

          <label htmlFor="message">Message</label>
          <textarea className="message" name="message" cols="10" id="message">
            Ask from us...
          </textarea>

          <input onClick={handleSubmit} className="submit-button" type="submit" placeholder="Submit" />
        </form>
      </div>

      {showGreet && <ThankPage name={name} />}
    </>
  );
}
