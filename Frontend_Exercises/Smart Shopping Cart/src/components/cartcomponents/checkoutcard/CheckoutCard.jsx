import React from "react";
import "./CheckoutCard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../Redux/Slices/State/CartSlice";


function CheckoutCard({ totalAmount }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="checkout-card">
      <h1>Cart Summary</h1>
      <h2>${totalAmount.toFixed(2)}</h2>
      <div className="checkout-card-details">
        <p>Subtotal</p>
        <p>${totalAmount === 0 ? 0 : (totalAmount + 15 + 7.46).toFixed(2)}</p>
      </div>

      <div className="checkout-card-details">
        <p>Delivery</p>
        <p>${totalAmount === 0 ? 0 : 15}</p>
      </div>

      <div className="checkout-card-details">
        <p>Tax</p>
        <p>${totalAmount === 0 ? 0 : 7.46}</p>
      </div>

      <div className="checkout-card-details">
        <p>Total</p>
        <p>${totalAmount.toFixed(2)}</p>
      </div>

      <div className="checkout-btn-div">
        <button
          onClick={() => {
            dispatch(clearCart())
            navigate("/confimation");
          }}
          className="checkout-btn"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CheckoutCard;
