import React from 'react';
import { Row, Col, Table } from 'reactstrap';

const Result = (props) => {
  const {
    name,
    company,
    description,
    ingredients,
    ratings,
  } = props.product;
    return (
      <Row>
        <Col>
          <Row>
            <h1>{Name}</h1>
            <h3>{company.name}</h3>
            <p>{description}</p>
          </Row>
          <Row>
            <Table striped>
              <thead>
                  <tr>
                    <th>#</th>
                    <th>{}</th>
                    <th>allergen</th>
                    <th>severity</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {
                      ingredients.map(ingredient => {
                        return <td>{ingredient}</td>;
                      })
                    }
                  </tr>
              </tbody>
              {
                ratings.map(rating => {

                })
              }
            </Table>
          </Row>
          <Row>
            <Table striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>{}</th>
                  <th>Ingredient</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {
                    ingredients.map(ingredient => {
                      return <td>{ingredient}</td>;
                    })
                  }
                </tr>
              </tbody>
            </Table>          
          </Row>
        </Col>
      </Row>
    );
}

export default Result;