import mongoose from "mongoose";
import { DB_CONNECTION_STRING } from "./serverConfig.js";

async function connectToDB(){
    try{
        await mongoose.connect(DB_CONNECTION_STRING);
        console.log("Connected to DB");
    }catch(error){
        console.log("Something went wrong while connecting to DB");
        console.log(error);
    }
    
}

export default connectToDB;