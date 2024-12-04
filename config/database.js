import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI;

const clientOptions = {
  serverApi: { version: '1', strict: true, deprecationErrors: true },
};

export default async function connectDB() {
  try {
    await mongoose.connect(uri, clientOptions);
    console.log('Connected to database');
  } catch (error) {
    console.error('Error connecting to database:', error);
    process.exit(1);
  }
}