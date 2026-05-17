import express from "express"

import cors from  "cors"

import authROutes from "./modules/auth/auth.routes.js"

import userRoutes from "./modules/user/user.routes.js"

import feedRoutes from "./modules/feed/feed.routes.js"

import swipeRoute from "./modules/swipe/swipe.routes.js"

import matchRoutes from "./modules/match/match.routes.js"

import messageRoutes from "./modules/chat/chat.routes.js"
const app = express()

app.use(cors())

app.use(express.json())

app.get("/" , (req , res) =>{

    res.send("hellow 6060")

})

app.use("/api/auth" , authROutes)

app.use("/api/user" , userRoutes)

app.use("api/feed" , feedRoutes )

app.use("api/swipe" , swipeRoute)

app.use("api/match" , matchRoutes)

app.use("api/message" ,  messageRoutes  )
export default app;