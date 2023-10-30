import { Router } from "express";
import { getAll, newRepord, getById } from "../controlers/servises.js";

const router = Router();

router.get(`/records`, getAll);

router.get(`/:id`, getById);

router.post(`/add`, newRepord);

export default router;
