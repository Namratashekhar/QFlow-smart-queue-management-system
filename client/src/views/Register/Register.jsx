import { useState } from "react";
import { Link } from "react-router";
import "./Register.css";
import axios from "axios";

function Register() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    tel: "",
    password: "",
    confirmPassword: ""
  });

  const registerUser = async (e) => {
    e.preventDefault();

    try {

      if (user.password !== user.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/register`,
        {
          name: user.name,
          email: user.email,
          tel: user.tel,
          password: user.password
        }
      );

      console.log("Register response:", response.data);
      alert("Registration successful!");

    } catch (error) {

      console.log("Register error:", error);
      console.log("Backend error:", error.response?.data);

      alert(
        error.response?.data?.message ||
        "Registration failed"
      );
    }
  };

  return (
    <div className="register-page">

      <h1>Register</h1>

      <form
        className="register-form"
        onSubmit={registerUser}
      >

        <input
          type="text"
          placeholder="Enter your name"
          required
          value={user.name}
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value
            });
          }}
        />

        <input
          type="email"
          placeholder="Enter your email"
          required
          value={user.email}
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value
            });
          }}
        />

        <input
          type="tel"
          placeholder="Enter your phone number"
          required
          value={user.tel}
          onChange={(e) => {
            setUser({
              ...user,
              tel: e.target.value
            });
          }}
        />

        <input
          type="password"
          placeholder="Enter your password"
          required
          value={user.password}
          onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value
            });
          }}
        />

        <input
          type="password"
          placeholder="Confirm your password"
          required
          value={user.confirmPassword}
          onChange={(e) => {
            setUser({
              ...user,
              confirmPassword: e.target.value
            });
          }}
        />

        <button
          type="submit"
          className="register-button"
        >
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