import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddProduct = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const addProductHandler = async (e) => {

    
    e.preventDefault();
    
    
    const data = {
        title: title,
        price: price,
        description: description,
        published: true
    }

    await axios.post('/api/v1/products/addProduct', data)
    
    navigate('/products')
  }

  return (
    <>
      <Container className="mt-5 p-2">
        <h1>AddProduct</h1>
        <hr />
        <Form onSubmit={addProductHandler}>
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
            Add Product
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default AddProduct;
