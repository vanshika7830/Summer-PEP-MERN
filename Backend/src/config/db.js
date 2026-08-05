import mongoose from "mongoose";
import dotenv from "dotenv/config";
export const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    }catch(err){
        console.log("Database connection failed", err);
    }
}