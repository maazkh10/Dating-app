import { getFeedService } from "./feed.service.js";


export const getFeed = async (req , res) =>{

    try {
        const users = await getFeedService(req.user)
    
        res.status(200).json({
            success : true,
            message : "Getting feed succesfull",
            data: users
        })
    } catch (error) {
        
    res.status(400).json({
      success: false,
      message: error.message,
    });
    }
} 