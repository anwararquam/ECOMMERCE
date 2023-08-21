import slugify from "slugify";
import Productmodel from "../models/Productmodel.js"
import fs from 'fs';

export const createproductcontroller=async(req,res)=>{
try {
    const {name,description,slug,price,category,quantity} =req.fields
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
        product.photo.data=fs.readFileSync(photo.path)
        product.photo.contentType=photo.type
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