
import Product from "../models/ProductModel.js";
import { createApiError } from "../utils/ApiError.js";
import asyncHandler from "../utils/AsyncHandler.js"



const getProduct = asyncHandler(async (req, res) => {
    const products = await Product.find({})
    console.log(products)
    res.json(products)
})

const getProductById = asyncHandler(async (req, res) => {
    const slectedProduct = await Product.findById(req.params.id)
    if (slectedProduct) {
        res.json(slectedProduct)
    }

    else {
        res.status(404)
        throw new createApiError(404, "Product not found",)

    }
})

export { getProduct, getProductById }