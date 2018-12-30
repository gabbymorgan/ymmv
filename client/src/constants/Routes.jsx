import React, { Component } from 'react';
import { Row } from '../styles';
import { Route } from 'react-router-dom';

import { Main, CreateProduct, MyProfile } from '../pages';

export default () => {
  return (
    <Row>
      <Route exact path='/' component={ Main } />
      <Route path='/me' component={ MyProfile } />
      <Route exact path='/create/product' component={ CreateProduct } />
    </Row>
  );
}

