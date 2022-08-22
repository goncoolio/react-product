import React from 'react'
import {  Routes, Route, Link } from 'react-router-dom'
import Menu from './Components/Menu'
import AddProduct from './screens/AddProduct'
import EditProduct from './screens/EditProduct'
import Home from './screens/Home'
import ProductDetail from './screens/ProductDetail'
import ShowProducts from './screens/ShowProducts'

const App = () => {

    
  return (

    <> 
    <Menu/>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Product</Link>
      </nav>        
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/addProduct' element={<AddProduct/>} />
          <Route exact path='/products' element={<ShowProducts/>} />
          <Route exact path='/product/edit/:id' element={<EditProduct/>} />
          <Route exact path='/product/:id' element={<ProductDetail/>} />
      </Routes>
    
    </>

    
    
  )
}

export default App