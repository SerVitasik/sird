import mongoose from "mongoose";
import { MONGODB_URL } from "@/config";

const connectMongoDb = () => {
    try {
        mongoose.connect(MONGODB_URL);
        console.log("Connected to mongodb");
        
    } catch (error) {
        console.log(error);
    }
};

export default connectMongoDb;