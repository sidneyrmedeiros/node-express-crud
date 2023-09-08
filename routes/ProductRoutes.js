const express = require("express");
const authorize = require('../middlewares/auth')

const {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
} = require("../controllers/ProductController");

const router = express.Router();

router.route("/").get(getAllProducts, (req, res) => {
    // #swagger.tags = ['Product']
    // #swagger.description = 'Endpoint para obter todos os produto.'
    /* #swagger.responses[200] = { 
       schema: { $ref: "#/definitions/Product" },
       description: 'Produtos encontrados.' 
} */
});

router.route("/").post(authorize, createProduct, (req, res) => {
    // #swagger.tags = ['Product']
    // #swagger.description = 'Endpoint para criar um produto.'
    /* #swagger.parameters['newProduct'] = {
       in: 'body',
       description: 'Informações do produto.',
       required: true,
       schema: { $ref: "#/definitions/addProduct" }
    } */

    /* #swagger.security = [{
            "api_key": []
    }] */

    /* #swagger.responses[200] = { 
       schema: { $ref: "#/definitions/Product" },
       description: 'Produto criado.' 
    } */
});

router.route("/:id").get(getProductById, (req, res) => {
    // #swagger.tags = ['Product']
    // #swagger.description = 'Endpoint para obter um produto.'
    // #swagger.parameters['id'] = { description: 'ID do produto.' }
    /* #swagger.responses[200] = { 
   schema: { $ref: "#/definitions/Product" },
   description: 'Produto encontrado.' 
    } */
});

router.route("/:id").put(authorize, updateProduct, (req, res) => {
    // #swagger.tags = ['Product']
    // #swagger.description = 'Endpoint para alterar um produto.'
    // #swagger.parameters['id'] = { description: 'ID do produto.' }
    /* #swagger.parameters['updateProduct'] = {
   in: 'body',
   description: 'Informações do produto.',
   required: true,
   schema: { $ref: "#/definitions/addProduct" }
    } */

    /* #swagger.security = [{
            "api_key": []
    }] */

    /* #swagger.responses[200] = { 
   schema: { $ref: "#/definitions/Product" },
   description: 'Produto alterado.' 
    } */
});

router.route("/:id").delete(authorize, deleteProduct, (req, res) => {
    // #swagger.tags = ['Product']
    // #swagger.description = 'Endpoint para apagar um produto.'
    // #swagger.parameters['id'] = { description: 'ID do produto.' }

    /* #swagger.security = [{
            "api_key": []
    }] */

    /* #swagger.responses[200] = { 
    schema: { $ref: "#/definitions/Product" },
    description: 'Produto apagado.' 
    } */
});

module.exports = router;