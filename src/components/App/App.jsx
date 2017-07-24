import React from 'react';
import { Link } from 'react-router';

export class App extends React.Component {
    render() {
        var floatRight = {'float': 'right'};
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="productList">Shopping Cart Example</Link>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><Link to="productList">Product List</Link></li>
                            <li><Link to="shoppingCart">Shopping Cart</Link></li>
                        </ul>
                    </div>
                </nav>
                {this.props.children}
            </div>
        );
    }
}