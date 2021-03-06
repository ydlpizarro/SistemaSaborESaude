const Menu = require('../models/Menu');

module.exports = {
    async index(request, response) {
        const { name } = request.query;
        const menus = await Menu.find({
            name: { $regex: `.*${name}.*`, $options: 'i' }
        });
        return response.json(menus);
    }
}