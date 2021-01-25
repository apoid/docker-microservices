const Product = require("../data/entities/Product");
const utils = require('../data/utils/utils');
const connection = require('../data/utils/database').getPoolConnection();

function getProductsFromDatabase(){
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM products",
            (err, rows) => {
                err ? reject(err) : resolve(buildProductsArray(rows))
            });
    })
}

function buildProductsArray(dbRows) {
    const products = [];
    dbRows.forEach(row => {
        const product = new Product(row.id, row.name, row.description, row.price);
        products.push(product);
    });
    return products;
}

module.exports = {
    getProductsFromDatabase
}