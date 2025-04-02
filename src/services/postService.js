import { createPostRepository, findAllPosts } from "../repositories/postRepository.js";

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