const Order = require('../models/Order');

module.exports = {
    async index(request, response) {
        const { id } = request.query;
        const orders = await Order.find({
            id
        });
        return response.json(orders);
    }
}