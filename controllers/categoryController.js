import categorymodel from "../models/Categorymodel.js";
import slugify from "slugify";
export const createCategoryController = async(req,res)=>{
    try {
        const {name}=req.body
        if(!name){
            return res.status(401).send({message:'Name is required'})
        }
        const existingCategory= await categorymodel.findOne({name})
        if(existingCategory){
            return res.status(200).send({
                success:true,
                message:"Category Already Exist"
            })
        }
        const category= await new categorymodel({name,slug:slugify(name),}).save()
        res.status(201).send({
            success:true,
            message:"new category created",
            category
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error in Category"
        })
    }

}
//update categroy
export const updateCategoryController=async (req,res)=>{
        try {
           const {name}=req.body
           const {id}=req.params
           const category=await categorymodel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true}) 
           res.status(200).send({
            success:true,
            message:"Category Updated Successfully",
            category
           })
        } catch (error) {
            console.log(error)
            res.status(500).send({
                success:false,
                message:"Error in update category"
            })
        }
}

//all category 

export const categorycontroller=async(req,res)=>{
    try {
        const category = await categorymodel.find({})
        res.status(200).send({
            message:"All categories List",
            success:true,
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:"error while getting all categories"
        })
    }
}
export const singleCategoryController=async(req,res)=>{
    try {
        
        const category=await categorymodel.findOne({slug:req.params.slug})
        res.status(200).send({
            success:true,
            message:"Get Single Category Successfully",
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:"Error while getting single category"
        })
    }
}
//delete category
export const deleteCategory=async(req,res)=>{
    try {
        const {id}=req.params
        await categorymodel.findByIdAndDelete(id)
        res.status(200).send({
            success:true,
            message:"Category Successfully removed"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            "message":"Error while removing category",
            error
        })
    }
}