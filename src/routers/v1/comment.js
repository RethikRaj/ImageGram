import express from "express";
import { createCommentController, getCommentController } from "../../controllers/commentController.js";
import { isAuthenticated } from "../../middlewares/isAuthenticated.js";
import zodCommentSchema from "../../validators/zodCommentSchema.js";
import { validate } from "../../validators/validate.js";

const router = express.Router();

router.post('/',isAuthenticated,validate(zodCommentSchema),createCommentController);

router.get("/:id",isAuthenticated, getCommentController);

export default router;