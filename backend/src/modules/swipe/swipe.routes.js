import express from "express"

import { swipeControler } from "./swipe.controller.js"

const router = express.Router()

router.post("/swipe" , swipeControler)

export default router