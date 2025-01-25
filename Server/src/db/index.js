import mongoose from "mongoose";

const connectDB = async () => {
  try {
   
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}FINAL_HACKATHON`
    );

    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1); // Exit process on failure
  }
};

export default connectDB;
//Grand_Finalay