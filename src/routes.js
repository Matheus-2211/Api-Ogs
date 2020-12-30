const express = require('express');

const routes = express.Router(); // Criado uma varia chamdo routes, ou seja eu estou desacoplando modo de rotas do express em uma nova varialvel

routes.post('/ongs', (request, response) => { // primeira rota // o request guarda todos os dados vindo na minha requisição
    const { name, email, whatsapp, city, uf } = request.body;

    console.log(data);

    return response.json({

    });
});

module.exports = routes; // exportando as minhas rotas para o index;