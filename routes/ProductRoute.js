import express from 'express';
import { isAdmin, requiresignIn } from '../middlewares/authmiddleware.js';
import formidable from "express-formidable"
import { createproductcontroller, deleteproductcontroller, getproductcontroller, getsingleproductcontroller, productphotocontroller, updateproductcontroller } from '../controllers/productController.js';
const router=express.Router()
router.post('/create-product',requiresignIn,isAdmin,formidable(),createproductcontroller);
router.put('/update-product/:pid',requiresignIn,isAdmin,formidable(),updateproductcontroller)
router.get('/product-photo/:pid',productphotocontroller);
router.get('/get-product',getproductcontroller);
router.get('/get-product/:slug',getsingleproductcontroller);
router.delete('/delete-product/:pid',requiresignIn,isAdmin,deleteproductcontroller);
export default router