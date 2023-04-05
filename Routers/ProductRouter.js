const express = require('express');
const ProductController = require('../Controllers/ProductController')
const router = new express.Router()

// Create Product
router.post('/CreateProduct',ProductController.CreateProduct)

// read Product
router.post('/ReadProduct',ProductController.ReadProduct)

// read by id Product
router.post('/ReadById/:id',ProductController.ReadById)


// Update Product
router.post('/UpdateProduct/:id',ProductController.UpdateProduct)

//delete Product
router.post('/DeleteProduct/:id',ProductController.DeleteProduct)








module.exports = router
