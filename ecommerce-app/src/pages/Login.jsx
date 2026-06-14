import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin =
    async () => {
      try {
        if (!email || !password) {
          alert(
            "Please fill all fields"
          );
          return;
        }

        const res =
          await API.post(
            "/auth/login",
            {
              email,
              password,
            }
          );

        localStorage.setItem(
          "token",
          res.data.token
        );

        localStorage.setItem(
          "user",
          JSON.stringify(
            res.data.user
          )
        );

        alert(
          "Login Successful 🎉"
        );

        navigate("/home");

      } catch (error) {
        alert(
          error.response?.data
            ?.message ||
            "Login Failed"
        );
      }
    };

  return (
    <div className="login-container">

      <div className="login-card">

        <h1>🛒 ShopEase</h1>

        <h2>Welcome Back</h2>

        <p>
          Login to continue
          shopping
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button
          className="login-btn"
          onClick={
            handleLogin
          }
        >
          Login
        </button>

        <div className="login-links">

          <Link to="/register">
            Create Account
          </Link>

          <Link to="/forgot-password">
            Forgot Password?
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;