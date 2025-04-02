import { createPostService, deletePostService, getAllPostsService } from "../services/postService.js";

export const createPostController = async (req, res) => {
    const caption = req.body.caption;
    const imageUrl = req.file.location;

    try {
        const newPost = await createPostService({
            imageUrl,
            caption,
        });// pass user id later

        return res.status(201).json({
            success: true,
            message: "Post created successfully",
            data: newPost
        });
    } catch (error) {
        console.log(error);
    }
}

export const getAllPostsController = async (req, res) => {
    try {
        const posts = await getAllPostsService();
        return res.status(200).json({
            success: true,
            posts : posts
        });
    } catch (error) {
        console.log(error);
    }
};

export const deletePostController = async (req,res)=>{
    try {
        const deletedPost = await deletePostService(req.params.id);
        return res.json({
            success: true,
            message: "Post deleted successfully",
            deletedPost : deletedPost
        })
    } catch (error) {
        console.log(error);
    }
}