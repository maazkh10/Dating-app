import express from "express"
import { updteProfileFIeld , getProfile } from "./user.controller.js"

import authMiddleware from "../../middeware/auth.middleware.js";

const router = express.Router();

router.get("/me" , authMiddleware , getProfile)
router.post("/update" , authMiddleware , updteProfileFIeld)


export default router