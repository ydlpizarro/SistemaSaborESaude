const { Router } = require('express');
const ClientController = require('./controllers/ClientController');
const MenuController = require('./controllers/MenuController');
const OrderController = require('./controllers/OrderController');
const StockController = require('./controllers/StockController');

const SearchClientController = require('./controllers/SearchClientController');
const SearchMenuController = require('./controllers/SearchMenuController');
const SearchOrderController = require('./controllers/SearchOrderController');
const SearchStockController = require('./controllers/SearchStockController');


const routes = Router();

routes.post('/clientes', ClientController.store);
routes.delete('/clientes', ClientController.destroy);
routes.put('/clientes', ClientController.update);
routes.get('/searchclientes', SearchClientController.index);

routes.post('/menus', MenuController.store);
routes.delete('/menus', MenuController.destroy);
routes.put('/menus', MenuController.update);
routes.get('/searchmenus', SearchMenuController.index);

routes.post('/pedidos', OrderController.store);
routes.delete('/pedidos', OrderController.destroy);
routes.put('/pedidos', OrderController.update);
routes.get('/searchpedidos', SearchOrderController.index);

routes.post('/stocks', StockController.store);
routes.delete('/stocks', StockController.destroy);
routes.put('/stocks', StockController.update);
routes.get('/stocks', SearchStockController.index);


module.exports = routes;