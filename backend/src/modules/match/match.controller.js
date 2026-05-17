import { getAllMatchs } from "./match.service.js";


export const  getallMatchControler = async (req , res) =>{

    const userId = req.user._id

    try {
        const data = await getAllMatchs(userId)
        res.status(200).json({
            success : true,
            message : "fetched the ur match user",
            data
        })
    } catch (error) {
         res.status(400).json({
      success: false,
      message: error.message,
    });
    }

}