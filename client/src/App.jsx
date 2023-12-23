import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { HomeScreen, ProductScreen } from './screens';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

const App = () => {
  return (
    <div>
      <header>
        <Navbar bg={'dark'} variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>amazona</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
        <Link to="/"></Link>
      </header>
      <main>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
