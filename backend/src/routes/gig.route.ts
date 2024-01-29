import { Router } from "express";
import { createGig, deleteGig, getGig, getGigs } from "../controllers/gig.controller";

const router = Router();

router.post('/' , createGig)
router.delete('/:id' , deleteGig)
router.get('/single/:id' , getGig)
router.get('/' , getGigs)

export default router;
