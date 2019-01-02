import React, { Component } from 'react';
import { ContentHeading, Row, Col } from '../styles';

class About extends Component {
  state = {}
  render() {
    return (
      <Col xs="12" md="6">
        <ContentHeading>
          <h1>Your Mileage May Vary</h1>
        </ContentHeading>
        <Row>
          <p>Hi, my name is Ronnie. My wife is allergic to corn. I made this site so she didn't have to search endlessly through Facebook groups for this information. Feel free to reach out to me at </p>
        </Row>
      </Col>
    );
  }
}

export default About;