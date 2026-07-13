import express from "express"
import dotenv from "dotenv"
import Route from "./routes/routes";
import cors from "cors"


dotenv.config();

const PORT = process.env.PORT ;


const app = express() ;

app.use(cors({
  origin: "http://localhost:3000",   // ya jo bhi tumhara frontend URL hai
  credentials: true,                  // agar cookies/auth bhejni hain to
}))

app.use(express.json());
app.use("/", Route)

app.listen(PORT,()=>{
  console.log(`server listening at the port ${PORT}`);
  
})