import { Router } from "express";
import { CriarEventos, getPalestrantes, getParticipantes, AgendarEvento, Participantes, Palestrantes } from "../controllers/provaControllers.js"

const router = Router();

router.post("/palestrante/registrar", Palestrantes)

router.get("/palestrante/listar", getPalestrantes)

router.post("/participante/registrar",Participantes)

router.get("/participante/listar", getParticipantes)

router.post("/criar", CriarEventos)

router.get("/agenda", AgendarEvento)

export default router