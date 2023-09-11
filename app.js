'use strict';

const express = require('express');
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const routes = require('./routes');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

var bodyParser = require('body-parser')
var mongoose = require('mongoose')

console.log(process.env.NODE_ENV)
// Connect to MongoDB
console.log(process.env.MONGODB_URL)
mongoose
    .connect(
        process.env.MONGODB_URL,
        { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const Item = require('./models/Product');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(
    '/',
    routes()
);


if (process.env.NODE_ENV === 'test') {
    module.exports = app
} else {
    app.listen(PORT, HOST, () => {
        console.log(`Running on http://${HOST}:${PORT}`);
    });
}

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// A cada solicitação enviar dados para o RabbitMQ
app.use((req, res, next) => {
    //console.log(req.url);
    //const publisher = require('./publisher')
    next();
});
