import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function ProductCard({ product }) {

  const { addToCart } =
    useContext(CartContext);

  const { addToWishlist } =
    useContext(WishlistContext);

  const discount =
    product.oldPrice > 0
      ? Math.round(
          (
            (product.oldPrice -
              product.price) /
            product.oldPrice
          ) * 100
        )
      : 0;

  return (
    <div className="product-card">

      <div className="discount-badge">
        {discount}% OFF
      </div>

      <img
        src={product.image}
        alt={product.name}
      />

      <div className="product-info">

        <h3>{product.name}</h3>

        <div className="rating">
          ⭐ {product.rating || 0}
        </div>

        <div className="price-section">

          <span className="new-price">
            ₹
            {product.price.toLocaleString()}
          </span>

          <span className="old-price">
            ₹
            {product.oldPrice.toLocaleString()}
          </span>

        </div>

        <p
          className={
            product.stock
              ? "in-stock"
              : "out-stock"
          }
        >
          {product.stock
            ? "In Stock ✅"
            : "Out Of Stock ❌"}
        </p>

        <div className="action-buttons">

          <button
            className="wishlist-btn"
            onClick={() =>
              addToWishlist(product)
            }
          >
            ❤️ Wishlist
          </button>

          <button
            className="add-cart-btn"
            disabled={!product.stock}
            onClick={() =>
              addToCart(product)
            }
          >
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;