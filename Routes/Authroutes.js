import express from 'express'
import { RegisterController,Loginuser } from '../controller/AuthController.js';
const router = express.Router();

router.post('/register',RegisterController)
router.post('/login',Loginuser)

export default router;


