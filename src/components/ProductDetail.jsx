import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getAllProducts,
  setSelectedProduct,
} from "../redux/slices/productSlice";
import Loading from "./Loading";
import "../css/ProductDetails.css"; // Import CSS file for styling
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import Product from "../components/Product";
import { addToBasket } from "../redux/slices/basketSlice";

function ProductDetail() {
  const { id } = useParams();
  const { products, selectedProduct, loading, maxQuantity } = useSelector(
    (store) => store.product
  );

  const [count, setCount] = useState(1);

  // Increase count, respecting maxQuantity
  const addCount = () => {
    if (count < maxQuantity) {
      setCount(count + 1);
    }
  };

  // Decrease count, ensuring it doesn't go below 1
  const minusCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {

      setCount(1);
 
  }, [id]);
  



  const dispatch = useDispatch();

  // Fetch products if they are not already loaded
  useEffect(() => {
    if (products.length === 0) {
      dispatch(getAllProducts());
    } else {
      getProductById();
    }
  }, [products, id, dispatch]); // Dependency array includes 'products' and 'id'

  // Function to get product by ID
  const getProductById = () => {
    const product = products.find((product) => product.id === parseInt(id));
    if (product) {
      dispatch(setSelectedProduct(product));
    }
  };
  const relatedProducts = products.filter(
    (product) =>
      product.category === selectedProduct.category &&
      product.id !== selectedProduct.id
  );
  
  // When loading, show a loading indicator
  if (loading) {
    return <Loading />;
  }

  const addBasket = () => {
    const payload = {
      id: selectedProduct.id,
      price: selectedProduct.price,
      image: selectedProduct.image,
      title: selectedProduct.title,
      description: selectedProduct.description,
      count,
    };
    dispatch(addToBasket(payload));
  };
  


  // Display selected product details
  return (
    <div>
      <div className="product-detail-container">
        {selectedProduct ? (
          <div className="product-detail">
            <img
              className="product-detail-image"
              src={selectedProduct.image}
              alt={selectedProduct.title}
            />
            <div className="product-detail-info">
              <h1 className="product-title">{selectedProduct.title}</h1>
              <p className="product-description">
                {selectedProduct.description}
              </p>
              <h1 className="product-price">{selectedProduct.price}₺</h1>
              <div className="product-action">
                <h5>Max quantity (5)</h5>
                <CiCircleMinus onClick={minusCount} className="add-icon" />
                <input
                  type="number"
                  value={count}
                  onChange={(e) =>
                    setCount(
                      Math.min(Math.max(1, +e.target.value), maxQuantity)
                    )
                  }
                  style={{
                    borderRadius: "5px",
                    fontSize: "18px",
                    width: "50px",
                    height: "35px",
                    textAlign: "center",
                  }}
                />
                <CiCirclePlus onClick={addCount} className="add-icon" />
                <button onClick={addBasket} className="product-detail-button">Add to Cart</button>
              </div>
            </div>
          </div>
        ) : (
          <p>Product not found.</p>
        )}
      </div>

          {/*  burda yap */}
          {relatedProducts.length > 0 && (
        <div className="related-products-container">
          <h2>Related Products</h2>
          <div className="related-products-grid">
            {relatedProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default ProductDetail;
