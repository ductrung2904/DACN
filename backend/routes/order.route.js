import express from "express";
import { addMore, createOrder } from "../controllers/order.controller.js";

const orderRoute = express.Router();

orderRoute.post("/createOrder", createOrder)
orderRoute.post("/addMore", addMore)

export default orderRoute
