import { countPosts, createPostRepository, deletePostById, findAllPosts } from "../repositories/postRepository.js";

export const createPostService = async (createPostObject)=>{
    const { imageUrl, caption, } = createPostObject; // userId need to be added
    try{
        const newPost = await createPostRepository(imageUrl, caption,); // pass userid later.
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

export const deletePostService = async (postId)=>{
    try {
        const deletedPost = await deletePostById(postId);
        return deletedPost;
    } catch (error) {
        console.log(error);
    }
}