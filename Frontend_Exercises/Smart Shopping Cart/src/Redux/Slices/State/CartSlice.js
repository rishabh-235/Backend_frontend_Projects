import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, name, price, image } = action.payload;
      const index = state.cartItems.findIndex((item) => item.id === id);
      if (index === -1) {
        state.cartItems.push({
          id,
          name,
          price,
          image,
          quantity: 1,
        });
      } else {
        state.cartItems[index].quantity += 1;
      }
      state.totalItems += 1;
      state.totalAmount += price;
    },
    removeFromCart(state, action) {
      const { id } = action.payload;
      const product = state.cartItems.find((item) => item.id === id);
      state.totalItems -= product.quantity;
      state.totalAmount -= product.price * product.quantity;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== id
      );
    },
    updateQuantity(state, action) {
      const { id } = action.payload;
      const index = state.cartItems.findIndex((item) => item.id === id);
      if (action.payload.type === "increase") {
        state.cartItems[index].quantity += 1;
        state.totalItems += 1;
        state.totalAmount += state.cartItems[index].price;
      } else {
        state.totalItems -= 1;
        state.totalAmount -= state.cartItems[index].price;
        if (state.cartItems[index].quantity === 1) {
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
        } else {
          state.cartItems[index].quantity -= 1;
        }
      }
    },
    clearCart(state, _){
      state.cartItems = [];
      state.totalAmount=0;
      state.totalItems=0;
    }
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
