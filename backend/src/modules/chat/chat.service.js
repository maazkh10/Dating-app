import Match from "../match/match.model.js";
import Message from "./message.model.js";


export const sendMessage = async (
    matchId , currentUserId , text
) =>{
    // chekking for the match mach id 
    const matchcahtcheck = Match.findOne({
        _id: matchId,
        users : currentUserId
    })

    if (!matchcahtcheck) {
        throw Error ("unauthorixe chat access")
    }

    const newMessage = await Message.create({
        matchId,
        sender: currentUserId,
        text
    })

    // populate sender detaul 
    const popolateMessage = await Message.findById(newMessage._id)
    .populate(
        "sender",
        "name photos"
    )

    return popolateMessage;
}


export const getMessage = async (matchId , currentUserId) =>{
const matchcahtcheck = await Match.findOne({
    _id : matchId,
    users: currentUserId
})

if (!matchcahtcheck) {
    throw new Error ("Unarothorize user cant se the messages")
}

const message = await Message.find({
    matchId : matchId,
}).populate(
    "sender",
    "name photo"
)
.sort({
    createdAt: 1
})
return message
}