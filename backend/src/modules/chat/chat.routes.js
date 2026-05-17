import express from "express"

import { getMsgController , sendMsgcontroler } from "./chat.controller.js"

const router = express.Router()

router.get("/message/:matchId" , getMsgController)

router.post("/message" , sendMsgcontroler)

export default router