import React, { memo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const total = memo(() => {
  return (
    <div>
        <Container>
            <Row><Col></Col>
                <Col></Col>
                <Col className = "total">
                <Row>Subtotal:4545</Row>
                <Row>Delivery Fees:33</Row>
                <Row>Total:543</Row>
                <div>
                    <button className = "checkout">Checkout</button>
                    </div>
                </Col>
                
            </Row>
            <br></br>
        
        </Container>

    </div>
  )
})

export default total