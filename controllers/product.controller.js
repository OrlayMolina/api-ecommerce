const { response, request } = require('express');
const Product = require('../models/Product.model');

const productsGet = async (req = request, res = response) => {
    
    const products = await Product.find();

    res.status(200).json({
        message: 'Datos cargados correctamente',
        data: products
    });
}

const productsPost = async (req = request, res = response) => {

    const body = req.body;

    let product = Product(body);
    await product.save();

    res.status(200).json({
        message: 'Producto agregado correctamente',
        data: product
    });
}

const productsPut = async (req = request, res = response) => {

    const { id } = req.query;
    await Product.save();

    res.status(200).json({
        msg: 'Producto actualizado correctamente',
        code: id
    });
}

const productsDelete = async (req = request, res = response) => {
    
    const { id } = req.query;
    await Product.findByIdAndDelete(id);

    res.status(200).json({
        message: 'Producto eliminado correctamente  ',
        code: id
    });
}

module.exports = {
    productsGet,
    productsPost,
    productsPut,
    productsDelete
}