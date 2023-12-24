import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Rating from '../component/Rating';
import { Helmet } from 'react-helmet-async';

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
      return { ...state, product: action.payload, loading: false };
    case type.fetchFailed:
      return { ...state, loading: false, error: action.payload };
    default: {
      return state;
    }
  }
};

const ProductScreen = () => {
  const { slug } = useParams();
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
    product: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: type.fetchRequest });
      try {
        const res = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: type.fetchSuccess, payload: res.data });
      } catch (error) {
        dispatch({ type: type.fetchFailed, payload: error });
      }
    };
    fetchData();
  }, [slug]);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error...</div>;
  }

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <img src={product.image} alt={product.name} className="large-img" />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{product?.name}</title>
              </Helmet>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </ListGroup.Item>
            <ListGroup.Item>Price : RS {product.price}</ListGroup.Item>
            <ListGroup.Item>
              Description
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price : </Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="success">In stock</Badge>
                      ) : (
                        <Badge bg="danger">Unavailable</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 1 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button className="btn-primary">Add to cart</Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductScreen;
