import mongoose from "mongoose";

const connectMongoDb = () => {
    try {
        mongoose.connect("mongodb+srv://websitesird:MLwMcizyvDRWs28F@cluster0.ribwhse.mongodb.net/Sird?retryWrites=true&w=majority");
        console.log("Connected to mongodb");
        
    } catch (error) {
        console.log(error);
    }
};

export default connectMongoDb;