import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getAllProducts,
  setSelectedProduct,
} from "../redux/slices/productSlice";
import Loading from "./Loading";
import "../css/ProductDetails.css"; // Import CSS file for styling
import { CiCirclePlus } from "react-icons/ci";

function ProductDetail() {
  const { id } = useParams();
  const { products, selectedProduct, loading } = useSelector(
    (store) => store.product
  );

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

  // When loading, show a loading indicator
  if (loading) {
    return <Loading />;
  }

  // Display selected product details
  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {selectedProduct ? (
        <div style={{ marginRight: "40px" }}>
          <img src={selectedProduct.image} width={300} height={500} alt="" />

          <div className="product-detail-info">
            <h1 style={{ fontFamily: "arial" }}>{selectedProduct.title}</h1>
            <p style={{ fontFamily: "arial", fontSize: "20px" }}>
              {selectedProduct.description}
            </p>

            <h1
              style={{
                fontSize: "50px",
                fontFamily: "arial",
                fontWeight: "bold",
                color: "rgb(185, 76, 76)",
              }}
            >
              {selectedProduct.price}₺
            </h1>

            <div style={{ display: "flex", alignItems: "center" }}>
              <CiCirclePlus style={{ fontSize: "40px", marginRight: "15px" }} />{" "}
            </div>

            <button className="product-detail-button">Add to Cart</button>
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
}

export default ProductDetail;
