import { model, Schema } from "mongoose";

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    estimatedTime: {
        type: Number,
        required: true
    }},
    
    {
        timestamps:true,
    }
);

const Service = model("Service", serviceSchema);

export default Service;