import express from 'express';
import { createPostController, deletePostController, getAllPostsController, updatePostController } from '../../controllers/postController.js';
import imageUploader from '../../middlewares/imageUploader.js';
import { validate } from '../../validators/validate.js';
import { zodPostSchema } from '../../validators/zodPostSchema.js';
import { isAuthenticated } from '../../middlewares/isAuthenticated.js';
import { isAdmin } from '../../middlewares/isAdmin.js';

const router = express.Router();

// Create a post
/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     description: Creates a new post using the provided information.
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: Post created successfully
 *       400:
 *         description: Bad request - Validation failed
 *       500:
 *         description: Internal server error
 */
router.post("/", isAuthenticated,imageUploader, validate(zodPostSchema), createPostController);

// Get all posts
/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Get all posts
 *     description: Retrieves a list of all posts.
 *     responses:
 *       200:
 *         description: Posts retrieved successfully
 *       500:
 *         description: Internal server error
 */
router.get("/", getAllPostsController);

// delete post
/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Delete a post
 *     description: Deletes a post by its ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the post to delete
 *     responses:
 *       200:
 *         description: Post deleted successfully
 *       404:
 *         description: Not Found - Post not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:id",isAuthenticated,deletePostController);

// update post
/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     summary: Update a post
 *     description: Updates a post by its ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the post to update
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Post updated successfully
 *       404:
 *         description: Not Found - Post not found
 *       500:
 *         description: Internal server error
 */
router.put("/:id",isAuthenticated, isAdmin,imageUploader, updatePostController);

export default router;