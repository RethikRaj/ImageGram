import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        minLength: 5,
        maxLength: 25
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minLength: 5,
        validate: {
            validator: function (emailValue){
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);
            },
            message: "Please enter a valid email address"
        },
    },
    password:{
        type: String,
        required: true,
        unique: true,
        minLength: 8,
        validate: {
            validator : (passwordValue)=>{
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(passwordValue);
            },
            message : "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        }
    },
    role: {
        type: String,
        default : "user",
        enum: ["user","admin"]
    }
},{timestamps: true});

userSchema.pre('save',async function (next){
    // incoming user object
    const user = this; // this refers to the current document

    // Hash the password before saving the user document
    try{
        const hashedPassword = await bcrypt.hash(user.password, 10)
        user.password = hashedPassword;
        next();
    }catch(error){
        console.log(error);
    }

})

const user = mongoose.model("User", userSchema);

export default user;