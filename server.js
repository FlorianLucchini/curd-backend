import express from 'express';
import connectDB from './config/database.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API Working');
});

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});