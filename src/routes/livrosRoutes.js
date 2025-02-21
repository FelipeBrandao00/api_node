import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router.get("/livros", LivroController.listarLivros);
router.post("/livros", LivroController.cadastrarLivro);
router.get("/livros/editora", LivroController.listarLivrosPorEditora);
router.get("/livros/:id", LivroController.listarLivroPorId);
router.put("/livros/:id", LivroController.atualizarLivro);
router.delete("/livros/:id", LivroController.deletarLivro);

export default router;
