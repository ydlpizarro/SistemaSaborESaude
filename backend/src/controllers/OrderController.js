const Order = require('../models/Order');

module.exports = {
    async index(request, response) {
        const orders = await Order.find();
        return response.json(orders);
    },
    async store(request, response) {
        const { id, pedido, idCliente } = request.body;
        let order = await Order.findOne({ id });
        if (!order) {
            order = await Order.create({
                id,
                idCardapio0,
                idQuantidade0,
                idCardapio1,
                idQuantidade1,
                idCardapio2,
                idQuantidade2,
                idCardapio3,
                idQuantidade3,
                idCardapio4,
                idQuantidade4,
                idCliente,
                status
            })
            return response.json(order);
        } else {
            return response.json(`Pedido código ${id} já existe!`);
        }
    },
    async destroy(request, response) {
        const { id } = request.query;
        let order = await Order.findOneAndDelete({
            id
        });
        if (order) {
            return response.json({ "message": `Pedido código ${id} deletado` });
        } else {
            return response.json({ "message": `Pedido código ${id} não existe` });
        }
    },
    async update(request, response) {
        const { id, pedido, idCliente } = request.query;
        let order = await order.findOneAndUpdate({ id }, {            
                idCardapio0,
                idQuantidade0,
                idCardapio1,
                idQuantidade1,
                idCardapio2,
                idQuantidade2,
                idCardapio3,
                idQuantidade3,
                idCardapio4,
                idQuantidade4,
                idCliente,
                status
        }, {
            new: true,
        });
        if (order) {
            return response.json({ "message": `Pedido código ${id} atualizado` });
        } else {
            return response.json({ "message": `Pedido código ${id} não existe` });
        }
    }
};