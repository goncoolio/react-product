import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import AddProduct from './screens/AddProduct'
import EditProduct from './screens/EditProduct'
import Home from './screens/Home'
import ProductDetail from './screens/ProductDetail'
import ShowProducts from './screens/ShowProducts'

const App = () => {
  return (
    
    <Router>
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/addProduct' element={<AddProduct/>} />
            <Route exact path='/products' element={<ShowProducts/>} />
            <Route exact path='/product/edit/:id' element={<EditProduct/>} />
            <Route exact path='/product/:id' element={<ProductDetail/>} />
        </Routes>
    </Router>

    // <>
    //   <h1>
    //     Main App 
    //   </h1>
    // </>
  )
}

export default App