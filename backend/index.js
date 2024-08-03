import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
dotenv.config({});
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.use(cookieParser());
const options = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(options));

const PORT = process.env.PORT || 3000;
// api's

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.listen(PORT, (req, res) => {
  connectDb();
  console.log(`Server running at port ${PORT}`);
});
