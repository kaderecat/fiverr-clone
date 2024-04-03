import { Router } from "express";
import {
  createGig,
  deleteGig,
  getGig,
  getGigs,
} from "../controllers/gig.controller";
import { auth } from "../middlewares/verifyToken";

const router = Router();

router.post("/add", auth, createGig);
router.delete("/:id", auth, deleteGig);
router.get("/single/:id", getGig);
router.get("/", getGigs);

export default router;
