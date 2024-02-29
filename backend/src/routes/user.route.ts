import { Router } from "express";
import { deleteFn, getUser } from "../controllers/user.controller";
import { auth } from "../middlewares/verifyToken";
const router = Router();

router.delete("/:id", auth, deleteFn);
router.get("/:id", getUser);

export default router;
