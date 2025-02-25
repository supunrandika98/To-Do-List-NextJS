import mongoose from "mongoose"


const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    throw new Error('MongoDB URI is missing in environment variables');
}


export const connectDB = async () => {

    await mongoose.connect(MONGO_URI)
    console.log('MongoDB Connected');
}