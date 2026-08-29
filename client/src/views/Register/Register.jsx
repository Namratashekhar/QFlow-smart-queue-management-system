import { Link } from "react-router";
import "./Register.css";

function Register() {
  return (
    <div className="register-page">

      <h1>Register</h1>

      <form className="register-form">

        <input
          type="text"
          placeholder="Enter your name"
        />

        <input
          type="email"
          placeholder="Enter your email"
        />

        <input
          type="tel"
          placeholder="Enter your phone number"
        />

        <input
          type="password"
          placeholder="Enter your password"
        />

        <input
          type="password"
          placeholder="Confirm your password"
        />

        <button type="submit" className="register-button">
          Create Account
        </button>

        <p className="message">
        Already have an account?{" "}
        <Link to="/login">
          Login
        </Link>
      </p>

      </form>

    </div>
  );
}

export default Register;