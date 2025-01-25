import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/db/index.js";
import userRoutes from "./src/routes/users.route.js";

dotenv.config();
const app = express();

// Enable CORS for your frontend (local and prod environments)
app.use(cors({
  origin: '*', // Allow all origins
  credentials: true, // To allow cookies and credentials
  
}));


app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Final');
});

// API routes
app.use("/api/v1", userRoutes);

// Connect to the database and start the server
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`⚙️  Server is running at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });
