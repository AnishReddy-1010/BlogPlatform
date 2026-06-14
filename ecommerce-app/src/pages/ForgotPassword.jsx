import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleReset = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    alert(
      "Password reset link sent to your email 📧"
    );

    navigate("/");
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h1>🛒 ShopEase</h1>

        <h2>Forgot Password</h2>

        <p>
          Enter your email address
          and we'll send you a
          password reset link.
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <button
          className="login-btn"
          onClick={handleReset}
        >
          Send Reset Link
        </button>

        <div className="login-links">

          <Link to="/">
            Back to Login
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;