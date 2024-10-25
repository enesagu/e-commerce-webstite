import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slices/productSlice';
import Product from './Product';
import '../css/ProductList.css'; // Import the CSS file

function ProductList() {
  const dispatch = useDispatch();

  // Fetch products from the store
  const products = useSelector((store) => store.product.products);
  const loading = useSelector((store) => store.product.loading);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="product-list-container">
      <h1>Product List</h1>
      {products && products.length > 0 ? (
        <div className="product-grid">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      ) : (
        !loading && <p>No products available.</p>
      )}
    </div>
  );
}

export default ProductList;
