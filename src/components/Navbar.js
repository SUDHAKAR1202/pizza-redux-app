import { Link } from "react-router-dom";
import { User, Pizza, ShoppingCart } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>🍕 PizzaApp</h2>

      <div className="nav-links">
        <Link to="/">
          <User size={18} />
          <span>Signup</span>
        </Link>

        <Link to="/menu">
          <Pizza size={18} />
          <span>Menu</span>
        </Link>

        <Link to="/cart">
          <ShoppingCart size={18} />
          <span>Cart</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;