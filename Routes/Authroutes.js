import express from 'express'
import { RegisterController,Loginuser,testController } from '../controller/AuthController.js';
import { Isadmin, RequireSignIn } from '../Middleware/AuthMiddleware.js';

const router = express.Router();

router.post('/register',RegisterController)
router.post('/login',Loginuser);
router.get('/test',RequireSignIn,Isadmin,testController)

export default router;


