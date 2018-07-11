import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as  Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

const store = createStore(rootReducer, )

ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root'));
registerServiceWorker();
