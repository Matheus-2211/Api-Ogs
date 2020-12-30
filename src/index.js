const express = require('express'); // eu estou importando o modulo chamado express para dentro da variavel express
const routes = require('./routes'); // importando as minhas rotas para o meu index

const app = express(); //criação de uma varialvel que vai amazenar minha aplicação

app.use(express.json()); //informando o meu app que estou usando o json para as requisições, é para o express ir la no corpo da minha requisição, e converter o json em objeto entendivel pelo JS.
app.use(routes);



app.listen(3333); //mandei minha aplicação ouvir a porta 3333