import Swipe from "./swipe.model.js";
import Match from "../match/match.model.js";

export const swiperService = async (currentUserId , body) =>{
     
    const {toUserId , type} = body

// check for khudko swipe 
if (currentUserId.toString() === toUserId) {
    throw new Error("You cant swipe urself here ")
}

// check for the dublecate swie
 const alredySwipe = await Swipe.findOne({
    fromUser: currentUserId,
    toUser : toUserId
 })

 if (alredySwipe) {
    throw Error("alredy u have swpe them")
 }

 await Swipe.create({
    fromUser : currentUserId,
    toUser: toUserId,
    type,
 })

//  only check for the links tho 

if (type === "like") {
    // check the reveredlikd
    const reversedLike = await Swipe.findOne({
        fromUser: toUserId,
        toUser: currentUserId,
        type: "like",
    })

    if (reversedLike) {
        
        // prevent dublicate match 
        const exitingmatch = await Match.findOne({
            users:{
                $all : [currentUserId , toUserId]
            }
        })

        if (!exitingmatch) {
            
            await Match.create({
                users: [currentUserId , toUserId]
            })
        }

        return{
            Match: false
        }
    }
}
return {
    Match: false
}
}
