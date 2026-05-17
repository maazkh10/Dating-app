import express from "express"



import { getFeed } from

"./feed.controller.js"

import authMiddleware from 

"../../middeware/auth.middleware.js";


const router = express.Router()


router.get("/" , 

    authMiddleware,

    getFeed

)

export default router

