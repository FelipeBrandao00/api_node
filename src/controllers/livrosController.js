import livros from "../models/Livro.js";

class LivroController {
    static async listarLivros(req, res) {
        try {
            const listaLivros = await livros.find().populate('autor').exec();
            res.status(200).json(listaLivros);
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    }

    static async listarLivroPorId(req, res) {
        try {
            const livro = await livros.findById(req.params.id).populate('autor','nome').exec();
            res.status(200).json(livro);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    static async cadastrarLivro(req, res) {
        try {
            const livro = new livros(req.body);
            await livro.save();
            res.status(201).json(livro);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async atualizarLivro(req, res) {
        try {
            const livro = await livros.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json(livro);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async deletarLivro(req, res) {
        try {
            await livros.findByIdAndDelete(req.params.id);
            res.status(200).json({message: "Livro deletado com sucesso"});
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async listarLivrosPorEditora(req, res) {
        try {
            const listaLivros = await livros.find({editora: req.query.editora});
            res.status(200).json(listaLivros);
        } catch (err) {
            res.status(500).json(err.message);
        }
    }
}

export default LivroController