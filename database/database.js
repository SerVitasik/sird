import mongoose from "mongoose";

const connectMongoDb = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDb;
