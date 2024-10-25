import { useState } from "react";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  return <div>
    <PageContainer>
    <Header/>
    <ProductList/>
    </PageContainer>




  </div>;
}

export default App;
