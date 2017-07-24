import React from 'react';
import { Link } from 'react-router';
import { ProductsTableRow } from './ProductsTableRow.jsx'
import productController from '../../controllers/productController.js'

export class ProductsTable extends React.Component {
    constructor() {
        super();

        this.state = {
            products: []
        };

        this.addProductToCart = this.addProductToCart.bind(this);
        this.deleteProductFromCart = this.deleteProductFromCart.bind(this);
    }

    componentWillMount() {
        if(this.props.type === 'list') {
            this.setState({products: productController.getAllProducts()});
        }
        else {
            this.setState({products: productController.getAllCartProducts()});
        }
    }
    
    addProductToCart() {
        productController.addProductToCart(1);
    }

    deleteProductFromCart() {
        productController.deleteProductFromCart(0);
        this.forceUpdate();
    }

    render() {
        var table;

        if(this.state.products.length === 0 && this.props.type === 'cart') {
            table = (<div>Cart is Empty.<p><Link to='productList'>Explore Some items here.</Link></p></div> );
        }
        else {
            table = (<table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="text-center">Code</th>
                            <th className="text-left">Name</th>
                            <th className="text-right">Price</th>
                            <th className="text-center"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map((product, i) => <ProductsTableRow key = {i} product={product} type={this.props.type} addEvent={this.addProductToCart} deleteEvent={this.deleteProductFromCart} />)}
                    </tbody>
                </table>);
        }

        return(
            <div>
                {table}
            </div>
        );
    }
}