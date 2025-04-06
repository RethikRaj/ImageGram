import { createPostService, deletePostService, getAllPostsService, updatePostService } from "../services/postService.js";

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
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

export const getAllPostsController = async (req, res) => {
    try {
        const limit = req.query.limit || 10;
        const offset = req.query.offset || 0;
        const {paginatedPosts, totalPosts, totalPage , currentPage, hasNextPage} = await getAllPostsService(limit,offset);

        return res.status(200).json({
            success: true,
            message: "Posts fetched successfully",
            data: paginatedPosts,
            totalPosts: totalPosts,
            totalPage: totalPage,
            currentPage: currentPage,
            hasNextPage: hasNextPage,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const deletePostController = async (req,res)=>{
    try {
        const deletedPost = await deletePostService(req.params.id);
        if(!deletedPost) {
            return res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }
        return res.json({
            success: true,
            message: "Post deleted successfully",
            deletedPost : deletedPost
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

export const updatePostController = async (req,res)=>{
    try {
        const postId = req.params.id;
        const caption = req.body.caption;
        const imageUrl = req.file.location;
        const updatedPost = await updatePostService(postId,{
            caption,
            imageUrl
        })
        return res.status(200).json({
            success: true,
            message: "Post updated successfully",
            updatedPost : updatedPost
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}