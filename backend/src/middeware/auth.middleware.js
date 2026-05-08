import jwt from "jsonwebtoken"

const authMiddleware = async (req , res , next ) =>{
    try {
        const authheader = req.headers.authorization;

        if (!authheader ||
            !authheader.startwith("Bearer")
        ) {
            return res.status(401).json({
                success : false,
                message: "No token provideed"
            })
        }

        const token = authheader.split(" " )[1]

        const decode = jwt.verify(
            token,
            process.env.JWT_secreate
        )
        req.user = decode;
        next()
    } catch (error) {
         res.status(401).json({
      success: false,
      message: "Invalid token",
    });
    }
}
export default authMiddleware;