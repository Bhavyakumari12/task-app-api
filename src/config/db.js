import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const username = process.env.MONGO_USERNAME;
    const password = process.env.MONGO_PASSWORD;
    const clusterUrl = process.env.MONGO_URL;
    const database = process.env.MONGO_DB;

    if (!username || !password || !clusterUrl || !database) {
      console.error("MongoDB URI is not provided");
      process.exit(1);
    }

    const uri = `mongodb+srv://${username}:${password}@${clusterUrl}/${database}?retryWrites=true&w=majority`;

    const conn = await mongoose.connect(uri);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
