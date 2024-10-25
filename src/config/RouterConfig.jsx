import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';
import ProductDetail from '../components/ProductDetail';

function RouterConfig() {
  return (

    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product-details/:id' element={<ProductDetail />} />
        
    

        <Route path='*' element={<PageNotFound/>}/>

    </Routes>





  )
}

export default RouterConfig