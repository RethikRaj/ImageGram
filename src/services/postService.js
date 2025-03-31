import { createPostRepository } from "../repositories/postRepository";

export const createPostService = async (createPostObject)=>{
    const { imageUrl, caption, userId } = createPostObject;
    try{
        const newPost = await createPostRepository(imageUrl, caption, userId);
        return newPost;
    }catch(error){
        console.log(error);
    }
}