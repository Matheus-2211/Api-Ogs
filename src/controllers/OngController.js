const crypto = require('crypto');
const connection = require('./database/connection');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*'); // eu quero selcionar todos os campos da tabela ongs

        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); // vai gerar 4 bytes de caracteres aleatorios, e transformar em string;

        await connection('ongs').insert({ // aqui eu passo os dados que eu desejo inserir no meu banco de dados
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
};