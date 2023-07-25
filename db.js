import mongoose from "mongoose";
import morgan from "morgan";
const connectdb=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to mongoose`)
    } catch (error) {
        console.log(`Error in mongodb ${error}`.bgGreen.white)
    }
}
export default connectdb;