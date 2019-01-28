import React, { Component } from 'react';
import { Row } from '../styles';
import { Route } from 'react-router-dom';

import { Main, MyProfile, Product, About } from '../pages';
import CreateProduct from '../components/Forms/CreateProduct';

export default () => {
  return (
    <Row>
      <Route exact path='/' component={ Main } />
      <Route path='/me' component={ MyProfile } />
      <Route path='/product/:productId' component={Product} />
      <Route path='/about' component={About} />
      <Route path='/new/product' component={ CreateProduct } />
    </Row>
  );
}

