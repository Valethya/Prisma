import mongoose from 'mongoose';
import {urlMongo} from "../config/index.config.js";

export const mongoUri = urlMongo;

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Mongo conectado');
  } catch (error) {
    console.error('Error conectando a Mongo:', error.message);
    process.exit(1);
  }
};