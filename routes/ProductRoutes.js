const express = require("express");
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
});

router.route("/").post(createProduct, (req, res) => {
    // #swagger.tags = ['Product']
    // #swagger.description = 'Endpoint para criar um produto.'
    /* #swagger.parameters['newProduct'] = {
       in: 'body',
       description: 'Informações do produto.',
       required: true,
       schema: { $ref: "#/definitions/addProduct" }
} */
});

router.route("/:id").get(getProductById, (req, res) => {
    // #swagger.tags = ['Product']
    // #swagger.description = 'Endpoint para obter um produto.'
    // #swagger.parameters['id'] = { description: 'ID do produto.' }
});

router.route("/:id").put(updateProduct, (req, res) => {
    // #swagger.tags = ['Product']
    // #swagger.description = 'Endpoint para alterar um produto.'
    // #swagger.parameters['id'] = { description: 'ID do produto.' }
    /* #swagger.parameters['updateProduct'] = {
   in: 'body',
   description: 'Informações do produto.',
   required: true,
   schema: { $ref: "#/definitions/addProduct" }
} */
});

router.route("/:id").delete(deleteProduct, (req, res) => {
    // #swagger.tags = ['Product']
    // #swagger.description = 'Endpoint para apagar um produto.'
    // #swagger.parameters['id'] = { description: 'ID do produto.' }
});

module.exports = router;