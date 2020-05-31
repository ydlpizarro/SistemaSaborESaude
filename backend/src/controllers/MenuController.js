const Menu = require('../models/Menu');

module.exports = {
    async store(request, response) {
        const { id, name, calorias, valor } = request.body;
        let menu = await Menu.findOne({ "name": name.toLowerCase() });
        if (!menu) {
            menu = await Menu.create({
                id,
                name,
                calorias,
                valor
            })
            return response.json(menu);
        } else return response.json(`Item ${name} já foi cadastrado`);
    }
};