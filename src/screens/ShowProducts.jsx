import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../Components/ProductCard'

const ShowProducts = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProductsData = async () => {
      const { data } = await axios.get('/products')
      console.log(data)
      setProducts(data)
    }
    getProductsData()
    
}, [])

  return (
    <>
      <Container className='justify-content-center m-5 p-2'>
        <h1 className='text-center'>Show All Products</h1>
        <hr/>
        <Row>
          <Col md={12} >
            { Array.isArray(products)

             ? products.map((product, index) => {
                return <Col md={8} lg={12} sm={12} key={index}>
                  <ProductCard product={product} />
                </Col>              
              })
            : null}
          </Col>
          
        </Row>
        
      </Container>
      
    </>
  )
}

export default ShowProducts