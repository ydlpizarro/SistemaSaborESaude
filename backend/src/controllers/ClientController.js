const Client = require('../models/Client');

module.exports = {
    async store(request, response) {
        const { id, name, cel, endereco, tax } = request.body;
        let client = await Client.findOne({ "name": name.toLowerCase() });
        if (!client) {
            client = await Client.create({
                id,
                name,
                cel,
                endereco,
                tax
            })
            return response.json(client);
        } else {
            return response.json(`Usuario ${name} já existe!`);
        }
    },
    async destroy(request, response) {
        const { name } = request.query;
        let client = await Client.findOneAndDelete({
            name
        });
        if (client) {
            return response.json({ "message": `Usuário ${name} deletado` });
        } else {
            return response.json({ "message": `O usuário ${name} não existe` });
        }
    },
    async update(request, response) {
        const { id, name, cel, endereco, tax } = request.query;
        let client = await Client.findOneAndUpdate({ "id": id }, {
            name,
            cel,
            endereco,
            tax
        }, {
            new: true,
        });
        if (client) {
            return response.json({ "message": `Usuário código ${id} atualizado` });
        } else {
            return response.json({ "message": `Usuário código ${id} não existe` });
        }
    }
};