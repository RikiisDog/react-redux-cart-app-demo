import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/CartSlice";
import { cartModalReducer } from "./modal/ModalSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        cartModal: cartModalReducer,
    },
});
