import dotenv from "dotenv"
import app from "./src/app.js";
import connectDb from "./src/config/db.js";
dotenv.config();

connectDb()

const PORT = 6969

app.listen(PORT , ()=>{
    console.log(`server runing onm this ${PORT}`)
})