import Queue from "../models/Queue.js";
import Services from "../models/Services.js";

const postQueue = async (req, res) => {
  try {
    const { user, service } = req.body;
    if (!user || !service) {
      return res.status(400).json({
        message: "User and service are required"
      });
    }

    const serviceData = await Services.findById(service);
    if (!serviceData) {
      return res.status(404).json({
        message: "Service not found"
      });
    }

    const lastQueue = await Queue.findOne({
      service: service
    }).sort({
      queueNumber: -1
    });

    const queueNumber = lastQueue
      ? lastQueue.queueNumber + 1
      : 1;

    const currentlyServing =
      serviceData.currentlyServing || 0;

    const peopleAhead = Math.max(
      queueNumber - currentlyServing - 1,
      0
    );

    const estimatedWaitTime =
      peopleAhead * 5;

      const queue = await Queue.create({
      user,
      service,
      queueNumber,
      currentlyServing,
      peopleAhead,
      estimatedWaitTime,
      status: "waiting"
    });

    const queueData = await Queue.findById(queue._id)
      .populate(
        "service",
        "name description image currentlyServing"
      )
      .populate(
        "user",
        "name email tel"
      );

    res.status(201).json({
      message: "Queue joined successfully",
      queue: queueData
    });

  } catch (error) {

    console.error("QUEUE ERROR:", error.message);

    res.status(500).json({
      message: error.message
    });

  }
};

const getMyQueue = async (req, res) => {
  try {

    const { userId } = req.params;

    const queue = await Queue.findOne({
      user: userId,
      status: {
        $in: ["waiting", "serving"]
      }
    })
      .populate(
        "service",
        "name description image currentlyServing"
      )
      .populate(
        "user",
        "name email tel"
      );

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

export { postQueue, getMyQueue, cancelQueue};