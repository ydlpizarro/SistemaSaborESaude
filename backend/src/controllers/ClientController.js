const Client = require('../models/Client');

module.exports = {
    async store(request, response) {
        const { name, cel, endereco, tax } = request.body;
        const client = await Client.create({
            name,
            cel,
            endereco,
            tax
        })



        return response.json(client);
    }
};