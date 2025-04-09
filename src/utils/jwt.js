import { JWT_SECRET_KEY } from "../config/serverConfig.js"
import jwt from "jsonwebtoken";

export const generateJwtToken = (payload)=>{
    return jwt.sign(payload, JWT_SECRET_KEY, {expiresIn: "1d"});
}

export const verifyJwtToken = (token)=>{
    return jwt.verify(token, JWT_SECRET_KEY)
}