import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <>
      <Card>
        <Link to={`/product/${product.slug}`}>
          <Card.Img src={product.image}></Card.Img>
        </Link>
        <Card.Body>
          <>
            <Link to={`/product/${product.slug}`}>
              <Card.Title>{product.name}</Card.Title>
            </Link>
            <Rating rating={product.rating} numReviews={product.numReviews} />
            <Card.Text>
              <strong>RS. {product.price}</strong>
            </Card.Text>
            <Button
              style={{ backgroundColor: '#ffc000', color: 'black' }}
              className="btn-primary"
            >
              Add to cart
            </Button>
          </>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
