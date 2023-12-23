import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  // console.log(products);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api/products');
      // console.log(res);
      setProducts(res.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Featured Products</h1>
      <div className="products">
        {products &&
          products.length > 0 &&
          products.map((product) => {
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
