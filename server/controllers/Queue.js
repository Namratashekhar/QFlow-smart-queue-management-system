import Queue from "../models/Queue.js";

const services = {
  1: "Hospital",
  2: "Restaurant",
  3: "Salon",
  4: "Bank"
};


// JOIN QUEUE
const postQueue = async (req, res) => {
  try {

    const { user, serviceId } = req.body;

    if (!user || !serviceId) {
      return res.status(400).json({
        message: "User and serviceId are required"
      });
    }


    const serviceName = services[serviceId];

    if (!serviceName) {
      return res.status(404).json({
        message: "Service not found"
      });
    }


    // Find last queue number for this service
    const lastQueue = await Queue.findOne({
      serviceId: serviceId,
      status: {
        $in: ["waiting", "serving"]
      }
    }).sort({
      queueNumber: -1
    });


    const queueNumber = lastQueue
      ? lastQueue.queueNumber + 1
      : 1;


    const currentlyServing = 0;


    const peopleAhead = Math.max(
      queueNumber - currentlyServing - 1,
      0
    );


    const estimatedWaitTime =
      peopleAhead * 5;


    const queue = await Queue.create({
      user,
      serviceId,
      serviceName,
      queueNumber,
      currentlyServing,
      peopleAhead,
      estimatedWaitTime,
      status: "waiting"
    });


    res.status(201).json({
      message: "Queue joined successfully",
      queue
    });


  } catch (error) {

    console.error("QUEUE ERROR:", error.message);

    res.status(500).json({
      message: error.message
    });

  }
};


// GET MY QUEUE
const getMyQueue = async (req, res) => {
  try {

    const { userId } = req.params;


    const queue = await Queue.findOne({
      user: userId,
      status: {
        $in: ["waiting", "serving"]
      }
    }).sort({
      createdAt: -1
    });


    if (!queue) {
      return res.status(404).json({
        message: "No active queue found"
      });
    }


    res.status(200).json({
      message: "Queue details fetched successfully",
      queue
    });


  } catch (error) {

    console.error("GET QUEUE ERROR:", error.message);

    res.status(500).json({
      message: error.message
    });

  }
};


// CANCEL QUEUE
const cancelQueue = async (req, res) => {
  try {

    const { queueId } = req.params;


    const queue = await Queue.findByIdAndUpdate(
      queueId,
      {
        status: "cancelled"
      },
      {
        new: true
      }
    );


    if (!queue) {
      return res.status(404).json({
        message: "Queue not found"
      });
    }


    res.status(200).json({
      message: "Queue cancelled successfully",
      queue
    });


  } catch (error) {

    console.error("CANCEL QUEUE ERROR:", error.message);

    res.status(500).json({
      message: error.message
    });

  }
};


export {
  postQueue,
  getMyQueue,
  cancelQueue
};