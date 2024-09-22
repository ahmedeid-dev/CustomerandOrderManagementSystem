import { Router } from "express";
import { above5Orders, averageOrder, createOrder, earliest, mostItems, noOrders, percentage, topCustomers } from "./orders.controller.js";

const orderRouter = Router();
orderRouter.post('/create', createOrder).get("/average", averageOrder).get("/noOrders", noOrders)
    .get("/mostItems", mostItems).get("/topCustomers", topCustomers).get("/above5Orders", above5Orders)
    .get("/percentage",percentage).get("/earliest",earliest)
export default orderRouter;