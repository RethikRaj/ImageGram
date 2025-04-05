import Post from '../schema/post.js';

export const createPostRepository = async (imageUrl, caption, userId) => {
    try {
        const newPost = await Post.create({ imageUrl, caption, userId });
        return newPost;
    } catch (error) {
        console.error(error);
    }
}

export const findPostById = async (postId) => {
    try {
        const post = await Post.findById(postId);
        return post;
    } catch (error) {
        console.error(error);
    }
}

export const findAllPosts = async () => {
    try {
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.error(error);
    }
}

export const countPosts = async ()=>{
    try{
        const totalPosts = await Post.countDocuments();
        return totalPosts;
    }catch(error){
        console.error(error);
    }
}

export const deletePostById = async (postId) => {
    try{
        const deletedPost = await Post.findByIdAndDelete(postId);
        return deletedPost;
    }catch(error){
        console.error(error);
    }
}