import React, { useEffect } from "react";
import "./itemcard.css";
import { useContext } from "react";
import DisplayProductContext from "../../../ContextApi/Providers/DisplayProductProvider";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/Slices/State/CartSlice";

function ItemCard({ product }) {
  const { dispatch } = useContext(DisplayProductContext);
  const navigate = useNavigate();
  const reduxDispatch = useDispatch();

  const handleNavigateToProductDetails = async () => {
    await dispatch({ productId: product.id });

    navigate(`/product/${product.id}`);
  };

  return (
    <div className="card">
      <Link onClick={handleNavigateToProductDetails} className="link">
        <img className="item-image" src={product.image} alt="item" />
        <div className="item-details">
          <p className="item-name">{product.title}</p>
          <p className="item-price">${product.price}</p>
        </div>
      </Link>
      <button
        onClick={() =>
          reduxDispatch(
            addToCart({
              id: product.id,
              name: product.title,
              price: product.price,
              image: product.image,
            })
          )
        }
        className="add-to-cart"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ItemCard;
