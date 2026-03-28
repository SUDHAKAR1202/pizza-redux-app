import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import pizzaReducer from "../features/pizza/pizzaSlice";
import cartReducer from "../features/cart/cartSlice";
import uiReducer from "../features/ui/uiSlice";

const loadState = () => {
    try {
        const data = localStorage.getItem("cart");
        return data ? { cart: JSON.parse(data)} : undefined;
    } catch {
        return undefined;
    }
};


export const store = configureStore({
    reducer: {
       user: userReducer,
       pizza: pizzaReducer,
       cart: cartReducer,
       ui: uiReducer
     
    }, preloadedState: loadState(),
});

store.subscribe(()=> {
    localStorage.setItem(
        "cart",
        JSON.stringify(store.getState().cart)
    )
});