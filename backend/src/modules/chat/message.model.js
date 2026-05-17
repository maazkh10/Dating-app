import mongoose, { Schema } from "mongoose";

const messageModel = new mongoose.Schema(
    {
        matchId:{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Match",
            required: true
        },
        sender :{
            type :mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true
        },
        text:{
            type: String,
            trim : true,
            required: true
        }
    }, {
        timestamps : true
    }
)

const Message = mongoose.model("Message" , messageModel)

export default Message