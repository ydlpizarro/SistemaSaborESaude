const Client = require('../models/Client');

module.exports = {
    async index(request, response) {
        const { name } = request.query;
        const clients = await Client.find({
            name: { $regex: `.*${name}.*`, $options: 'i' }
        });
        return response.json(clients);
    }
}