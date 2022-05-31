import React, { Component } from "react";
import Product from './Product.js';
import {Container, Row} from "react-bootstrap";

export default function cart(props){
  const {products} = props
  
  return (
  <main> 
    <Row className = "cartHeader"><h3 className = "cartRow">My Cart</h3></Row>
  
  <div>{products.map((product) => ( <Product key = {product.id} product = {product}></Product>))}
  </div></main>)
}
