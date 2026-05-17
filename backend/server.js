import http from "http"
import dotenv from "dotenv"
import app from "./src/app.js";
import connectDb from "./src/config/db.js";

import { initSocket } from "./src/modules/chat/socket.js";



dotenv.config();

connectDb()

const server = http.createServer(app)

initSocket(server)


const PORT = 6969

server.listen(PORT , ()=>{
    console.log(`server runing onm this ${PORT}`)
})