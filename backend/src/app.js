import express from "express"
import cors from  "cors"

import authROutes from "./modules/auth/auth.routes.js"
import userRoutes from "./modules/user/user.routes.js"
const app = express()

app.use(cors())
app.use(express.json())

app.get("/" , (req , res) =>{
    res.send("hellow 6060")
})

app.use("/api/auth" , authROutes)
app.use("/api/user" , userRoutes)


export default app;