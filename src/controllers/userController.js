import { signUpService } from "../services/userService.js";

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