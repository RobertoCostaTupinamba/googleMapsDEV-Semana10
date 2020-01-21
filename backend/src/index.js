const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const app = express();
//MongoDB (Não-relacional)
mongoose.connect('mongodb+srv://roberto:roberto26011999@cluster0-cchn9.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

app.use(express.json()) //"Cadastro" dentro do express para todos os metodos entenderem o formato JSON
app.use(routes);

app.listen(3333)