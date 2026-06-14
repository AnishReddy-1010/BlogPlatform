import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } =
    useContext(CartContext);

  return (
    <nav className="navbar">

      <div className="logo">
        🛒 ShopEase
      </div>

      <div className="navbar-search">

        <input
          type="text"
          placeholder="Search products..."
        />

      </div>

      <ul className="nav-links">

        <li>
          <Link to="/home">
            Home
          </Link>
        </li>

        <li>
          <Link to="/cart">
            Cart ({cart.length})
          </Link>
        </li>

        <li>
          <Link to="/checkout">
            Checkout
          </Link>
        </li>
<li>
  <Link to="/wishlist">
    ❤️ Wishlist
  </Link>
</li>
      </ul>

    </nav>
  );
}

export default Navbar;