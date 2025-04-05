import express from 'express';
import postRouter from './post.js';

const router = express.Router();

router.use('/posts', postRouter); // if in the remaining url i.e. after /api/v1, we have the url starting with /posts , then the request is forwarded to postRouter

export default router;