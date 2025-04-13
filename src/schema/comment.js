import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content : {
        type : String,
        required: true,
        minLength: 5,
        maxLength: 200,
    },
    onModel : {
        type: String,
        required : true,
        enum: ["Post","Comment"]
    },
    commentableId : {
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        refPath: 'onModel'
    },
    user: {
        type : mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    replies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ]
},{timestamps : true});

const comment = mongoose.model("Comment",commentSchema);

export default comment;


/**
 * C1 : 
 *  replies : [
 *        C2
 *        C3
 *        C4 : replies : [C5]
 *  ]
 */