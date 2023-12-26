import express from 'express';
import Product from '../models/productModels.js';
import data from '../data.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  // Uncomment the line below to remove all documents from the Product collection
  await Product.deleteMany({});

  const createdProducts = await Product.insertMany(data);
  res.send({ createdProducts });
});

export default seedRouter;
