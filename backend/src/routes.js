const { Router } = require('express');
const ClientController = require('./controllers/ClientController');
const SearchClientController = require('./controllers/SearchClientController');
const MenuController = require('./controllers/MenuController');
const SearchMenuController = require('./controllers/SearchMenuController');

const routes = Router();

routes.post('/clientes', ClientController.store);
routes.delete('/clientes', ClientController.destroy);
routes.put('/clientes', ClientController.update);
routes.get('/searchclientes', SearchClientController.index);

routes.post('/menus', MenuController.store);
routes.delete('/menus', MenuController.destroy);
routes.put('/menus', MenuController.update);
routes.get('/searchmenus', SearchMenuController.index);


module.exports = routes;