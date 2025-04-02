import { createPostRepository, deletePostById, findAllPosts } from "../repositories/postRepository.js";

export const createPostService = async (createPostObject)=>{
    const { imageUrl, caption, } = createPostObject; // userId need to be added
    try{
        const newPost = await createPostRepository(imageUrl, caption,); // pass userid later.
        return newPost;
    }catch(error){
        console.log(error);
    }
}

export const getAllPostsService = async () => {
    try{
        const posts = await findAllPosts();
        return posts;
    }catch(error){
        console.log(error);
    }
};

export const deletePostService = async (postId)=>{
    try {
        const deletedPost = await deletePostById(postId);
        return deletedPost;
    } catch (error) {
        console.log(error);
    }
}