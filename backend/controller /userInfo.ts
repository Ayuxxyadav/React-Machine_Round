
import { Request , Response } from "express"



export const userInfo = (req:Request , res :Response) => {
  
    const data = req.body ;
      
    res.send("hello ")

}
