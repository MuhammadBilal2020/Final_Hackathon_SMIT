import express from "express"
import connectDB from "./src/db/index.js";
import userRoutes from "./src/routes/users.route.js";
import dotenv from "dotenv";
import cors from "cors";



dotenv.config(); 
const app = express()
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Final')
})

app.use(
  cors({
    origin: "http://localhost:5173", // Frontend URL
    credentials: true, // To allow cookies
  })
);

// routes
app.use("/api/v1", userRoutes);

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 3000; // Default port set if not provided
    app.listen(PORT, () => {
      console.log(`⚙️  Server is running at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });