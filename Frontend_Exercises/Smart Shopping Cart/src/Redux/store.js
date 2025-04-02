import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './Slices/State/CartSlice';
import { productApiSlice } from './Slices/Api/ProductApiSlice';

export default configureStore({
    reducer: {
        cart: cartReducer,
        [productApiSlice.reducerPath]:productApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(productApiSlice.middleware)
});