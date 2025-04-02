import React from "react";
import img from "../images/v2osk-1Z2niiBPg5A-unsplash.jpg";

// Styling using inline CSS
export default function Home() {
  return (
    <div
      className="hero roboto"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "91.7vh",
        zIndex: "0",
      }}
    ></div>
  );
}
