import { Router } from "express";
import { getAll, newRepord } from "../controlers/servises.js";

const router = Router();

router.get(`/records`, getAll);

router.post("/add", newRepord);

export default router;
