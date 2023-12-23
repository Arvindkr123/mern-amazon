import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { HomeScreen, ProductScreen } from './screens';

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">amazona</Link>
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
