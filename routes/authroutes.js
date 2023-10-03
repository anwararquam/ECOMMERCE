import express from 'express';
import {registercontroller,logincontroller,testcontroller, forgotPasswordController, updateProfileController} from '../controllers/authcontroller.js'; 
import { isAdmin, requiresignIn } from '../middlewares/authmiddleware.js';
//router object
const router=express.Router();
//routing
//Register
router.post('/register',registercontroller);
//login||post
router.post("/login",logincontroller);
//forget password
router.post('/forgot-password',forgotPasswordController)
//test route
router.get('/test',requiresignIn,isAdmin,testcontroller);
//protected route auth
router.get('/user-auth',requiresignIn,(req,res)=>{
    res.status(200).send({
        ok:true
    })
})

//protected route for admin
router.get('/admin-auth',requiresignIn,isAdmin,(req,res)=>{
    res.status(200).send({
        ok:true
    })
})
router.put('/profile',requiresignIn,updateProfileController)
export default router