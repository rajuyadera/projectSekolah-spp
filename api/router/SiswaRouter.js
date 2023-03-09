import express from "express"
import { createSiswa, deleteSiswa, getSiswa, getSiswaById, updateSiswa } from "../controller/SiswaController.js";

const router = express.Router()

router.get("/siswa", getSiswa);
router.get("/siswa/:id_siswa", getSiswaById);
router.post("/siswa", createSiswa)
router.patch("/siswa/:id_siswa", updateSiswa)
router.delete("/siswa/:id_siswa", deleteSiswa)

export default router