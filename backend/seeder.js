import mongoose from "mongoose";
import dotenv from 'dotenv'
import color from "colors"
import users from "./data/users.js"
import products from "./data/products.js"
import User from "./models/UserModel.js";
import Product from "./models/ProductModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js"


dotenv.config()

await connectDB()


const importData = async () => {
    try {
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()

        const createUser = await User.insertMany(users)


        const adminUser = createUser[0]._id

        const sampleProduct = products.map((product) => {
            return { ...product, user: adminUser }
        })

        await Product.insertMany(sampleProduct)
        console.log('data Imported'.green.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destoryData = async () => {
    try {
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()
        console.log("destory data successfully".green.inverse)
    } catch (error) {
        console.log(`${error}`.red.inverse)
    }
}

if (process.argv[2] === '-d') {
    destoryData()
} else {
    importData()
}