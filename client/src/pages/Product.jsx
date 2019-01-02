import React from 'react';
import { Row, Col } from '../styles';

class Product extends React.Component {
  state = {}

  render() {
    const { product } = this.props.location.state;
    console.log(product);
    if (!product) return <div></div>
    return (
      <Col xs="12" md="6">
        <Row>
          <h4>{product.companyName}</h4>
        </Row>
        <Row>
          <h1>{product.name}</h1>
        </Row>
        <Row>
          <img rounded src={product.imageUrl} />
        </Row>
        <Row>
          <p><strong>Description: </strong>{product.description}</p>
        </Row>
        <Row>
          <p><strong>Ingredients: </strong>{product.ingredients.join(', ')}</p>
        </Row>
        <Row>
          <p><strong>Ratings: </strong>{product.ratings}</p>
        </Row>
      </Col>
    );
  }
}

export default Product;