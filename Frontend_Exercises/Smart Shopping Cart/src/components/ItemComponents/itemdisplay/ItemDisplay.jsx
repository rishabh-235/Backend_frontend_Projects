import React, { useEffect, useState } from "react";
import "./itemdisplay.css";
import { useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../../../Redux/Slices/Api/ProductApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../Redux/Slices/State/CartSlice";
import { useNavigate } from "react-router-dom";

function ItemDisplay() {
  const { productid } = useParams();
  const { data: products } = useGetAllProductsQuery();
  const product = products?.find((item) => item.id === Number(productid));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cartItems);
  const [productInCart, setProductInCart] = useState(false);

  useEffect(() => {
    if (cart.findIndex((item) => item.id === Number(productid))!==-1) {
      setProductInCart(true);
    } else setProductInCart(false);
  }, [cart]);

  return (
    <div className="item-display">
      <button onClick={()=>navigate("/")} className="back-btn"> Go Back </button>

      <div>
        <img src={product?.image} alt="product" />
      </div>

      <div className="item-details">
        <h3 className="item-name">{product?.title}</h3>
        <div className="rating">
          <div className="rating-stars">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width="25"
                height="25"
                style={{
                  shapeRendering: "geometricPrecision",
                  textRendering: "geometricPrecision",
                  imageRendering: "optimizeQuality",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                }}
                viewBox="0 0 6.827 6.827"
              >
                <path
                  style={{ fill: "#ff8f00", fillRule: "nonzero" }}
                  d="m3.51 1.252.546 1.536 1.628.043.29.008-.23.176-1.293.993.463 1.563.082.277-.239-.163-1.344-.923-1.343.923-.239.164.082-.278.462-1.564-1.292-.992-.23-.176.29-.008 1.63-.044.544-1.535.097-.274z"
                />
                <path
                  style={{ fill: "#ff8f00", fillRule: "nonzero" }}
                  d="m3.51 1.252.546 1.536 1.628.043.29.008-.23.176-1.293.993.463 1.563.082.277-.239-.163-1.344-.923-1.343.923-.239.164.082-.278.462-1.564-1.292-.992-.23-.176.29-.008 1.63-.044.544-1.535.097-.274z"
                />
                <path style={{ fill: "none" }} d="M0 0h6.827v6.827H0z" />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width="25"
                height="25"
                style={{
                  shapeRendering: "geometricPrecision",
                  textRendering: "geometricPrecision",
                  imageRendering: "optimizeQuality",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                }}
                viewBox="0 0 6.827 6.827"
              >
                <path
                  style={{ fill: "#ff8f00", fillRule: "nonzero" }}
                  d="m3.51 1.252.546 1.536 1.628.043.29.008-.23.176-1.293.993.463 1.563.082.277-.239-.163-1.344-.923-1.343.923-.239.164.082-.278.462-1.564-1.292-.992-.23-.176.29-.008 1.63-.044.544-1.535.097-.274z"
                />
                <path
                  style={{ fill: "#ff8f00", fillRule: "nonzero" }}
                  d="m3.51 1.252.546 1.536 1.628.043.29.008-.23.176-1.293.993.463 1.563.082.277-.239-.163-1.344-.923-1.343.923-.239.164.082-.278.462-1.564-1.292-.992-.23-.176.29-.008 1.63-.044.544-1.535.097-.274z"
                />
                <path style={{ fill: "none" }} d="M0 0h6.827v6.827H0z" />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width="25"
                height="25"
                style={{
                  shapeRendering: "geometricPrecision",
                  textRendering: "geometricPrecision",
                  imageRendering: "optimizeQuality",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                }}
                viewBox="0 0 6.827 6.827"
              >
                <path
                  style={{ fill: "#ff8f00", fillRule: "nonzero" }}
                  d="m3.51 1.252.546 1.536 1.628.043.29.008-.23.176-1.293.993.463 1.563.082.277-.239-.163-1.344-.923-1.343.923-.239.164.082-.278.462-1.564-1.292-.992-.23-.176.29-.008 1.63-.044.544-1.535.097-.274z"
                />
                <path
                  style={{ fill: "#ff8f00", fillRule: "nonzero" }}
                  d="m3.51 1.252.546 1.536 1.628.043.29.008-.23.176-1.293.993.463 1.563.082.277-.239-.163-1.344-.923-1.343.923-.239.164.082-.278.462-1.564-1.292-.992-.23-.176.29-.008 1.63-.044.544-1.535.097-.274z"
                />
                <path style={{ fill: "none" }} d="M0 0h6.827v6.827H0z" />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width="25"
                height="25"
                style={{
                  shapeRendering: "geometricPrecision",
                  textRendering: "geometricPrecision",
                  imageRendering: "optimizeQuality",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                }}
                viewBox="0 0 6.827 6.827"
              >
                <path
                  style={{ fill: "#ff8f00", fillRule: "nonzero" }}
                  d="m3.51 1.252.546 1.536 1.628.043.29.008-.23.176-1.293.993.463 1.563.082.277-.239-.163-1.344-.923-1.343.923-.239.164.082-.278.462-1.564-1.292-.992-.23-.176.29-.008 1.63-.044.544-1.535.097-.274z"
                />
                <path
                  style={{ fill: "#ff8f00", fillRule: "nonzero" }}
                  d="m3.51 1.252.546 1.536 1.628.043.29.008-.23.176-1.293.993.463 1.563.082.277-.239-.163-1.344-.923-1.343.923-.239.164.082-.278.462-1.564-1.292-.992-.23-.176.29-.008 1.63-.044.544-1.535.097-.274z"
                />
                <path style={{ fill: "none" }} d="M0 0h6.827v6.827H0z" />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width="25"
                height="25"
                style={{
                  shapeRendering: "geometricPrecision",
                  textRendering: "geometricPrecision",
                  imageRendering: "optimizeQuality",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                }}
                viewBox="0 0 6.827 6.827"
              >
                <path
                  style={{ fill: "#ff8f00", fillRule: "nonzero" }}
                  d="m3.51 1.252.546 1.536 1.628.043.29.008-.23.176-1.293.993.463 1.563.082.277-.239-.163-1.344-.923-1.343.923-.239.164.082-.278.462-1.564-1.292-.992-.23-.176.29-.008 1.63-.044.544-1.535.097-.274z"
                />
                <path
                  style={{ fill: "#ff8f00", fillRule: "nonzero" }}
                  d="m3.51 1.252.546 1.536 1.628.043.29.008-.23.176-1.293.993.463 1.563.082.277-.239-.163-1.344-.923-1.343.923-.239.164.082-.278.462-1.564-1.292-.992-.23-.176.29-.008 1.63-.044.544-1.535.097-.274z"
                />
                <path style={{ fill: "none" }} d="M0 0h6.827v6.827H0z" />
              </svg>
            </span>
          </div>
          <p className="rating-count">{product?.rating?.count} reviews</p>
        </div>

        <div className="horizontal-divider"></div>

        <p className="item-category">
          <span>Category: </span>
          {product?.category}
        </p>
        <p className="item-specification">
          <span>Specifications: </span>
          {product?.description}
        </p>
      </div>

      <div className="vertical-divider"></div>

      <div className="item-description">
        <h2>${product?.price}</h2>
        <div className="delivery-time">
          <img
            src="https://img.icons8.com/ios/100/in-transit--v1.png"
            alt="logo"
          />
          <div className="delivery-details">
            <h5>Delivery</h5>
            <p>December 1, 2025</p>
          </div>
        </div>

        <div className="horizontal-divider"></div>

        <div className="delivery-address">
          <span>Deliver to:</span> 123, Main Street, New York
        </div>

        <div className="delivery-address availability">
          <span>Availability:</span> In Stock
        </div>

        <div className="horizontal-divider"></div>

        <div className="buy-buttons">
          <button
            onClick={() => {
              dispatch(
                addToCart({
                  id: product?.id,
                  name: product?.title,
                  price: product?.price,
                  image: product?.image,
                })
              );

              navigate("/cart");
            }}
            className="add-to-cart"
          >
            Buy Now
          </button>
          {productInCart ? (
            <button
              onClick={() => {
                dispatch(
                  removeFromCart({id: Number(productid)})
                );
              }}
              className="add-to-cart-2"
            >
              Remove from Cart
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(
                  addToCart({
                    id: product?.id,
                    name: product?.title,
                    price: product?.price,
                    image: product?.image,
                  })
                );
              }}
              className="add-to-cart-2"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDisplay;
