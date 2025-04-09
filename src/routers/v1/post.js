import express from 'express';
import { createPostController, deletePostController, getAllPostsController, updatePostController } from '../../controllers/postController.js';
import imageUploader from '../../middlewares/imageUploader.js';
import { validate } from '../../validators/validate.js';
import { zodPostSchema } from '../../validators/zodPostSchema.js';
import { isAuthenticated } from '../../middlewares/isAuthenticated.js';

const router = express.Router();

// Create a post
router.post("/", isAuthenticated,imageUploader, validate(zodPostSchema), createPostController);

// Get all posts
router.get("/", getAllPostsController);

// delete post
router.delete("/:id", isAuthenticated,deletePostController);

// update post
router.put("/:id", isAuthenticated,imageUploader, updatePostController);

export default router;