import React from 'react';
import { Route } from 'react-router-dom';
import FoodItem from '../pages/FoodItem/FoodItem';
import Profile from '../pages/Profile/Profile';
import Users from '../pages/Users/Users';
import Landing from '../pages/Landing/Landing';

export default () => {
    return (
        <div>
            <Route exact path='/' component={Landing} />
            <Route path='/me' component={Profile} />
            <Route path='/users/:id' component={Users} />
            <Route path='/food/:id' component={FoodItem} />
        </div>
    );
}