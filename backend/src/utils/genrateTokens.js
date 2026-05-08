import JWT from "jsonwebtoken";

const genrateTokens = (userId) =>{
    return JWT.sign({userId},
        process.env.JWT_secreate,{
            expiresIn : "7d"
        }
    )
}

export default genrateTokens;