const { Router } = require('express');
const DevController =  require('./controllers/DevController')

const routes = Router();
// Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmentros:
// Query params: request.query(Filtros, ordenação, paginação, ...)
// Route params: resquest.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)
routes.post('/devs', DevController.store)

module.exports = routes;