import mongoose from "mongoose";

const matchSchema = new mongoose.Schema(
    {
        users:[
            {
                type : mongoose.Schema.Types.ObjectId,
                ref: "User",
                required : true
            }
        ]
    }
    , {timestamps: true}
)

const Match = mongoose.model("Model" , matchSchema)

export default Match;