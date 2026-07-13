import express from "express"
import dotenv from "dotenv"
import Route from "./routes/routes";


dotenv.config();

const PORT = process.env.PORT ;


const app = express() ;

app.use(express.json());


app.use("/", Route)

app.listen(PORT,()=>{
  console.log(`server listening at the port ${PORT}`);
  
})