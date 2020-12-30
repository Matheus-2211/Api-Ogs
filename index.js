const { request, response } = require('express');
const express = require('express'); // eu estou importando o modulo chamado express para dentro da variavel express

const app = express(); //criação de uma varialvel que vai amazenar minha aplicação

app.use(express.json()); //informando o meu app que estou usando o json para as requisições, é para o express ir la no corpo da minha requisição, e converter o json em objeto entendivel pelo JS.


app.post('/users', (request, response) => { // primeira rota // o request guarda todos os dados vindo na minha requisição
    const body = request.body;

    console.log(body);

    return response.json({
        saudação: 'Olá, Mundo',
        name: 'Matheus'
    });
});

app.listen(3333); //mandei minha aplicação ouvir a porta 3333