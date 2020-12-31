const connection = require('../database/connection');


module.exports = {

    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count() // retorna a quantidade de casos que tem cadastrado

        const incidents = await connection('incidents') //listagem dos casos
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id') //relacionar dado de duas tabela
            .limit(5) //limeti os dado da pagina 1 para 5 registro
            .offset((page - 1) * 5) // comando usado para pular 5 registro 
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);


        response.header('X-Total-Count', count['count(*)'])

        return response.json(incidents);
    },


    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization; //acesso ao id da minha requisição


        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },


    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incidents.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.' });
        }
        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};