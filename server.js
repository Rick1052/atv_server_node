const http = require('http');

const random = require('./utils.js');
const { url } = require('inspector');

const requestListener = function (req, res) {
    if (req.url === "/") {
        res.writeHead(200)
        res.end("Bem vindo!")
    }
    else if (req.url === "/sobre") {
        res.writeHead(200)
        res.end("Página sobre mim")
    }
    else if (req.url === "/contato") {
        res.writeHead(200)
        res.end("Meu contato")
    }
    else if (req.url === "/numero") {
        res.writeHead(200)
        res.end("Seu numero eh: " + random.randomNumber())
    }
    else if (req.url.startsWith("/saudacao/")) {
        res.writeHead(200);
    
        const url = new URL(req.url, `http://localhost:8080`);
        const nome = url.searchParams.get("nome");

        res.end("Olá " + nome || "Nome não fornecido");
    }
    
    else {
        res.writeHead(403)
        res.end("Error 403! Página não encontrada")
    }
};

const server = http.createServer(requestListener);
server.listen(8000, 'localhost', () => {
    console.log("Servidor está rodando em http://localhost:8000");
});