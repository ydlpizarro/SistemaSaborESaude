const Client = require('../models/Client');

module.exports = {
    async index(request, response) {
        const clients = await Client.find();
        return response.json(clients);
    },
    async store(request, response) {
        const { id, name, cel, endereco, tax } = request.body;
        let client = await Client.findOne({ id });
        if (!client) {
            client = await Client.create({
                id,
                name,
                cel,
                endereco,
                tax
            })
            return response.json({ "message": `Usuário cadastrado` });
        } else {
            return response.json({ "message": `O usuário código ${id} já existe!` });
        }
    },
    async destroy(request, response) {
        const { id } = request.query;
        let client = await Client.findOneAndDelete({
            id
        });
        if (client) {
            return response.json({ "message": `Usuário código ${id} apagado do sistema.` });
        } else {
            return response.json({ "message": `O usuário ${id} não existe` });
        }
    },
    async update(request, response) {
        const { id, name, cel, endereco, tax } = request.query;
        let client = await Client.findOneAndUpdate({ id }, {
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