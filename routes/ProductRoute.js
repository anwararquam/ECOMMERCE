import express from 'express';
import { isAdmin, requiresignIn } from '../middlewares/authmiddleware.js';
import formidable from "express-formidable"
import { createproductcontroller } from '../controllers/productController.js';
const router=express.Router()
router.post('/create-product',requiresignIn,isAdmin,formidable(),createproductcontroller)
export default router