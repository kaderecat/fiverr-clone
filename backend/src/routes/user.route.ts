import { Router } from "express";
import { deleteFn } from "../controllers/user.controller";

const router = Router();

router.delete("/:id",  deleteFn);

export default router;
