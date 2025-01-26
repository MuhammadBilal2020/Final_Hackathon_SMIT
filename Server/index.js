import express from "express"
import connectDB from "./src/db/index.js";
import userRoutes from "./src/routes/users.route.js";
import dotenv from "dotenv";
import cors from "cors";




// app.options('/api/v1/register', cors()); // Handle preflight requests


dotenv.config();
const app = express()
app.use(express.json());

app.use(
  cors({
    origin: "*"
  })
);

app.get('/', (req, res) => {
  res.send('Final')
})



// routes
app.use("/api/v1", userRoutes);

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });