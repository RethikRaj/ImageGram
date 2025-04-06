import express from 'express';
import { createPostController, deletePostController, getAllPostsController, updatePostController } from '../../controllers/postController.js';
import imageUploader from '../../middlewares/imageUploader.js';
import { validate } from '../../validators/validate.js';
import { zodPostSchema } from '../../validators/zodPostSchema.js';

const router = express.Router();

// Create a post
router.post("/", imageUploader, validate(zodPostSchema), createPostController);

// Get all posts
router.get("/", getAllPostsController);

// delete post
router.delete("/:id",deletePostController);

// update post
router.put("/:id", imageUploader, updatePostController);

export default router;