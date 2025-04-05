import express from 'express';
import { createPostController, deletePostController, getAllPostsController } from '../../controllers/postController';
import imageUploader from '../../middlewares/imageUploader';

const router = express.Router();

// Create a post
router.post("/", imageUploader, createPostController);

// Get all posts
router.get("/", getAllPostsController);

// delete post
router.delete("/:id",deletePostController);

export default router;