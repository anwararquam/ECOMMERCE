import { comparepassword, hashpassword } from "../helpers/authhelper.js";
import usermodel from "../models/usermodel.js";
import JWT from "jsonwebtoken";
export const registercontroller=async(req,res)=>{
    try {
        const {name,email,password,phone,address,answer}=req.body;
        //validations
        if(!name){
        return res.send({error:'Name is Required'})
        }
        if(!email){
        return res.send({message:'Email is Required'})
       }
       if(!password){
        return res.send({message:'password is Required'})
   }
   if(!phone){
        return res.send({message:'Phone is Required'})
}if(!address){
        return res.send({message:'Address is Required'})
}
if(!answer){
    return res.send({message:'Answer is Required'})
}

//check user
const existinguser= await usermodel.findOne({email:email})
//check existinguser
if(existinguser){
    return res.status(200).send({
        success:false,
        message:'Already register please login'
    })
}
//register user
const hashedpassword=await hashpassword(password);
//save
const user=await new usermodel({name,email,phone,address,password:hashedpassword,answer}).save();
res.status(201).send({
    success:true,
    message:'User Register successfully',
    user
    })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in Registration',
            error
        })
    }
}
//post login
export const logincontroller=async(req,res)=>{
    try {
        const {email,password}=req.body;
        //validation 
        if(!email|| !password){
            return res.status(404).send({
                success:false,
                message:"Invalid email or password"
            })
        }
        //check user
        const user=await usermodel.findOne({email});
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Email is not registered"
            })
        }
        const match=await comparepassword(password,user.password);
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid Password"
            })
        }
        const token=await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
        res.status(200).send({
            success:true,
            message:'Login successfully',
            user:{
               name:user.name,
               email:user.email,
               phone:user.phone,
               address:user.address,
               role:user.role,
            },
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in login",error

        })
    }
};
//testcontroller
export const testcontroller=async(req,res)=>{
    res.send('Protected route')
}
//forget password
export const forgotPasswordController=async(req,res)=>{
    try {
        const {email,answer,newpassword}=req.body
        if(!email){
            res.status(400).send({message:"Email is required"})
        }if(!newpassword){
            res.status(400).send({message:"New Password is required"})
        }if(!answer){
            res.status(400).send({message:"answer is required"})
        }
        //check 
        const user=await usermodel.findOne({email,answer})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"Wrong Email or Answer"
            })
        }
        const hashed=await hashpassword(newpassword)
        await usermodel.findByIdAndUpdate(user._id,{password:hashed})
        res.status(200).send({
            success:true,
            message:"Password Reset Successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Something went wrong",
            error
        })
        
    }
}