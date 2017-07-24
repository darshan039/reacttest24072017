import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { App } from './components/App/App.jsx';
import { Product } from './components/Product/Product.jsx';
import { Cart } from './components/Cart/Cart.jsx';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Product}/>
            <Route path='productList' component={Product}/>
            <Route path='shoppingCart' component={Cart}/>
        </Route>
    </Router>
), document.getElementById('app'));