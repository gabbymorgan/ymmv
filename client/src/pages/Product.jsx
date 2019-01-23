import React from 'react';
import { Table, Tooltip } from 'reactstrap';

import { Row, Col } from '../styles';

class Product extends React.Component {
  state = {}

  toggle(id) {
    const toggled = !this.state[id];
    console.log(id, toggled);
    this.setState({
      [id]: toggled,
    })
  }

  render() {
    const { product } = this.props.location.state;
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
          <p><strong>Average Reaction Level: </strong></p>
          <Table>
            <thead>
              <tr>
                <th>Allergen</th>
                <th>Light</th>
                <th>Moderate</th>
              </tr>
            </thead>
            <tbody>
              {product.ratingIds ? product.ratingIds.map(rating => {
                const id = rating._id;
                return (
                  <tr key={id}>
                    <td>{rating.allergen}</td>
                    <td id={"light" + id}>{rating.light.average}</td>
                    <Tooltip placement="right" isOpen={this.state["light" + id]} target={"light" + id} toggle={() => this.toggle("light" +id) }>
                      {rating.light.sampleSize} reports
                    </Tooltip>
                    <td id={"moderate" + id}>{rating.moderate.average}</td>
                    <Tooltip placement="right" isOpen={this.state["moderate" + id]} target={"moderate" + id} toggle={() => this.toggle("moderate" + id) }>
                      {rating.moderate.sampleSize} reports
                    </Tooltip>                  </tr>
                )
              }) : null}
            </tbody>
          </Table>
        </Row>
      </Col>
    );
  }
}

export default Product;