import React from 'react';
import { ProductsTable } from '../Common/ProductsTable.jsx';

export class Cart extends React.Component{
    render(){
        return(
            <div>
                <h2>Shopping Cart</h2>
                <ProductsTable type='cart' />
            </div>
        );
    }
}