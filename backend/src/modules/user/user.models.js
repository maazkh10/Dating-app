import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required:true
        },
        email:{
            type: String ,
            required : true,
            unique: true
        },
        password:{
            type :String,
            required : true,
            select: false
        },
        bio:{
            type: String,
            default:""
        },
        photos:{
            type: [String],
            default:[]
        },
        interests:{
            type : [String],
            default :["Gym", "Music" , "Travel"]
        },
        age:{
            type : Number,
            default: null
        },
        gender:{
            type : String,
            default: "Not define"
        },
        preferences: {
            gender :{type : String , default :"Both"},
            minAge:{type : Number , default :18},
            maxAge:{type : Number , default :55},
            distance : {type : Number , default :100}
}
    },{
        timestamps: true
    }
);

const User = mongoose.model("User" , userSchema)

export default User;