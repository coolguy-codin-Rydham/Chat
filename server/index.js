import express from "express"
import dotenv from "dotenv"
dotenv.config();
const PORT = process.env.APP_PORT || 4000;


const app = express();

app.get("/", (req, res)=>{
    res.json("Hello");
})

app.listen(PORT, ()=>{
    console.log(`Server is live on http://localhost:${PORT}`);
})