import { createUserRepository } from '../repositories/userRepository.js';

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

