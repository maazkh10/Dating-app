import User from "../user/user.models.js";
import Swipe from "../swipe/swipe.model.js";

export const getFeedService = async (currentUser) =>{
// finding all swiper of currect user

const swipes = await Swipe.find({
    fromUser : currentUser._id
})

const swiprUserIds = swipes.map((swip) => swip.toUser);

// find user from feed 

const users = await User.find({
    _id:{
        $ne : currentUser._id,
        $nin : swiprUserIds
    },
    gender : currentUser.preferences?.gender,
    age:{
        $gte: currentUser.preferences?.maxAge || 100,
        $lte : currentUser.preferences?.maxAge || 18,
    }
}).select("-password")
return users
}