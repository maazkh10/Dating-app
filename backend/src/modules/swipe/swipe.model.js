import mongoose from "mongoose";

const swipeSchema = new mongoose.Schema(
    {
        fromUser:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        toUser:{
            type : mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        type : {
            type: String,
            enum: ["like" , "pass"],
            required: true
        }

    }
)

const Swipe = mongoose.model(
    "Swipe", swipeSchema
)

export default Swipe;