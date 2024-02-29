/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Router } from "express";
import { auth } from "../middlewares/verifyToken";
import {  confirmFn, getOrders, intent } from "../controllers/order.controller";

const router = Router();

router.get("/", auth, getOrders);
// router.post("/:id", auth, createOrders);
router.post('/create-payment-intent/:id' , auth , intent)

router.put('/' , auth , confirmFn)

export default router;
