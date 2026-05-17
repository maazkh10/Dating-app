import { sendMessage , getMessage } from "./chat.service.js";


export const sendMsgcontroler = async (req  , res) =>{
    const {currentUserId} = req.user._id;
    const {matchId , text} = req.body

    try {
        
  const data = await sendMessage()
  
  res.status(200).json({
    success : true,
    message : "msg send successfull",
    data
  })
    } catch (error) {
          res.status(400).json({
      success: false,
      message: error.message,
    });
  
    }
} 


export const getMsgController = async (req , res) =>{
 
    const {currentUserId} = req.user._id ;
    const matchId = req.params.matchId

    

try {
        
  const data = await getMessage()
  
  res.status(200).json({
    success : true,
    message : "msg all here",
    data
  })
    } catch (error) {
          res.status(400).json({
      success: false,
      message: error.message,
    });
  
    }
}