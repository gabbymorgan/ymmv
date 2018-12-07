import React from 'react';
import { Link } from 'react-router-dom';
import { CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

import { Button, Card } from '../styles';

const Result = (props) => {
  const {
    name,
    company,
    description,
    imgUrl
  } = props.product;

  return (
    <div>
    <Card>
      <CardImg top width="100%" src={ imgUrl || process.env.REACT_APP_DEFAULT_IMAGE_URL } alt="Card image cap" />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{company.name}</CardSubtitle>
        <CardText>{description}</CardText>
        <Link to='/'>Ratings</Link>
      </CardBody>
    </Card>
  </div>
  );
}

export default Result;