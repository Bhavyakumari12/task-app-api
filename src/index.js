import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import taskRoutes from "./routes/task.routes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/tasks", taskRoutes);

app.listen(PORT, HOST, () => {
  console.log(`Server running on port ${PORT}`);
});
