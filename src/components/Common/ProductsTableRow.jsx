import React from 'react';

export class ProductsTableRow extends React.Component {
    render() {
        var product = this.props.product;
        var productrow;
        
        if(this.props.type === 'list') {
            productrow = (<td><button onClick={this.props.addEvent}>Add</button></td>);
        }
        else {
            productrow = (<td><button onClick={this.props.deleteEvent}>Delete</button></td>);
        }
        return(
            <tr>
                <td>{product.code}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                {productrow}
            </tr>
        );
    }
}