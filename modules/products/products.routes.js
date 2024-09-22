import {Router} from "express";
import { addProduct, totalRevenue, totalSold } from "./products.controller.js";

const productRouter = Router();
productRouter.post("/add",addProduct).get("/totalRevenue",totalRevenue).get("/totalSold",totalSold)
export default productRouter;