import { useContext } from "react";
import Navbar from "../components/Navbar";
import { WishlistContext }
from "../context/WishlistContext";

function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
  } = useContext(
    WishlistContext
  );

  return (
    <div>

      <Navbar />

      <div className="cart-page">

        <h1>
          ❤️ My Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <h3>
            Wishlist is Empty
          </h3>
        ) : (
          wishlist.map((item) => (
            <div
              key={item.id}
              className="cart-item"
            >
              <img
                src={item.image}
                alt={item.name}
              />

              <div>

                <h3>
                  {item.name}
                </h3>

                <p>
                  ₹
                  {item.price.toLocaleString()}
                </p>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromWishlist(
                      item.id
                    )
                  }
                >
                  Remove
                </button>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default Wishlist;