import express from 'express';
import data from './data.js';
// import dotenv from 'dotenv';
// import cors from 'cors';
// dotenv.config();

const app = express();

// // Apply the cors middleware
// app.use(cors());

app.get('/api/products', (req, res) => {
  res.send(data);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
