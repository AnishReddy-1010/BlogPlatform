import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const {
    cart,
    clearCart,
  } = useContext(CartContext);

  const navigate =
    useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [address, setAddress] =
    useState("");

  const totalPrice =
    cart.reduce(
      (total, item) =>
        total +
        item.price *
          item.quantity,
      0
    );

  if (cart.length === 0) {
    return (
      <div>
        <Navbar />

        <div
          style={{
            padding: "50px",
            textAlign:
              "center",
          }}
        >
          <h1>
            Your Cart Is Empty 🛒
          </h1>

          <p>
            Add products before
            checkout.
          </p>
        </div>
      </div>
    );
  }

  const handlePlaceOrder =
    () => {
      if (
        !name ||
        !email ||
        !address
      ) {
        alert(
          "Please fill all fields"
        );
        return;
      }

      clearCart();

      navigate("/success");
    };

  return (
    <div>
      <Navbar />

      <div className="checkout-container">

        <div className="checkout-form">

          <h2>
            Checkout
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
          />

          <textarea
            placeholder="Shipping Address"
            rows="5"
            value={address}
            onChange={(e) =>
              setAddress(
                e.target.value
              )
            }
          />

          <button
            onClick={
              handlePlaceOrder
            }
          >
            Place Order
          </button>

        </div>

        <div className="order-summary">

          <h2>
            Order Summary
          </h2>

          <p>
            Items:
            {" "}
            {cart.length}
          </p>

          <h3>
            Total: ₹
            {totalPrice.toLocaleString()}
          </h3>

        </div>

      </div>

    </div>
  );
}

export default Checkout;