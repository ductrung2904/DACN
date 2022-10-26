import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import logger from "morgan";
// import "babel-polyfill";
import cookieParser from "cookie-parser";
import productRoute from './routes/product.route.js';
import userRoute from './routes/user.route.js';
import orderRoute from './routes/order.route.js';

const app = express();

// middleware
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/product", productRoute);
app.use("/user", userRoute)
app.use("/order", orderRoute)

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`backend running on port ${port}`);
});

export default app