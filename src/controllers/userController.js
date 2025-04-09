import { signInUserService, signUpService } from "../services/userService.js";

export const signUpController = async (req,res)=>{
    try {
        const {username , email, password} = req.body;
        const newUser = await signUpService({ username , email, password});

        return res.status(201).json({
            success: true,
            message : "Signed Up successfully",
            data: newUser
        })
    } catch (error) {
        console.log(error);
        // Custom error thrown from service layer
        if(error.status){
            return res.status(error.status).json({
                success: false,
                message: error.message
            })
        }

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

export const signInUserController = async (req,res)=>{
    try {
        const {username , email, password} = req.body;
        const token = await signInUserService({username , email, password});
        return res.status(200).json({
            success: true,
            message : "Signed In successfully",
            data : token
        });
    } catch (error) {
        console.log(error);
        // Custom error thrown from service layer
        if(error.status){
            return res.status(error.status).json({
                success: false,
                message: error.message
            })
        }

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}