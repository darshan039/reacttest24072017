import React from 'react';
import { Link } from 'react-router';

export class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
                <li><Link to="productList">Product List</Link></li>
                <li><Link to="shoppingCart">Shopping Cart</Link></li>
            </ul>
            {this.props.children}
         </div>
      );
   }
}