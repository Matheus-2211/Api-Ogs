const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');


const routes = express.Router(); // Criado uma varia chamdo routes, ou seja eu estou desacoplando modo de rotas do express em uma nova varialvel


//Rota listagem de ONGS
routes.get('/ongs', OngController.index);

// Rota cadastro de ONGS
routes.post('/ongs', OngController.create); // primeira rota // o request guarda todos os dados vindo na minha requisição

//Rota de listagem de casos
routes.get('/incidents', IncidentController.index);

//rota de cadastro de casos
routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete);



module.exports = routes; // exportando as minhas rotas para o index;