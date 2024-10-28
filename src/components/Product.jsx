import React, { useEffect } from "react";
import "../css/Product.css";
import { useNavigate } from "react-router-dom";

function Product({ product }) {


  // eslint-disable-next-line react/prop-types
  const { id, price, image, title, description , category} = product;
  
  const navigate = useNavigate();


  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  


  return (
    <div key={id} className="card">
      <img className="image" src={image} />
      <div>
        <p>{title}</p>
        <h3>{price} $</h3>
      </div>
      <div>
        <button onClick={()=>navigate("/product-details/"+id)} className="detail-button">Detail</button>
      </div>
    </div>
  );
}

export default Product;
