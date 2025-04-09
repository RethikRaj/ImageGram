import { checkIfUserExistsService } from "../services/userService.js";
import { verifyJwtToken } from "../utils/jwt.js";

export const isAuthenticated = async (req,res,next)=>{
    try {
        const token = req.headers["x-access-token"];

        if(!token){
            return res.status(400).json({success: false, message : "Token is required"});
        }

        const decodedInfo = verifyJwtToken(token); // if token is invalid it throws an error

        // Even if token is valid but suppose lets say the user is deleted from the database but still token is valid and someone gets access t o it and tries to access the protected route then we need to check if the user is present in the database or not
        const doesUserExist = await checkIfUserExistsService(decodedInfo.email);

        if(!doesUserExist){
            res.status(404).json({
                success: false,
                message: "User not found"
            })
        }
        req.user = decodedInfo;
        next();

    } catch (error) {
        return res.status(401).json({
            success : false,
            message: "Invalid token"
        })
    }

}