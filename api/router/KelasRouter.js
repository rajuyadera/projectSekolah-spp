import express from "express";
import { createKelas, getKelas } from "../controller/KelasController.js";

const router = express.Router();

router.get("/kelas", getKelas);
router.post("/kelas", createKelas);

export default router;
