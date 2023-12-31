import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../component/Product';
import { Helmet } from 'react-helmet-async';
import Loading from '../component/Loading';
import MessageBox from '../component/MessageBox';

const type = {
  fetchRequest: 'FETCH_REQUEST',
  fetchSuccess: 'FETCH_SUCCESS',
  fetchFailed: 'FETCH_FAILED',
};

const reducer = (state, action) => {
  switch (action.type) {
    case type.fetchRequest:
      return { ...state, loading: true };
    case type.fetchSuccess:
      return { ...state, products: action.payload, loading: false };
    case type.fetchFailed:
      return { ...state, loading: false, error: action.payload };
    default: {
      return state;
    }
  }
};

const HomeScreen = () => {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
    products: [],
  });
  // const [products, setProducts] = useState([]);
  // console.log(products);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: type.fetchRequest });
      try {
        const res = await axios.get('/api/products');
        dispatch({ type: type.fetchSuccess, payload: res.data });
      } catch (error) {
        dispatch({ type: type.fetchFailed, payload: error });
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <>
        <Helmet>
          <title>Amazona</title>
        </Helmet>
        <h1>Featured Products</h1>
        <div className="products">
          <Loading />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Helmet>
          <title>Amazona</title>
        </Helmet>
        <h1>Featured Products</h1>
        <div className="products">
          <MessageBox variant={'danger'}>{error.message}</MessageBox>
        </div>
      </>
    );
  }
  return (
    <>
      <Helmet>
        <title>Amazona</title>
      </Helmet>
      <h1>Featured Products</h1>
      <div className="products">
        <Row>
          {products &&
            products.length > 0 &&
            products.map((product) => {
              return (
                <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                  <Product product={product} />
                </Col>
              );
            })}
        </Row>
      </div>
    </>
  );
};

export default HomeScreen;
