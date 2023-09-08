const express = require('express');
const axios = require('axios');
const productRoutes = require("./ProductRoutes");


const router = express.Router();

module.exports = params => {

  router.get('/api/health', async (req, res, next) => {
    // #swagger.tags = ['Utils']
    // #swagger.description = 'Verificar a API.'
    try {
      res.status(200).send('Ok');

    } catch (err) {
      return next(err);
    }
  });

  router.get('/api/joke', async (req, res, next) => {
    // #swagger.tags = ['Utils']
    // #swagger.description = 'Endpoint para obter piadas aleatórias.'
    try {
      axios.get('https://api.chucknorris.io/jokes/random')
        .then(response => res.send({ value: response.data.value }))

    } catch (err) {
      return next(err);
    }
  });

  router.post('/api/auth', async (req, res, next) => {
    // #swagger.tags = ['Auth']
    // #swagger.description = 'Auth JWT, username: admin, password: 123456'

    const { username, password } = req.body;

    if (username === "admin" && password === "123456") {
      const jwt = require("jsonwebtoken");
      const dataUser = {
        username: "admin",
        email: "admin@compass.uol",
        id: 1
      };

      const privateKey = "compass.uol";

      jwt.sign(dataUser, privateKey, (err, token) => {
        if (err) {
          res
            .status(500)
            .json({ message: "Error creating JWT" });

          return;
        }

        res.set("x-access-token", token);
        res.end();
      });
    } else {
      res.status(401);
      res.end();
    }
  });

  //router.use('/products', productsRoute(params));
  router.use('/api/products', productRoutes);


  return router;
};
