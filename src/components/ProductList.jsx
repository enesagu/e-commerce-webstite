import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/slices/productSlice';

function ProductList() {
  const dispatch = useDispatch();

  // Ürünleri store'dan doğru bir şekilde alın
  const products = useSelector((store) => store.product.products);
  const loading = useSelector((store) => store.product.loading);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  console.log(products);

  return (
    <div>
      <h1>Product List</h1>
      {loading && <p>Loading...</p>}
      {products && products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      ) : (
        !loading && <p>No products available.</p>
      )}
    </div>
  );
}

export default ProductList;
