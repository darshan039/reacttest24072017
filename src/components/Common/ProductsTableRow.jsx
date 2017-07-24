import React from 'react';

export class ProductsTableRow extends React.Component {
    render() {
        var product = this.props.product;
        var productrow;
        
        if(this.props.type === 'list') {
            productrow = (<td className="text-center"><button className="btn btn-primary" onClick={this.props.addEvent}><i className="glyphicon glyphicon-plus">Add</i></button></td>);
        }
        else {
            productrow = (<td className="text-center"><button className="btn btn-primary" onClick={this.props.deleteEvent}><i className="glyphicon glyphicon-trash"> Remove</i></button></td>);
        }
        return(
            <tr>
                <td className="text-center">{product.code}</td>
                <td className="text-left">{product.name}</td>
                <td className="text-right">£{product.price}</td>
                {productrow}
            </tr>
        );
    }
}