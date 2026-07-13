
import { Request , Response } from "express"
import express from "express";
import { userInfo } from "../controller /userInfo";
 const Route = express.Router();


      
    Route.post("user-info",userInfo )

    export default Route ;
