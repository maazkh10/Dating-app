import User from "./user.models.js";

export const getMyprofile = async(userId) =>{

    const user = await User.findById(userId)
    .select("-password");

    if (!user) {
        throw new Error ("user not found ")
    }

    return user
}

export const updateuser = async (userId,
    body) =>{
    
        const allowFileds = [
            "bio",
            "photos",
            "interests",
            "age",
            "preferences"
        ]

        const updateData = {};
        allowFileds.forEach((fild) =>{
            if (body[fild] !== undefined) {
                updateData[fild] = body[fild]
            }
        })


        const updateUser = await User.findByIdAndUpdate(
            userId,
            updateData , 
            {
                new : true
            }
        ).select("-password")

        return updateUser;
}