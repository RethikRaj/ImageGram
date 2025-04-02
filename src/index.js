import express from 'express';
import connectToDB from './config/dbConfig.js';
import imageUploader from './middlewares/imageUploader.js';
import { createPostController, deletePostController, getAllPostsController } from './controllers/postController.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());

// Create a post
app.post("/posts", imageUploader, createPostController);

// Get all posts
app.get("/posts", getAllPostsController);

// delete post
app.delete("/posts/:id",deletePostController);

app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
    // Connecting to DB
    connectToDB();
})