import { Router } from "express";
import {
  SingleConversation,
  UpdateConversations,
  createConversations,
  getConversations,
} from "../controllers/conversation.controller";
import { auth } from "../middlewares/verifyToken";

const router = Router();
router.get("/", auth, getConversations);
router.post("/", auth, createConversations);
router.get("/:id", auth, SingleConversation);
router.put("/:id", auth, UpdateConversations);

export default router;
