import React from "react";
import "./Cart.css";
import CartItem from "../cartitem/CartItem";
import CheckoutCard from "../checkoutcard/CheckoutCard";
import { useSelector } from "react-redux";

function Cart() {
    const cartitems = useSelector(state=> state.cart.cartItems);
    const totalItems = useSelector(state=> state.cart.totalItems);
    const totalAmount = useSelector(state => state.cart.totalAmount);

return (
    <div className="cart">
        <div className="total-items">{totalItems}</div>
        <div className="cart-header">
            <h1>Shopping Cart</h1>
        </div>
        <div className="cart-components">
            <div className="cart-items">
                {cartitems?.map((product, index) => (
                    <CartItem key={index} product={product} />
                ))}
            </div>
            <CheckoutCard totalAmount={totalAmount} totalItems={totalItems} />
        </div>
    </div>
);
}

export default Cart;
