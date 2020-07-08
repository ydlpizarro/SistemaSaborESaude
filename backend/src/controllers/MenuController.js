const Client = require('../models/Menu');
const Menu = require('./ClientController');

module.exports = {
    async store(request, response) {
        const { id, name, calorias, valor, status } = request.body;
        let menu = await Menu.findOne({ "name": name.toLowerCase() });
        if (!menu) {
            menu = await Menu.create({
                id,
                name,
                calorias,
                valor,
                status
            })
            return response.json(menu);
        } else {
            return response.json(`Menu ${name} já existe!`);
        }
    },
    async destroy(request,response){
        const { nome } = request.query;
        let menu = await Menu.findOneAndDelete({
            name: nome
        });
        if (menu) {
            return response.json({ "message": `Menu ${nome} deletado` });
        } else {
            return response.json({ "message": `O Menu ${nome} não existe` });
        }
    },
    async update(request, response) {
        const { id, nome, calorias, valor, status } = request.query;
        let menu = await Menu.findOneAndUpdate({ "id": id }, {
            "name": nome,
            calorias,
            valor,
            status
        }, {
            new: true,
        });
        if (menu) {
            return response.json({ "message": `Menu código ${id} atualizado` });
        } else {
            return response.json({ "message": `Menu código ${id} não existe` });
        }
    }
};