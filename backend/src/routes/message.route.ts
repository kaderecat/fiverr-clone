import { Router } from "express";
import { auth } from "../middlewares/verifyToken";
import { getMessages, sendMesseages } from "../controllers/message.controller";

const router = Router();

router.get('/:id' , auth , getMessages)
router.post('/' , auth , sendMesseages)

export default router;
