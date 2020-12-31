const connection = require('../database/connection');
const { create } = require('./OngController');

module.exports = {
    async create(request, response) {
        const { title, description, value } = request.body;
    }
};