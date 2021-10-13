import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


// @desc    Fetch all products
// @route   GET /api/products
// @access  PUBLIC //This is need bc some routes need access token

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({}) // Fetches all the products from the database
    res.send(products);
})

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  PUBLIC // Public bc anyone can acces it

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    } else {
        res.status(404).json({ message: "Product not fined" })
    }
})
export {
    getProducts,
    getProductById
}