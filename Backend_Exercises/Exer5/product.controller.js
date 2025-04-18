const Product = require('./product.model');

const createProduct = async (product) => {
  try {
    const newProduct = new Product(product);

    await newProduct.save();
    console.log('Product created');
  } catch (error) {
    console.error('Error creating product:', error);
  }
}

const getProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    console.log(error);
  }
}

const deleteProduct = async (id) => {
  try {
    const productId = id;
    await Product.findByIdAndDelete(productId);
    console.log("deleted successfully");
  } catch (error) {
    console.log(error);
  }
}

const updateProduct = async (id) => {
    try {
        const productId = id;
        await Product.findByIdAndUpdate(productId, req.body, { new: true });
        console.log("updated successfully")
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    createProduct,
    getProducts,
    deleteProduct,
    updateProduct
}