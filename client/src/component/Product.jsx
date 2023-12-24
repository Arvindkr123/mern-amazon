import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from './Rating';
import { useStoreContext } from '../store';
import axios from 'axios';

const Product = ({ product }) => {
  const navigate = useNavigate();
  const {
    state: {
      cart: { cartItems },
    },
    dispatch: storeDispatch,
  } = useStoreContext();

  const addToCartHandler = async (item) => {
    const existingItem = cartItems.find((ele) => ele._id === item._id);
    const quantity = existingItem ? existingItem.quantity + 1 : 1;

    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry, Product is out of stock');
      return;
    }
    storeDispatch({
      type: 'ADD_TO_CART',
      payload: { ...item, quantity: quantity },
    });
    navigate('/cart');
  };
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
              onClick={() => addToCartHandler(product)}
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
