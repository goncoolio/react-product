import React from 'react'
import {  Routes, Route, Link } from 'react-router-dom'
import Menu from './Components/Menu'
import AddProduct from './screens/AddProduct'
import EditProduct from './screens/EditProduct'
import Home from './screens/Home'
import NotFound from './screens/NotFound'
import ProductDetail from './screens/ProductDetail'
import ShowProducts from './screens/ShowProducts'
import axios from 'axios';

const App = () => {

  // axios.defaults.baseURL = 'https://api.taligne.com/api/v1/products';
  // axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
  // axios.defaults.headers.post['Content-Type'] = 'application/json';
  
  // axios.interceptors.request.use(request => {
  //     console.log(request);
  //     // Edit request config
  //     return request;
  // }, error => {
  //     console.log(error);
  //     return Promise.reject(error);
  // });
  
  // axios.interceptors.response.use(response => {
  //     console.log(response);
  //     // Edit response config
  //     return response;
  // }, error => {
  //     console.log(error);
  //     return Promise.reject(error);
  // });

  return (

    <> 
    <Menu/>
             
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/addProduct' element={<AddProduct/>} />
          <Route exact path='/products' element={<ShowProducts/>} />
          <Route exact path='/product/edit/:id' element={<EditProduct/>} />
          <Route exact path='/product/:id' element={<ProductDetail/>} />
          <Route path='/*' element={<NotFound />} />
      </Routes>
    
    </>

    
    
  )
}

export default App