/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Router } from "express";
import { auth } from "../middlewares/verifyToken";
import { createReview, deleteReview, getReviews } from "../controllers/review.controller";

const router = Router();
router.post('/', auth , createReview )
router.get('/:id', getReviews)
router.delete('/:id' , deleteReview)

export default router;
