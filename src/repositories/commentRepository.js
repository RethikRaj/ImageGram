import Comment from "../schema/comment.js"

export const createCommentRepository = async (commentObject)=>{
    try {
        const comment = await Comment.create(commentObject);
        return comment;
    } catch (error) {
        console.log(error);
    }
}

export const findCommentById = async (commentId)=>{
    try {
        const comment = Comment.findById(commentId).populate('replies');
        return comment;
    } catch (error) {
        console.log(error);
    }
}