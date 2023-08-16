import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import connectdb from './db.js';
import authroutes from './routes/authroutes.js';
import categoryRoutes from './routes/categoryRoutes.js'
import cors from 'cors';
//configure env
dotenv.config();
//databse config
connectdb();
//rest  object
const app=express();
//middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',authroutes);
app.use('/api/v1/category',categoryRoutes);
//rest api
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Ecommerce app</h1>")
})
//port
const PORT=process.env.PORT;
//run 
app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`.bgBlue.white);
});