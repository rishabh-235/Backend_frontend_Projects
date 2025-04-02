import React, { useContext } from "react";
import { useSelector } from "react-redux";
import ItemCard from "../itemcard/ItemCard";
import "./items.css";
import { useGetAllProductsQuery } from "../../../Redux/Slices/Api/ProductApiSlice";
import SearchContext from "../../../ContextApi/Providers/SearchProvider";
import CheckoutCard from "../../cartcomponents/checkoutcard/CheckoutCard";

function Items() {
  const { data: products } = useGetAllProductsQuery();
  const { state } = useContext(SearchContext);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  let searchededProducts = products;

  if (state.searchedText === "") {
    searchededProducts = products;
  } else {
    searchededProducts = products?.filter((product) =>
      product.title.toLowerCase().includes(state.searchedText.toLowerCase())
    );
  }

  return (
    <div className="items-container">
      <h1>Products</h1>
      <div className="item-summary-container">
        <div className="items-list">
          {searchededProducts?.map((product, index) => (
            <ItemCard key={index} product={product} />
          ))}
        </div>

        <CheckoutCard totalAmount={totalAmount} />
      </div>
    </div>
  );
}

export default Items;
