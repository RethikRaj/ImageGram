import Post from '../schema/post.js';

export const createPostRepository = async (imageUrl, caption, user) => {
    try {
        const newPost = await Post.create({ imageUrl, caption, user });
        return newPost;
    } catch (error) {
        console.error(error);
    }
}

export const findPostById = async (postId) => {
    try {
        const post = await Post.findById(postId);
        console.log(post.comments);
        return post;
    } catch (error) {
        console.error(error);
    }
}

export const findAllPosts = async (limit,offset) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 }).skip(offset).limit(limit).populate('user', 'username email _id').populate('comments');
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

export const updatePostById = async (postId, imageUrl, caption, userId)=>{
    try {
        // const updatedPost = await Post.findByIdAndUpdate(postId, { imageUrl, caption, userId }); // This will not return the updated post
        const updatedPost = await Post.findByIdAndUpdate(postId, { imageUrl, caption, userId }, { new: true }); // This will return the updated post
        return updatedPost;
    } catch (error) {
        console.error(error);
    }
}