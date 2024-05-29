import express from 'express'
import Product from '../models/productModel.js'
import { asyncHandler } from '../utils/AsyncHandler.js';
import { createApiError } from '../utils/ApiError.js';

const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
    const products = await Product.find({})
    console.log(products)
    res.json(products)
}))

router.get("/:id", asyncHandler(async (req, res) => {
    const slectedProduct = await Product.findById(req.params.id)
    if (slectedProduct) {
        res.json(slectedProduct)
    }

    else {
        res.status(404)
        throw new createApiError(404, "Product not found",)

    }

}))

export default router;