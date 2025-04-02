import express from 'express';
import connectToDB from './config/dbConfig.js';
import imageUploader from './middlewares/imageUploader.js';
import { createPostController, getAllPostsController } from './controllers/postController.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());

// Create a post
app.post("/posts", imageUploader, createPostController);

// Get all posts
app.get("/posts", getAllPostsController);

app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
    // Connecting to DB
    connectToDB();
})