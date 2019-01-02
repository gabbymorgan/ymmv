import React from 'react';
import { CardBody, CardTitle, CardSubtitle, CardText, Col } from 'reactstrap';

import { Card, Link, ImageRow, CardImg, ResultContainer  } from '../styles';

const Result = (props) => {
  const {
    name,
    companyName,
    description,
    imageUrl,
    ratingIds,
    _id,
  } = props.product;
  console.log(props.product);

  return (
    <ResultContainer xs="12" md="4">
      <Card>
        <CardImg top width="100%" src={imageUrl} alt="Card image" />
        <CardBody>
          <Link to={{
            pathname: `/product/${_id}`,
            state: {
              product: props.product
            }
          }}>
            <CardTitle>{name}</CardTitle>
          </Link>
          <CardSubtitle>{companyName}</CardSubtitle>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </ResultContainer>
  );
}

export default Result;