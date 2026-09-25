import { Link, useNavigate } from "react-router";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("queue");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">Q</div>
          <span>QFlow</span>
        </Link>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/services" className="nav-link">
            Services
          </Link>

          <Link to="/about" className="nav-link">
            About
          </Link>

          {user && (
            <Link to="/myqueue" className="nav-link">
              My Queue
            </Link>
          )}
        </div>

        {/* Login / Logout */}
        <div className="nav-auth">
          {user ? (
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="login-btn">
              Login
            </Link>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;