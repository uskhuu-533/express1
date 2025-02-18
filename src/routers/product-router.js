import e from "express";
import { getProduct } from "../controller/product/get-product.js";
import { postProduct } from "../controller/product/post-product.js";

export const productRouter = e.Router()

productRouter.get(`/`, getProduct)
productRouter.post(`/`, postProduct)