const Menu = require('../models/Menu');

module.exports = {
    async index(request, response) {
        const menus = await Menu.find();
        return response.json(menus);
    },
    async store(request, response) {
        const { id, name, calorias, valor, status } = request.body;
        let menu = await Menu.findOne({ id });
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
            return response.json(`Menu código ${id} já existe!`);
        }
    },
    async destroy(request, response) {
        const { id } = request.query;
        let menu = await Menu.findOneAndDelete({
            id
        });
        if (menu) {
            return response.json({ "message": `Menu código ${id} deletado.` });
        } else {
            return response.json({ "message": `O Menu código ${id} não existe.` });
        }
    },
    async update(request, response) {
        const { id, name, calorias, valor, status } = request.query;
        let menu = await Menu.findOneAndUpdate({ id }, {
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