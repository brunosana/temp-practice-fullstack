const port = 3003;
const express = require('express');
const app = express();
const db = require('./database');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));


app.get('/produtos', (req, res, next) => {
    res.send(db.getProducts());
});

app.get('/produtos/:id', (req, res, next) =>{
    res.send(db.getProduct(req.params.id));
});

app.post('/produtos', (req, res, next) => {
    const produto = db.saveProduct({
        name: req.body.name,
        price: req.body.price
    });
    res.send(produto);
});

app.put('/produtos/:id', (req, res, next) => {
    const produto = db.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    });
    res.send(produto);
});

app.delete('/produtos/:id', (req, res, next) =>{
    const produto = db.deleteProduct(req.params.id);
    res.send(produto);
})

app.listen(port, () =>{
    console.log(`Servidor executando na porta ${port}`);
});