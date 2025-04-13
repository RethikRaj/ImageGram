import { createCommentRepository, findCommentById } from "../repositories/commentRepository.js";
import { findPostById } from "../repositories/postRepository.js";

export const createCommentService = async (commentObject)=>{
    try {
        
        // 1. Find the parent model (Post, Comment )
        let parent = await fetchCommentParent(commentObject.onModel, commentObject.commentableId);
        if(!parent){
            throw {
                status: 404,
                message: `${commentObject.onModel} not found`
            }
        }
        // 2. Create comment 
        const comment = await createCommentRepository(commentObject);
        // 3. Add comment to parent model
        await addChildCommentToParentComment(commentObject.onModel,parent,comment);
        
        return comment;
    } catch (error) {
        console.log(error);
    }
}

const addChildCommentToParentComment = async (onModel,parent,comment)=>{
    try{
        if(onModel === "Post"){
            parent.comments.push(comment._id);
        }else if(onModel === "Comment") {
            parent.replies.push(comment._id);
        }
        await parent.save();
    }catch(error){
        console.log(error);
    }
}

const fetchCommentParent = async (onModel, commentableId)=>{
    try{
        let parent;
        if(onModel === "Post"){
            parent = await findPostById(commentableId);
        }else if(onModel === "Comment"){
            parent = await findCommentById(commentableId);
        }
        return parent;
    }catch(error){
        console.log(error);
    }
}

export const getCommentService = async (commentId)=>{
    try {
        const comment = await findCommentById(commentId);
        if(!comment){
            throw {
                status: 404,
                message: "Comment not found"
            }
        }
        return comment;
    } catch (error) {
        console.log(error);
        throw error;
    }
}