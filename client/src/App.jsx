import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { HomeScreen, ProductScreen, CartScreen} from './screens';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useStoreContext } from './store';
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';

const App = () => {
  const {
    state: {
      cart: { cartItems },
    },
  } = useStoreContext();
  // console.log(cartItems);
  return (
    <div className="d-flex flex-column site-container">
      <header>
        <Navbar bg={'dark'} variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>amazona</Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto">
              <Link to="/cart" className="nav-link">
                Cart
                {cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="/cart" element={<CartScreen />} />
          </Routes>
        </Container>
      </main>
      <footer>
        <div className="text-center">All rights reserved</div>
      </footer>
    </div>
  );
};

export default App;
