const { Router } = require('express');

const routes = Router();
// Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmentros:
// Query params: request.query(Filtros, ordenação, paginação, ...)
// Route params: resquest.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)
routes.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello World!!' });
})

module.exports = routes;