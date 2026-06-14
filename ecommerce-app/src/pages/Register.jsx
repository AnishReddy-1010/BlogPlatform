import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  const handleRegister =
    async () => {
      try {
        if (
          !name ||
          !email ||
          !password ||
          !confirmPassword
        ) {
          alert(
            "Please fill all fields"
          );
          return;
        }

        if (
          password !==
          confirmPassword
        ) {
          alert(
            "Passwords do not match"
          );
          return;
        }

        const res =
          await API.post(
            "/auth/register",
            {
              name,
              email,
              password,
            }
          );

        alert(
          res.data.message ||
            "Registration Successful 🎉"
        );

        navigate("/");
      } catch (error) {
        alert(
          error.response?.data
            ?.message ||
            "Registration Failed"
        );
      }
    };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>🛒 ShopEase</h1>

        <h2>
          Create Account
        </h2>

        <p>
          Join ShopEase and
          start shopping today
        </p>

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

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(
              e.target.value
            )
          }
        />

        <button
          className="login-btn"
          onClick={
            handleRegister
          }
        >
          Create Account
        </button>

        <div className="login-links">

          <span>
            Already have an
            account?
          </span>

          <Link to="/">
            Login
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Register;  