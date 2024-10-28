import { useState,useEffect } from "react";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import "./App.css";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";

import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { calculateBasket, removeToBasket, setDrawer } from "./redux/slices/basketSlice";

function App() {
  const { products, drawer, totalAmount } = useSelector((store) => store.basket);

  const [empty, setEmpty] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());





  }, [products, dispatch]);


  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />

        <Drawer
          className="drawer"
          anchor="right"
          open={drawer}
          onClose={() => dispatch(setDrawer())}
        >
          {products &&
            products.map((product) => {
              return (
                <div className="drawer-item" key={product.id}>
                  <img src={product.image} alt={product.title} />
                  <div className="product-info">
                    <p>{product.title}</p>
                    <p className="product-quantity">
                      Quantity: {product.count}
                    </p>
                    <p className="product-price">{product.price}₺</p>
                    <button onClick={() => dispatch(removeToBasket({ id: product.id }

                    ))} className="remove-button">
  Remove
</button>
                  </div>
                  <h5>{empty}</h5>
                </div>
              );
            })}


<div className="total-amount-container">



  <span className="amount-label">Total Amount:  </span>
  <span className="amount-value">{totalAmount}₺</span>
</div>
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default App;
