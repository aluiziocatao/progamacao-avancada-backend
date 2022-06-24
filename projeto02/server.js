// Importando o módulo http para a váriavel http
const http = require('http');
// Importando o módulo fs para a váriavel fs
const fs = require('fs');
// Importando o módulo path para a váriavel path
const path = require('path');

// Definindo uma const port para definir a porta em que o servidor será iniciado
const $port = 8000;

// Criando a conexão do servidor
// Definindo as rotas que irão trafegar na aplicação utilizando o fs.readFile com o path.join.
// Utilizei também o Switch em vez do IF
http.createServer(function (req, res) {
    switch(req.url){
        case '/':
            fs.readFile(
                // Definição da pasta onde irá procurar o arquivo que será enviado para o res.end para ser renderizado
                path.join(__dirname, 'public', 'index.html'),
                (error, content) => {
                    if (error) throw error
                    // Passagem do conteúdo da index.html através do res.end
                    res.end(content)
                }
            );
        break;

        case '/contact':
            res.end('<h1>Contact</h1>');
        break;

    default:
        res.end('<h1>Unknown URL</h1>');
        break;
    }
}).listen($port, () => {
    // Mensagem que irá aparecer no console do terminal caso o servidor inicie com sucesso
    console.log(`Server is running on port: ${$port}`);
});