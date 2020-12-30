const express = require('express');

const routes = express.Router(); // Criado uma varia chamdo routes, ou seja eu estou desacoplando modo de rotas do express em uma nova varialvel

routes.post('/users', (request, response) => { // primeira rota // o request guarda todos os dados vindo na minha requisição
    const body = request.body;

    console.log(body);

    return response.json({
        saudação: 'Olá, Mundo',
        name: 'Matheus'
    });
});

module.exports = routes; // exportando as minhas rotas para o index;