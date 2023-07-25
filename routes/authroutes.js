import express from 'express';
import {registercontroller,logincontroller,testcontroller} from '../controllers/authcontroller.js'; 
import { isAdmin, requiresignIn } from '../middlewares/authmiddleware.js';
//router object
const router=express.Router();
//routing
//Register
router.post('/register',registercontroller);
//login||post
router.post("/login",logincontroller);
//test route
router.get('/test',requiresignIn,isAdmin,testcontroller);
export default router