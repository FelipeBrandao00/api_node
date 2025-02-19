import express from "express";

const app = express();

app.use(express.json())

const livros = [
    {
        "id": 1,"titulo": "livro 1"
    }, 
    {
        "id": 2, "titulo": "livro 2"
    }
]

app.get('/',(req, res) => {
    res.status(200).send('curso de node')
})

app.get('/livros',(req, res) => {
    res.status(200).json(livros)
})

app.get('/livros/:id',(req, res) => {
    var index = buscarLivro(req.params.id)
    res.status(200).json(livros[index])
})

app.post('/livros',(req, res) => {
    livros.push(req.body)
    res.status(201).send('livro cadastrado com sucesso')
})

app.put('/livros/:id',(req, res) => {
    var index = buscarLivro(req.params.id)
    livros[index].titulo = req.body.titulo
    res.status(200).json(livros)
})

app.delete('/livros/:id',(req, res) => {
    var index = buscarLivro(req.params.id)
    livros.splice(index, 1)
    res.status(200).send("Livro removido com sucesso")
})

function buscarLivro(id){
    return livros.findIndex(livro => livro.id == id)
}

export default app;
