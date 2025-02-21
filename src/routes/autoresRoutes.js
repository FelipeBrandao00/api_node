import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router.get("/autores", AutorController.listarAutores);
router.post("/autores", AutorController.cadastrarAutor);
router.get("/autores/:id", AutorController.listarAutorPorId);
router.put("/autores/:id", AutorController.atualizarAutor);
router.delete("/autores/:id", AutorController.deletarAutor);

export default router;
