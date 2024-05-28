import mongoose from "mongoose";

async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongoose connected to${conn.connection.host}`)

    } catch (error) {
        console.log(error)
    }
}

export default connectDB;
