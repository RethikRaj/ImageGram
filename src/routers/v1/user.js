import express from 'express';
import { validate } from '../../validators/validate.js';
import { zodSignUpSchema } from '../../validators/zodSignUpSchema.js';
import { signInUserController, signUpController } from '../../controllers/userController.js';
import { zodSignInSchema } from '../../validators/zodSignInSchema.js';

const router = express.Router();

router.post('/signup',validate(zodSignUpSchema),signUpController);
router.post('/signin',validate(zodSignInSchema),signInUserController);

export default router;