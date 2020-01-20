const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const app = express();

mongoose.connect('mongodb+srv://roberto:roberto26011999@cluster0-cchn9.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json()) //"Cadastro" dentro do express para todos os metodos entenderem o formato JSON
app.use(routes);

//MongoDB (Não-relacional)



app.listen(3333)