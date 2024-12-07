import express from 'express';
import connectDB from './config/database.js';
import userRoutes from './routes/userRoutes.js';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});

connectDB();

app.use(express.json());
app.use(helmet());
app.use(limiter);
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API Working');
});

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});