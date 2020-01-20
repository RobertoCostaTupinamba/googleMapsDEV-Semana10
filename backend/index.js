const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://roberto:roberto26011999@cluster0-cchn9.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json()) //"Cadastro" dentro do express para todos os metodos entenderem o formato JSON

// Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmentros:
// Query params: request.query(Filtros, ordenação, paginação, ...)
// Route params: resquest.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)

app.post('/users', (request, response) => {
    console.log(request.body);

    return response.json({ message: 'Hello World!!' });
})

app.listen(3333)