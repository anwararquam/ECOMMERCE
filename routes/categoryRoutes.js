import express from 'express';
import {isAdmin, requiresignIn} from '../middlewares/authmiddleware.js'
import { categorycontroller, createCategoryController, updateCategoryController } from '../controllers/CategoryController.js';
const router=express.Router();
//create category
router.post('/create-category',requiresignIn,isAdmin,createCategoryController)
//update controller
router.put('/update-category/:id',requiresignIn,isAdmin,updateCategoryController)
router.get('/get-category',categorycontroller)
export default router;
