import { Router } from "express";
import { ComputadorController } from "../controllers/ComputadorController";

const router = Router();
const computadorController = new ComputadorController();

router.post("/computador/cadastrar", computadorController.cadastrar);
router.get("/computador/listar", computadorController.listar);
router.delete("/computador/remover/:id", computadorController.remover);

export { router };
