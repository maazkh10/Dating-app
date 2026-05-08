import { registerService , loginService} from "./auth.service.js";


export const registerUser = async(req , res) =>{
    try {
        const data = await registerService(req.body);
        res.status(200).json({
            success: true,
            message : "user register succeflyy",
            data
        });
    } catch (error) {
         res.status(400).json({
      success: false,
      message: error.message,
    });
    }
}
    export const loginUser = async (req , res) =>{
        try {
            const data = await loginService(req.body)
            res.status(200).json({
                success: true,
                message:"logins seuccesfull",
                data
            })
        } catch (error) {
              res.status(400).json({
      success: false,
      message: error.message,
    });
        }
    }
