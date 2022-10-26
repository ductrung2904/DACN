import express from "express";
import { getAllBook, getAllCategory, getAllCompany, getAllShop, getBook, getBookByCategory, getBookByCompany, getBookByShop } from "../controllers/product.controller.js"

const productRoute = express.Router();

productRoute.get("/book", getAllBook)
productRoute.get("/book/:id/:metatitle", getBook)
productRoute.get("/category", getAllCategory)
productRoute.get("/company", getAllCompany)
productRoute.get("/shop", getAllShop)
productRoute.get("/category/:id", getBookByCategory)
productRoute.get("/company/:id", getBookByCompany)
productRoute.get("/shop/:id", getBookByShop)

export default productRoute;
