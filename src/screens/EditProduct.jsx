import React, { useState, useEffect } from 'react'
import { Container, Form, Button } from "react-bootstrap";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';



const EditProduct = () => {

  const navigate = useNavigate()
  const {id} = useParams()
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')

  useEffect(() => {
      const getDataById = async () => {
        const {data}  = await axios.get(`/api/v1/products/${id}`)
        console.log(data)

        setTitle(data.title)
        setPrice(data.price)
        setDescription(data.description)
      }
      getDataById()

  }, [id])
 
  const updateHandler =  async (e) => {

    e.preventDefault();   

    const data = {
      title: title,
      price: price,
      description: description,
      published: true
    }
    await axios.put(`/api/v1/products/${id}`, data)

    navigate('/products')

  }

  

  return (
    <>
        
        <Container className="mt-5 p-2">
        <h1>Edit Product</h1>
        <hr />
        <Form onSubmit={updateHandler}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Tile"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control 
              type="number" 
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control 
                as="textarea" rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Edit Product
          </Button>
        </Form>
      </Container>

    </>
  )
}

export default EditProduct