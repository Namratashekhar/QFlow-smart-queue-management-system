import { Link } from "react-router";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
import "../../components/Button/Button.css";

function Login() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const loginUser = async () => {

    setError("");

    try {

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/login`,
        user
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      window.location.href = "/";

    } catch (error) {

      console.log(
        error.response?.data || error.message
      );

      if (error.response?.status === 404) {
        setError("Account not found.");
      }
      else if (error.response?.status === 401) {
        setError("The email or password you entered is incorrect.");
      }
      else {
        setError(
          error.response?.data?.message ||
          "Unable to login right now. Please try again."
        );
      }
    }
  };


  return (
    <div className="login-page">

      <h1>Welcome Back</h1>

      <p>Login to your account</p>

      <form className="login-form">

        <input
          type="email"
          placeholder="Enter your email"
          required
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value
            })
          }
        />

        <input
          type="password"
          placeholder="Enter your password"
          required
          value={user.password}
          onChange={(e) =>
            setUser({
              ...user,
              password: e.target.value
            })
          }
        />

        {error && (
          <div className="login-error">
            {error}
          </div>
        )}

        <button
          className="button"
          onClick={loginUser}
          type="button"
        >
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