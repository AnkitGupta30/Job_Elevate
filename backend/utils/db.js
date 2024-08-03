import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MOGODB_URI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
