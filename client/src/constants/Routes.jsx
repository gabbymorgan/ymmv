import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { Route } from 'react-router-dom';

import { Main } from '../pages';

export default () => {
  return (
    <Row>
      <Route exact path='/' component={ Main } />
    </Row>
  );
}

