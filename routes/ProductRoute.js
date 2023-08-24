import express from 'express';
import { isAdmin, requiresignIn } from '../middlewares/authmiddleware.js';
import formidable from "express-formidable"
import { createproductcontroller, getproductcontroller, getsingleproductcontroller } from '../controllers/productController.js';
const router=express.Router()
router.post('/create-product',requiresignIn,isAdmin,formidable(),createproductcontroller)
router.post('/update-product',isAdmin,requiresignIn,formidable(),createproductcontroller);
router.get('/get-product',getproductcontroller);
router.get('/get-product/:slug',getsingleproductcontroller);
export default router