import productModel from '../models/products.js';

let products = productModel.products;
let cartProducts = [];

exports.getAllProducts = function() {
    return products;
}

exports.getAllCartProducts = function() {
    return cartProducts;
}

exports.addProductToCart = function(index) {
    var product = products[index];
    cartProducts.push(product);
}

exports.deleteProductFromCart = function(index) {
    cartProducts.pop(index);
}