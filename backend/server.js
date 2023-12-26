import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoute.js';

dotenv.config();
const app = express();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to Mongoose Database');
  })
  .catch((err) => {
    console.log(err);
  });

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
