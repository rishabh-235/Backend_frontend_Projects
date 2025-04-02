import React from "react";
import "./CartItem.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../../../Redux/Slices/State/CartSlice";

function CartItem({product}) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <Link to={`/product/${product.id}`}>
        <img
          className="cart-item-img"
          src={product.image}
          alt="product"
        />
        </Link>
        <div className="cart-item-details">
          <div>
            <Link to="/product" className="link cart-item-name">
              {product.name}
            </Link>
            <p className="cart-item-color">Color: Blue</p>
          </div>
          <div className="cart-delivery-time">
            <img
              src="https://img.icons8.com/ios/100/in-transit--v1.png"
              alt="logo"
            />
            <div className="cart-delivery-details">
              <h5>Delivery</h5>
              <p>December 1, 2025</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-item-buy">
        <div className="cart-item-quan">
          <button onClick={()=>dispatch(updateQuantity({type:"decrease", id:product.id}))} className="quan-btn">-</button>
          <span>{product.quantity}</span>
          <button onClick={()=>dispatch(updateQuantity({type:"increase", id:product.id}))} className="quan-btn">+</button>
        </div>
        <div className="cart-item-price">
          <p>${product.price}</p>
        </div>

        <button onClick={()=>dispatch(removeFromCart({id:product.id}))} className="cart-item-remove">
          <img src="https://img.icons8.com/ios/50/delete-sign--v1.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
