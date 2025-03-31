import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    imageUrl : {
        type : String,
        required: true,
    },
    caption : {
        type: String,
        required : true,
        minLength: 5
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

});

const post = mongoose.model("Post", postSchema);

export default post;