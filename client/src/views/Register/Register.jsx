import {useState} from "react";
import { Link } from "react-router";
import "./Register.css";
import axios from "axios";

function Register() {

    const [user,setUser] = useState({
        name:"",
        email:"",
        tel:"",
        password:"",
    });

    const registerUser = async() => {
       const response = await axios.post(`${import.meta.env.VITE_API_URL}/register`,user);
       console.log(response.data);
    };

  return (
    <div className="register-page">

      <h1>Register</h1>

      <form
  className="register-form"
  onSubmit={(e) => {
    e.preventDefault();
    registerUser();
  }}
>

        <input
          type="name"
          placeholder="Enter your name"
          required
          value={user.name}
          onChange={(e)=> {
            setUser({...user, name: e.target.value})
          }}
        />

        <input
          type="email"
          placeholder="Enter your email"
           required
          value={user.email}
          onChange={(e)=> {
            setUser({...user, email: e.target.value})
          }}
        />

        <input
          type="tel"
          placeholder="Enter your phone number"
           required
          value={user.tel}
          onChange={(e)=> {
            setUser({...user, tel: e.target.value})
          }}
        />

        <input
          type="password"
          placeholder="Enter your password"
           required
          value={user.password}
          onChange={(e)=> {
            setUser({...user, password: e.target.value})
          }}
        />

        <input
          type="password"
          placeholder="Confirm your password"
        />

        <button type="submit" className="register-button" >
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