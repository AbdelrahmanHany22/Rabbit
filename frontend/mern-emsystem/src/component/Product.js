import React, { Component } from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap';
import cart from "./cart.png"


export default function Product(props) {
    const{product} = props;


    return (
      <div><Container>
        <Row>
          <Col sm={6}>


            <Card style={{ width: '40rem' }} class="card rounded-3 mb-3">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Row>
                  <Col><div class="col-md-2 col-lg-2 col-xl-2">
                    <img className="small" src={product.image} alt={product.name} />
                  </div> </Col>
                  <Col>
                    <Row><p></p></Row>
                    <Card.Subtitle className="mb-2 text-muted">{product.price} EGP</Card.Subtitle>

                  </Col>
                  <Col>

                    <Row> <p></p>
                    </Row>

                    <Row>
                      <Col> <button> - </button>
                      </Col>
                      <Col> 1 </Col>
                      <Col> <button> +</button>
                      </Col>
                    </Row>

                    <Row> <p></p> </Row>

                  </Col>
                </Row>

              </Card.Body>
            </Card>
          </Col>

        </Row>


      </Container>
      </div>

  
  );

    }
