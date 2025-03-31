const express = require('express');
const router = express.Router();
const {getProducts, getProduct, addProduct, updateProduct, deleteProduct} = require('../Controllers/product.controller.js');

// Read All Products
router.get('/', getProducts);


// Read One Product
router.get('/:id', getProduct);


// Create Product
router.post('/', addProduct);


// Update Product
router.put('/:id', updateProduct);


//Delete Product
router.delete('/:id', deleteProduct);


module.exports = {
    router
}