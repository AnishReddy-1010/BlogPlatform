import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">
        BlogSphere
      </h2>

      <div className="nav-links">
        <Link to="/">
          Home
        </Link>

        <Link to="/create">
          Create Post
        </Link>

        <Link to="/login">
          Login
        </Link>

        <Link to="/register">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;