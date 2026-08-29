import { model, Schema } from "mongoose";

const queueSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    service: {
        type: Schema.Types.ObjectId,
        ref: "Service",
        required: true
    },

    tokenNumber: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        enum: ["waiting", "serving", "completed"],
        default: "waiting"
    },

    joinedAt: {
        type: Date,
        default: Date.now
    }},
    
    {
        timestamps:true,
    }
);

const Queue = model("Queue", queueSchema);

export default Queue;