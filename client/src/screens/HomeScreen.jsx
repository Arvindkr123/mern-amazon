import React from 'react';
import data from '../constants/data';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <>
      <h1>Featured Products</h1>
      <div className="products">
        {data.products &&
          data.products.length > 0 &&
          data.products.map((product) => {
            return (
              <div key={product.slug} className="product">
                <Link to={`/product/${product.slug}`}>
                  <img src={product.image} alt="product image" />
                </Link>
                <div className="product-info">
                  <Link to={`/product/${product.slug}`}>
                    <p>{product.name}</p>
                  </Link>
                  <p>
                    <strong>RS. {product.price}</strong>
                  </p>
                  <button>Add to cart</button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default HomeScreen;
