import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProduct=async ()=>{
    let url = `http://localhost:5000/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  useEffect(()=>{
    getProduct();
  },[]);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu)=>{
            <Col lg={3}>
              <ProductCard item={menu}/>
            </Col>
          })}
        </Row>
      </Container>
        <ProductCard/> 
    </div>
  )
}

export default ProductAll
