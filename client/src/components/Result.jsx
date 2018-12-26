import React from 'react';
import { CardBody, CardTitle, CardSubtitle, CardText, Col } from 'reactstrap';

import { Card, Link, ImageRow, CardImg, ResultContainer  } from '../styles';

const Result = (props) => {
  const {
    name,
    companyName,
    description,
    imgUrl,
    _id,
  } = props.product;

  return (
    <ResultContainer>
      <Card>
        <CardImg top width="100%" src={imgUrl || process.env.REACT_APP_DEFAULT_IMAGE_URL} alt="Card image cap" />
        <CardBody>
          <Link to={`/product/${_id}`}>
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