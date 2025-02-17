const http = require('http');
const port = 3000;

const rotas = {
    '/': 'Curso node',
    '/livros': 'Lista de livros',
    '/autores': 'Lista de autores',
    '/editoras': 'Lista de editoras',
    '/sobre': 'Sobre o projeto'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(rotas[req.url]);
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
})
