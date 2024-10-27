import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRouter from "./routes/user.route.js";
import companyRouter from "./routes/company.route.js";
import jobRouter from "./routes/job.route.js";
import applicationRouter from "./routes/application.route.js";

const app = express();
const PORT = 3000;
const corsOption = {
    origin : "http//localhost:5173",
    credentials : true
}
dotenv.config({});

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors(corsOption));

//routes
app.use("/api/v1/user",userRouter);
app.use("/api/v1/company",companyRouter);
app.use("/api/v1/job",jobRouter);
app.use("/api/v1/application",applicationRouter);

app.listen("3000",()=>{
    console.log(`server running at port ${PORT}`);
    connectDB();
})