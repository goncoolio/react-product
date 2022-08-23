import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')

  useEffect(() => {
      const getSignleProductData = async () => {
        const { data } = await axios.get(`/${id}`)
        console.log(data)

        setTitle(data.title)
        setPrice(data.price)
        setDescription(data.description)
      }

      getSignleProductData()
  }, [id])

  const deleteHandler = async () => {

    await axios.delete(`/delete/${id}`)
    
    navigate('/products')
  }


  return (
    <>
        <h1>ProductDetail</h1>
        <hr/>

        <Card className='shadow-lg m-2 p-3 rounded' style={{ width: '18rem' }}>      
            <Card.Body>
              <Card.Title>Title: {title}</Card.Title>
              <Card.Title>Price: {price}</Card.Title>
              <Card.Text>
                Description: {description}
              </Card.Text>
              <Link to={`/product/edit/${id}`}>
                  <Button variant='primary'>Edit</Button>
              </Link>              
              <Button variant='danger' onClick={deleteHandler}>Delete</Button>
              
              
            </Card.Body>
        </Card>
        
    </>
  )
}

export default ProductDetail