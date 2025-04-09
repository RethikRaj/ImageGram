import express from 'express';
import { validate } from '../../validators/validate.js';
import { zodSignUpSchema } from '../../validators/zodSignUpSchema.js';
import { signInUserController, signUpController } from '../../controllers/userController.js';
import { zodSignInSchema } from '../../validators/zodSignInSchema.js';

const router = express.Router();

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Register a new user
 *     description: Creates a new user account using the provided information.
 *     requestBody:
 *       required: true
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request - Validation failed
 *       409:
 *         description: Conflict - Email already exists
 *       500:
 *         description: Internal server error
 */

router.post('/signup',validate(zodSignUpSchema),signUpController);

/**
 * @swagger
 * /signin:
 *   post:
 *     summary: Sign in a user
 *     description: Authenticates a user using the provided credentials.
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: User signed in successfully
 *       401:
 *         description: Unauthorized - Invalid credentials
 *       404:
 *         description: Not Found - User not found
 *       500:
 *         description: Internal server error
 */
router.post('/signin',validate(zodSignInSchema),signInUserController);

export default router;