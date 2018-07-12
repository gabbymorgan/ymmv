import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as  Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path='/' component={App} />
        </Router>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
