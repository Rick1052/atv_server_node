const express = require('express');
const app = express();
const port = 3000;
const fs = require("fs");

let informacao = [];

// Função para ler o arquivo e retornar o conteúdo como um array
function read(file) {
    return JSON.parse(fs.readFileSync(file));
}

// Rota principal
app.get('/', (req, res) => {
    fs.readFile("index.html", function(err, data){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    });
});

// Rota para obter os dados
app.get("/api/data", (req, res) => {
        res.status(200);

        res.send(informacao)

});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

// Lê os dados do arquivo JSON
informacao = read("bd.json");
