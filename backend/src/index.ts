import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


// Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/blog", blogRouter);


app.get("/", (req, res) => {
    res.json({
        message: "BlogCraft backend running 🚀"
    });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});