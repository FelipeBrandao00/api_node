import autores from "../models/Autor.js";

class AutorController {
    static async listarAutores(req, res) {
        try {
            const listaAutores = await autores.find();
            res.status(200).json(listaAutores);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async listarAutorPorId(req, res) {
        try {
            const autor = await autores.findById(req.params.id);
            res.status(200).json(autor);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    static async cadastrarAutor(req, res) {
        try {
            const autor = new autores(req.body);
            await autor.save();
            res.status(201).json(autor);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async atualizarAutor(req, res) {
        try {
            const autor = await autores.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json(autor);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async deletarAutor(req, res) {
        try {
            await autores.findByIdAndDelete(req.params.id);
            res.status(200).json({message: "Autor deletado com sucesso"});
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

export default AutorController;