import { Router } from "express";
import proxyController from "../controllers/proxyController.js";

const router = Router();

router.get('/', proxyController.getMovies);

export default router;