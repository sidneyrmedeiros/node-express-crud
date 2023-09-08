'use strict';

const express = require('express');
require('dotenv').config()

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

var bodyParser = require('body-parser')
var mongoose = require('mongoose')

// Connect to MongoDB
var mongoaddr = process.env.CONFIG_MONGODB_URL
console.log(mongoaddr);
mongoose
    .connect(
        mongoaddr,
        { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const Item = require('./models/Product');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/products', async (req, res) => {
    var products = await Product.find({})
    res.send(products)
})

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});