import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

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

  const handlePlaceOrder =
    async () => {
      try {
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

        const orderItems =
          cart.map((item) => ({
            product:
              item._id,
            name: item.name,
            quantity:
              item.quantity,
            price:
              item.price,
          }));

        await API.post(
          "/orders",
          {
            items:
              orderItems,
            totalPrice,
            shippingAddress:
              address,
          }
        );

        clearCart();

        alert(
          "Order Placed Successfully 🎉"
        );

        navigate(
          "/success"
        );

      } catch (error) {
        console.error(
          error
        );

        alert(
          error.response?.data
            ?.message ||
            "Order Failed"
        );
      }
    };

  return (
    <div>
      <Navbar />

      <div className="checkout-container">

        <div className="checkout-form">

          <h2>Checkout</h2>

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
            rows="5"
            placeholder="Shipping Address"
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
            Total:
            {" "}
            ₹
            {totalPrice.toLocaleString()}
          </h3>

        </div>

      </div>

    </div>
  );
}

export default Checkout;