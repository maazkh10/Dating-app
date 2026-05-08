import genrateTokens from "../../utils/genrateTokens.js";
import User from "../user/user.models.js";

import bcrypt from "bcryptjs";

export const registerService = async(body) =>{
    const {name , email , password} = body


    const isuserExist = await User.findOne({email})

    if (isuserExist) {
        throw new Error("user alredy exist")
    }

    const hashpass = await bcrypt.hash(password , 10)

    const user = await User.create({
        name , email , password: hashpass
    });

    const token = genrateTokens(user._id)


    return{
        token,
    
        user:{
    
            _id:user._id,
    
            name:user.name,
    
            email:user.email
    
        }
    
    }

    
}

export const loginService = async(body) =>{
    
    const {email , password} = body;


    const user = User.findOne({email}).select("+password")

    if (!user) {
    
        throw new Error ("User not found")
    
    }
    const isMatch = await bcrypt.compare(password , user.password)

    if (!isMatch) {
            throw new Error ("invalid credential")
    }

    const token = genrateTokens(user._id)
    return {
        token,
         user:{
            _id:user._id,
            name:user.name,
            email:user.email
        }
    }
}