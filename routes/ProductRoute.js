import express from 'express';
import { isAdmin, requiresignIn } from '../middlewares/authmiddleware.js';
import formidable from "express-formidable"
import { createproductcontroller, deleteproductcontroller, getproductcontroller, getsingleproductcontroller, productCategoryController, productListController, productSearchfilterController, productcountcontroller, productfiltercontroller, productphotocontroller, relatedproductController, updateproductcontroller } from '../controllers/productController.js';
const router=express.Router()
router.post('/create-product',requiresignIn,isAdmin,formidable(),createproductcontroller);
router.put('/update-product/:pid',requiresignIn,isAdmin,formidable(),updateproductcontroller);
router.get('/product-photo/:pid',productphotocontroller);
router.get('/get-product',getproductcontroller);
router.get('/get-product/:slug',getsingleproductcontroller);
router.delete('/delete-product/:pid',requiresignIn,isAdmin,deleteproductcontroller);
router.post('/product-filters',productfiltercontroller);
router.get('/product-count',productcountcontroller);
router.get('/product-list/:page',productListController);
router.get('/search/:keyword',productSearchfilterController);
router.get('/related-product/:pid/:cid',relatedproductController);
router.get('/product-category/:slug',productCategoryController);
export default router