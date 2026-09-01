import mongoose from "mongoose";

const queueSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: true
    },

    queueNumber: {
      type: Number,
      required: true
    },

    currentlyServing: {
      type: Number,
      default: 0
    },

    peopleAhead: {
      type: Number,
      default: 0
    },

    estimatedWaitTime: {
      type: Number,
      default: 0
    },

    status: {
      type: String,
      enum: ["waiting", "serving", "completed", "cancelled"],
      default: "waiting"
    }
  },
  {
    timestamps: true
  }
);

const Queue = mongoose.model("Queue", queueSchema);

export default Queue;