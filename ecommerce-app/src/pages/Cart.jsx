import { useContext } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const navigate =
    useNavigate();

  const totalPrice =
    cart.reduce(
      (total, item) =>
        total +
        item.price *
          item.quantity,
      0
    );

  return (
    <div>
      <Navbar />

      <div className="cart-page">

        <h1>
          Your Cart 🛒
        </h1>

        {cart.length === 0 ? (
          <h3>
            Cart is Empty 🛒
          </h3>
        ) : (
          <>
            {cart.map(
              (item) => (
                <div
                  key={item.id}
                  className="cart-item"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-details">

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      ₹
                      {item.price.toLocaleString()}
                    </p>

                    <div className="quantity-controls">

                      <button
                        onClick={() =>
                          decreaseQuantity(
                            item.id
                          )
                        }
                      >
                        -
                      </button>

                      <span>
                        {
                          item.quantity
                        }
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(
                            item.id
                          )
                        }
                      >
                        +
                      </button>

                    </div>

                    <p className="subtotal">

                      Subtotal: ₹

                      {(
                        item.price *
                        item.quantity
                      ).toLocaleString()}

                    </p>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeFromCart(
                          item.id
                        )
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>
              )
            )}

            <h2 className="total-price">

              Grand Total: ₹

              {totalPrice.toLocaleString()}

            </h2>

            <button
              className="checkout-btn"
              onClick={() =>
                navigate(
                  "/checkout"
                )
              }
            >
              Proceed To Checkout
            </button>

          </>
        )}

      </div>

    </div>
  );
}

export default Cart;