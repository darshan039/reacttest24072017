import React from 'react';
import { ProductsTable } from '../Common/ProductsTable.jsx';


export class Product extends React.Component {
    render(){
        return(
            <div>
                <h2>List of Product</h2>
                <ProductsTable type='list' />
            </div>
        );
    }
}