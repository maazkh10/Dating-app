import express from "express"

import { getallMatchControler } from "./match.controller.js"

const router = express.Router()

router.get("/getalllike" , getallMatchControler)

export default router