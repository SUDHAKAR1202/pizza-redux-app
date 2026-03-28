import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  removeFromCart,
  calculateTotal,
  clearCart,
} from "../features/cart/cartSlice";

import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [items, dispatch]);

  return (
  <div className="cart-container">
  <h2>Your Cart 🛒</h2>

  {items.map((item, index) => (
    <div className="cart-item" key={index}>
      <p>{item.size} | {item.crust}</p>
      <p>{item.toppings.join(", ")}</p>
      <p>₹{item.price}</p>

      <button onClick={() => dispatch(removeFromCart(index))}>
        Remove
      </button>
    </div>
  ))}

  <div className="total-box">Total: ₹{total}</div>

  <button
    className="checkout-btn"
    disabled={items.length === 0}
  >
    Checkout
  </button>
</div>
  );
};

export default Cart;
