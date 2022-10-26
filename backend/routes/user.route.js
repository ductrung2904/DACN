import express from "express";
import { getUser, login, register } from "../controllers/user.controller.js";

const userRoute = express.Router();

userRoute.post("/register", register)
userRoute.post("/login", login)
userRoute.get("/user/:username", getUser)

export default userRoute
