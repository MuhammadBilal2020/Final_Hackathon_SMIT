import express from "express"
import connectDB from "./src/db/index.js";
import userRoutes from "./src/routes/users.route.js";
import dotenv from "dotenv";
import cors from "cors";


app.use(
  cors({
    origin: "https://final-hackathon-smit.vercel.app", // Frontend URL
    credentials: true, // To allow cookies
  })
);

dotenv.config();
const app = express()
app.use(express.json());

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