import { Link } from "react-router";
import "./Login.css";
import { useState } from "react";
import axios from "axios";

function Login() {

  const[user,setUser] = useState({
    email:"",
    password:""
  });

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        user
      );

      console.log(response.data);

    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };


  return (
    <div className="login-page">

      <h1>Welcome Back</h1>

      <p>Login to your account</p>

      <form className="login-form ">

        <input
          type="email"
          placeholder="Enter your email"
           required
           value={user.email}
           onChange={(e) => setUser({...user, email: e.target.value})}
        />

        <input
          type="password"
          placeholder="Enter your password"
           required
           value={user.password}
           onChange={(e) => setUser ({...user, password: e.target.value})}
        />

        <button  className="login-button" onClick={loginUser} type="button">
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