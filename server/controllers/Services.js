import Services from "../models/Services.js";

// Create Service
const postService = async (req, res) => {
  try {
    const service = await Services.create(req.body);

    res.status(201).json({
      message: "Service created successfully",
      service
    });
  } catch (error) {
    console.error("SERVICE ERROR:", error.message);

    res.status(500).json({
      message: error.message
    });
  }
};

// Get All Services
const getServices = async (req, res) => {
  try {
    const services = await Services.find();

    res.status(200).json({
      services
    });
  } catch (error) {
    console.error("GET SERVICES ERROR:", error.message);

    res.status(500).json({
      message: error.message
    });
  }
};

export { postService, getServices };