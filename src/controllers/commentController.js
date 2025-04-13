import { createCommentService, getCommentService } from "../services/commentService.js";

export const createCommentController = async (req,res)=>{
    const userDetails = req.user;

    if(!req.body.content || !req.body.onModel || !req.body.commentableId){
        return res.status(400).json({
            success: false,
            message: "Please provide all required fields",
        });
    }

    const {content , onModel, commentableId} = req.body;

    try {
        const createCommentObject = {
            content,
            onModel,
            commentableId,
            user : userDetails.id
        }

        const comment = await createCommentService(createCommentObject);

        return res.status(201).json({
            success: true,
            message: "Comment created successfully",
            data: comment
        });




    } catch (error) {
        console.log(error);
        if(error.status){
            return res.status(error.status).json({
                message : error.message,
                success: false
            })
        }
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

export const getCommentController = async (req,res)=>{
    try{
        const commentId = req.params.id;
        const comment = await getCommentService(commentId);
        return res.status(200).json({
            success: true,
            message: "Comment fetched successfully",
            data: comment
        })
    }catch (error) {
        console.log(error);
        if(error.status){
            return res.status(error.status).json({
                message : error.message,
                success: false
            })
        }
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}