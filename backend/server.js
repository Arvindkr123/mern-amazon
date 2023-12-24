import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data);
});

app.get('/api/products/slug/:slug', (req, res) => {
  // console.log(req.params);
  const product = data.find((ele) => ele.slug === req.params.slug);
  if (product) {
    res.status(202).send(product);
  } else {
    res.status(404).send({ msg: 'product not found' });
  }
});

app.get('/api/products/:id', (req, res) => {
  console.log(req.params);
  const product = data.find((ele) => ele._id === +req.params.id);
  if (product) {
    res.status(202).send(product);
  } else {
    res.status(404).send({ msg: 'product not found' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
