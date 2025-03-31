import { createPostService } from "../services/postService.js";

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