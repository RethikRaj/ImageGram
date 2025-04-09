import { createUserRepository, findUserByEmail } from '../repositories/userRepository.js';
import bcrypt from 'bcrypt';
import { generateJwtToken } from '../utils/jwt.js';

export const signUpService = async (createUserObject)=>{
    
    try{
        const {email, password, username} = createUserObject;

        const newUser = await createUserRepository(username, email, password);

        return newUser;
    }catch(error){
        console.log("Service Error : "+ error.name + " " + error.message + " "+ error.code);
        // If a user already exists , then since we have unique constraint on email and username , mongodb throws an error to repository layer which is thrown to controller layer . 
        if(error.name === "MongoServerError" && error.code === 11000 ){
            throw {
                message: "User already exists with this email or username",
                status: 409
            };
        }
        throw error;
        
    }
    return newUser;
}


export const signInUserService = async (userDetails)=>{
    try {
        const user = await findUserByEmail(userDetails.email);
        if(!user){
            throw {
                message: "User not found",
                status: 404
            }
        }

        // Now check whether the password matches the hashed password or not
        const isPasswordMatch = await bcrypt.compare(userDetails.password,user.password);
        if(!isPasswordMatch){
            throw {
                message: "Invalid password",
                status: 401
            }
        }

        const token = generateJwtToken({
            id : user._id,
            username : user.username,
            email: user.email
        })

        return token;
    } catch (error) {
        // console.log("Service Error : "+ error.name + " " + error.message + " "+ error.code);
        throw error;
    }
}

export const checkIfUserExistsService = async (email)=>{
    try {
        const user = await findUserByEmail(email);
        if(!user){
            return false;
        }
        return true;
    } catch (error) {
        throw error;
    }
}

