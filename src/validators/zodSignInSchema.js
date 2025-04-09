import {z} from "zod";

export const zodSignInSchema = z.object({
    email : z.string().email(),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }).refine((val)=>{
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(val), {
            message : "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
        }
    })
})