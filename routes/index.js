const express = require('express');
const axios = require('axios');
//const productsRoute = require('./products');
const productRoutes = require("./ProductRoutes");


const router = express.Router();

module.exports = params => {
  router.get('/', async (req, res, next) => {
    try {
      res.send('Home');

    } catch (err) {
      return next(err);
    }
  });

  router.get('/api/health', async (req, res, next) => {
    try {
      res.status(200).send('Ok');

    } catch (err) {
      return next(err);
    }
  });

  router.get('/api/joke', async (req, res, next) => {
    // #swagger.tags = ['Joke']
    // #swagger.description = 'Endpoint para obter piadas aleatórias.'
    try {
      axios.get('https://api.chucknorris.io/jokes/random')
        .then(response => res.send({ value: response.data.value }))

    } catch (err) {
      return next(err);
    }
  });



  //router.use('/products', productsRoute(params));
  router.use('/api/products', productRoutes);


  return router;
};
