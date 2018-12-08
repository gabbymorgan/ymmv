import React from 'react';
import { CardImg, CardBody, CardTitle, CardSubtitle, CardText, Col } from 'reactstrap';

import { Card, Link } from '../styles';

const Result = (props) => {
  const {
    name,
    company,
    description,
    imgUrl,
    _id,
  } = props.product;

  return (
    <Col xs="12" md="6" lg="4">
      <Link to={`/product/${_id}`}>
        <Card>
          <CardImg top width="100%" src={imgUrl || process.env.REACT_APP_DEFAULT_IMAGE_URL} alt="Card image cap" />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardSubtitle>{company.name}</CardSubtitle>
            <CardText>{description}</CardText>
          </CardBody>
        </Card>
      </Link>
    </Col>
  );
}

export default Result;