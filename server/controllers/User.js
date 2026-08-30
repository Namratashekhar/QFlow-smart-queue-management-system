import User from "../models/User.js";
import md5 from "md5";


// REGISTER
const postRegister = async (req, res) => {
  try {

    const { name, email, tel, password } = req.body;


    // Name validation
    const nameRegex = /^[A-Za-z ]{3,30}$/;

    if (!nameRegex.test(name)) {
      return res.status(400).json({
        message: "Name must contain only letters and spaces"
      });
    }


    // Email validation
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Please enter a valid email"
      });
    }


    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
      });
    }


    // Check existing user by email
    const existingUser = await User.findOne({ email,password: md5(password) });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists"
      });
    }


    // Create user
    const user = await User.create({
      name,
      email,
      tel,
      password: md5(password)
    });


    // Remove password from response
    const safeUser = await User.findById(user._id)
      .select("-password");


    res.status(201).json({
      message: "User registered successfully",
      user: safeUser
    });


  } catch (error) {

    console.error("REGISTER ERROR:", error.message);

    res.status(500).json({
      message: error.message
    });

  }
};


// LOGIN
const postLogin = async (req, res) => {
  try {

    const { email, password } = req.body;


    // Email validation
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Please enter a valid email"
      });
    }


    const user = await User.findOne({ email });


    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }


    // Check password
    if (user.password !== md5(password)) {
      return res.status(401).json({
        message: "Invalid password"
      });
    }


    // Remove password from response
    const safeUser = await User.findById(user._id)
      .select("-password");


    res.status(200).json({
      message: "Login successful",
      user: safeUser
    });


  } catch (error) {

    console.error("LOGIN ERROR:", error.message);

    res.status(500).json({
      message: error.message
    });

  }
};


export { postLogin, postRegister };