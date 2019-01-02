import React, { Component } from 'react';
import { Row } from '../styles';
import { Route } from 'react-router-dom';

import { Main, MyProfile, Product, About, Contact } from '../pages';
import { FormComponents } from '../components';

export default () => {
  return (
    <Row>
      <Route exact path='/' component={ Main } />
      <Route path='/me' component={ MyProfile } />
      <Route path='/product/:productId' component={Product} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      {
        Object.keys(FormComponents).map(componentName => {
          const Component = FormComponents[componentName];
          return <Route key={componentName} exact path={`/${componentName}`} component={Component} />
        })
      }
    </Row>
  );
}

