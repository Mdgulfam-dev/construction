import express from 'express';
import {registerUser, loginUser, submitContactForm} from '../controller/userController.js';
// import auth from '../middleware/auth.js';

const userRouter = express.Router();
userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/contact', submitContactForm);


export default userRouter;

// http://localhost:4001/api/user/register
// http://localhost:4001/api/user/login
// http://localhost:4001/api/user/contact