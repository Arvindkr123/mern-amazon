import React from 'react';
import data from './constants/data';

const App = () => {
  return (
    <div>
      <header>
        <a href="/">amazona</a>
      </header>
      <main>
        <h1>Featured Products</h1>
        <div className="products">
          {data.products &&
            data.products.length > 0 &&
            data.products.map((product) => {
              return (
                <div key={product.slug} className="product">
                  <a href={`/product/${product.slug}`}>
                    <img src={product.image} alt="product image" />
                  </a>
                  <div className="product-info">
                    <a href={`/product/${product.slug}`}>
                      <p>{product.name}</p>
                    </a>
                    <p>
                      <strong>RS. {product.price}</strong>
                    </p>
                    <button>Add to cart</button>
                  </div>
                </div>
              );
            })}
        </div>
      </main>
    </div>
  );
};

export default App;
