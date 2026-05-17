import { swiperService } from "./swipe.service.js";


export const swipeControler = async (req , res) =>{
    const  currentUserId = req.user._id;
    const {toUserId , type} = req.body;
    try {
        const data  = await swiperService(currentUserId  , req.body)

      return res.status(200).json({
        success : true,
        message: "Swipe recorded suceecfull",
        ...data
       }) 
    } catch (error) {
        return res.status(400).json({
      success: false,
      message: error.message || "An error occurred while swiping",
    });
    }
}