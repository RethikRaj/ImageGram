import express from 'express';
import { validate } from '../../validators/validate.js';
import { zodSignUpSchema } from '../../validators/zodSignUpSchema.js';
import { signUpController } from '../../controllers/userController.js';

const router = express.Router();

router.post('/signUp',validate(zodSignUpSchema),signUpController);

export default router;