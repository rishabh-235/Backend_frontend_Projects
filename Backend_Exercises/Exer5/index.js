const connectDB = require('./database.config');
const { createProduct, getProducts, deleteProduct, updateProduct } = require('./product.controller');

connectDB();

//here we are not adding stock field here it will validation error as it is a required field.
//we will also get error because price is number field but we are giving it string.
createProduct({
    name: 'Product 2',
    price: "one thousand",
    description: 'Description of Product 2',
    category: 'Category 2',
    // stock: 100
});

// const products = getProducts();
// console.log(products);

// deleteProduct('6800179b57f18f1899057a58')

// updateProduct({
//     name: 'Product 2',
//     price: 10000,
//     description: 'Description of Product 2',
//     category: 'Category 2',
//     stock: 100
// })
