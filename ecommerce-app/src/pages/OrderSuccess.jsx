import { Link } from "react-router-dom";

function OrderSuccess() {
  const orderId =
    "SE" +
    Math.floor(
      100000 + Math.random() * 900000
    );

  const today = new Date();

  const deliveryDate =
    new Date();

  deliveryDate.setDate(
    today.getDate() + 5
  );

  return (
    <div className="success-container">

      <div className="success-card">

        <div className="success-icon">
          ✅
        </div>

        <h1>
          Order Placed Successfully!
        </h1>

        <p>
          Thank you for shopping
          with ShopEase.
        </p>

        <div className="order-info">

          <p>
            <strong>
              Order ID:
            </strong>{" "}
            #{orderId}
          </p>

          <p>
            <strong>
              Payment:
            </strong>{" "}
            Cash On Delivery
          </p>

          <p>
            <strong>
              Estimated Delivery:
            </strong>{" "}
            {
              deliveryDate.toDateString()
            }
          </p>

        </div>

        <Link to="/home">

          <button className="success-btn">
            Continue Shopping
          </button>

        </Link>

      </div>

    </div>
  );
}

export default OrderSuccess;