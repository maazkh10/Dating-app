import Match from "./match.model.js";

export const getAllMatchs = async (currentUserId) =>{

    const matches = await Match.find({
        users: currentUserId
    }).populate(
        "users",
        "name bio photos intres age gender"
    );


    // remove u as match so that u wil show return ur match 
 
    const matchUsers = await matches.map((match) => {

        const otherUser = match.users.map((user)=> user._id.toString() !== currentUserId.toString())
return otherUser 
    })
    return matchUsers
} 