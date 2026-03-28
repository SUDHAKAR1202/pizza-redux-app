import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { showToast } from "../features/ui/uiSlice";
import "./Menu.css";

import {
  setSize,
  setCrust,
  toggleTopping,
  calculatePrice,
} from "../features/pizza/pizzaSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const { size, crust, toppings, price } = useSelector((state) => state.pizza);

  const toppingOptions = ["Cheese", "Paneer", "Mushroom", "Olives"];

  useEffect(() => {
    dispatch(calculatePrice());
  }, [size, toppings, dispatch]);

  return (
  <div className="menu-container">
    <h2>Build Your Pizza 🍕</h2>

    {/* Size */}
    <div className="section">
      <h3>Size</h3>
      {["small", "medium", "large"].map((s) => (
        <button
          key={s}
          className={`option-btn ${size === s ? "active" : ""}`}
          onClick={() => dispatch(setSize(s))}
        >
          {s}
        </button>
      ))}
    </div>

    {/* Crust */}
    <div className="section">
      <h3>Crust</h3>
      {["thin", "thick"].map((c) => (
        <button
          key={c}
          className={`option-btn ${crust === c ? "active" : ""}`}
          onClick={() => dispatch(setCrust(c))}
        >
          {c}
        </button>
      ))}
    </div>

    {/* Toppings */}
    <div className="section toppings">
      <h3>Toppings</h3>
      {toppingOptions.map((top) => (
        <label key={top}>
          <input
            type="checkbox"
            checked={toppings.includes(top)}
            onChange={() => dispatch(toggleTopping(top))}
          />
          {top}
        </label>
      ))}
    </div>

    {/* Footer */}
    <div className="footer">
      <h3>Price: ₹{price}</h3>

      <button
        className="add-btn"
        onClick={() => {
          dispatch(addToCart({ size, crust, toppings, price }));
          dispatch(showToast("Pizza added to cart"));
        }}
      >
        Add to Cart 🛒
      </button>
    </div>
  </div>
);
};

export default Menu;
