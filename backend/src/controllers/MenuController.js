const Menu = require('../models/Menu');

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
    async destroy(request, response) {
        const { name } = request.query;
        let menu = await Menu.findOneAndDelete({
            name
        });
        if (menu) {
            return response.json({ "message": `Menu ${name} deletado` });
        } else {
            return response.json({ "message": `O Menu ${name} não existe` });
        }
    },
    async update(request, response) {
        const { id, name, calorias, valor, status } = request.query;
        let menu = await Menu.findOneAndUpdate({ "id": id }, {
            name,
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