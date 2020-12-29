const { request, response } = require('express');
const express = require('express'); // eu estou importando o modulo chamado express para dentro da variavel express

const app = express(); //criação de uma varialvel que vai amazenar minha aplicação

app.get('/', (request, response) => { // primeira rota
    return response.json({
        saudação: 'Olá, Mundo',
        message: 'Me Livrei da Maldição!!'
    });
});

app.listen(3333); //mandei minha aplicação ouvir a porta 3333