import { getMyprofile ,  updateuser } from "./user.service.js";


export const getProfile = async (req , res) =>{
    try {
        const data = await getMyprofile(req.user_id)
    res.status(200).json({
            success: true,
            message : "get user profile sucexx",
            data
    })
    } catch (error) {
        res.status(400).json({
            success: false,
            message : error.message
    })
    }
}


export const updteProfileFIeld = async (req , res) =>{
try {
    const data = await updateuser(
        req.user_id,
        req.body
    );

    res.status(200).json({
        success : true,
        message : "Usr profile get updade sucexx",
        data
    })
} catch (error) {
      res.status(400).json({
      success: false,
      message: error.message,
    });
}
}