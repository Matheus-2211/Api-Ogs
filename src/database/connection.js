const knex = require('knex');
const configuration = require('../../knexfile'); //importando as configurações do bancos de dados que estao diponivel na pasta knexfile

const connection = knex(configuration.development); // criando a conexão unsando o knex e pasando para eles os parametros de desenvolvedor.


module.exports = connection;