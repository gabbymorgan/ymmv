import React from 'react';
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
      <CardImg top width="100%" src={imgUrl || "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"} alt="Card image cap" />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{company.name}</CardSubtitle>
        <CardText>{description}</CardText>
        <Button>Ratings</Button>
      </CardBody>
    </Card>
  </div>
  );
}

export default Result;