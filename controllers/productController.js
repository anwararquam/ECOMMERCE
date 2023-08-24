import slugify from "slugify";
import Productmodel from "../models/Productmodel.js"
import fs from 'fs';

export const createproductcontroller=async(req,res)=>{
try {
    const {name,description,price,category,quantity} =req.fields
    const {photo}=req.files
    switch(true){
        case !name:res.status(500).send({error:'Name is Required'})
        case !description:res.status(500).send({error:'Description is Required'})
        case !price:res.status(500).send({error:'Price is Required'})
        case !category:res.status(500).send({error:'Category is Required'})
        case !quantity:res.status(500).send({error:'Quantity is Required'})
        case !photo && photo.size>1000:res.status(500).send({error:'Photo is Required && Size should be less than 1mb'})
    }
    const product=new Productmodel({...req.fields,slug:slugify(name)})
    if(photo){
        product.photo.data=fs.readFileSync(photo.path);
        product.photo.contentType=photo.type;
    }
     await product.save()
     res.status(201).send({
        success:true,
        message:"Product Created Successfully",
        product
     })
} catch (error) {
    console.log(error),
    res.status(500).send({
        success:false,
        error,
        message:"Error in creating product",

    })
}
}
//update product present in the product model
export const productphotocontroller=async(req,res)=>{
    try {
        const product=await Productmodel.findById(req.params.pid).select("photo");
        if(product.photo.data){
            res.set('Content-type',product.photo.contentType)
            return res.status(200).send(product.photo.data);
        }
        
    } catch (error) {
        console.log(error),
        res.status(500).send({
            success:false,
            message:"Error while getting photos",
            error,
            
        })
    }
}
//productcontroller for getting a single product at a time
export const getsingleproductcontroller=async(req,res)=>{
        try {
            const product=await Productmodel.findOne({slug:req.params.slug}).select('-photo').populate('category');
            res.status(200).send({
                success:true,
                message:"Successfully fetched the product",
                product,
            })
        } catch (error) {
            console.log(error);
            res.status(500).send({
                success:false,
                error,
                messsage:"Unable to get single product"
            })
        }

}
//acesss product 
export const getproductcontroller=async(req,res)=>{
    try {
        const products= await Productmodel.find({}).populate('categrory').select('-photo').limit(12).sort({createdAt:-1});
        res.status(200).send({
            success:true,
            message:"All products",
            total:products.length,
            products,
            
        })
    } catch (error) {
        console.log(error),
        res.status(500).send({
            success:false,
            message:"Error in getting products",
            error:error.message,
            
        })
        
    }
}
//delete product
export const deleteproductcontroller=async(req,res)=>{
        try {
            await Productmodel.findByIdAndDelete(req.params.pid).select("-photo");
            res.status(200).send({
                success:true,
                message:"Product deleted successfully"
            });
        } catch (error) {
            console.log(error),
            res.status(500).send({
                success:false,
                message:"Unable to delete the product",
                error,
            })
        }
}
export const updateproductcontroller=async(req,res)=>{
    try {
        const {name,description,price,category,quantity} =req.fields
        const {photo}=req.files
        switch(true){
            case !name:res.status(500).send({error:'Name is Required'})
            case !description:res.status(500).send({error:'Description is Required'})
            case !price:res.status(500).send({error:'Price is Required'})
            case !category:res.status(500).send({error:'Category is Required'})
            case !quantity:res.status(500).send({error:'Quantity is Required'})
            case !photo && photo.size>1000:res.status(500).send({error:'Photo is Required && Size should be less than 1mb'})
        }
        const product= await Productmodel.findByIdAndUpdate(req.params.pid,{...req.fields,slug:slugify(name)},{new:true})
        if(photo){
            product.photo.data=fs.readFileSync(photo.path);
            product.photo.contentType=photo.type;
        }
         await product.save();
         res.status(201).send({
            success:true,
            message:"Product Updated Successfully",
            product
         })
    } catch (error) {
        console.log(error),
        res.status(500).send({
            success:false,
            message:"Unable to Update the Product",
            error
        })
    }
}