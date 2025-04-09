import { countPosts, createPostRepository, deletePostById, findAllPosts, findPostById, updatePostById } from "../repositories/postRepository.js";

export const createPostService = async (createPostObject)=>{
    const { imageUrl, caption, user } = createPostObject; 
    try{
        const newPost = await createPostRepository(imageUrl, caption,user); 
        return newPost;
    }catch(error){
        console.log(error);
    }
}

export const getAllPostsService = async (limit , offset) => {
    try{
        const paginatedPosts = await findAllPosts(limit , offset);

        const totalPosts = await countPosts();

        const totalPages = Math.ceil(totalPosts / limit);
        
        const currentPage = Math.floor(offset / limit) + 1;

        const hasNextPage = currentPage < totalPages;

        return {
            paginatedPosts,
            totalPosts,
            totalPages,
            currentPage,
            hasNextPage
        };
    }catch(error){
        console.log(error);
    }
};

export const deletePostService = async (postId, user)=>{
    try {
        // Only if the post belongs to the user, then only delete the post
        const post = await findPostById(postId);
        // console.log(post);
        // console.log(user);
        if(post.user.toString() !== user){
            throw {
                status: 403,
                message: "You are not authorized to delete this post"
            }
        }

        const deletedPost = await deletePostById(postId);
        return deletedPost;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const updatePostService = async (postId, updatePostObject)=>{
    try{
        const {imageUrl , caption} = updatePostObject;
        const updatedPost = await updatePostById(postId,imageUrl,caption)
        return updatedPost;
    }catch(error){
        console.log(error);
    }
}