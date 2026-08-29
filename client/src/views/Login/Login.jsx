import { Link } from "react-router";
import "./Login.css";

function Login() {
  return (
    <div className="login-page">

      <h1>Welcome Back</h1>

      <p>Login to your account</p>

      <form className="login-form ">

        <input
          type="email"
          placeholder="Enter your email"
        />

        <input
          type="password"
          placeholder="Enter your password"
        />

        <button type="submit" className="login-button">
          Login
        </button>

      </form>

      <p className="message">
        Don't have an account?{" "}
        <Link to="/register">
          Sign Up
        </Link>
      </p>

    </div>
  );
}

export default Login;