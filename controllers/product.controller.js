const { response, request } = require('express');
const Product = require('../models/Product.model');

const productsGet = async (req = request, res = response) => {
    
    const products = await Product.find();

    res.status(200).json({
        message: 'Datos cargados correctamente',
        data: products
    });
}

const productsPost = (req = request, res = response) => {
    res.status(200).json({
        msg: 'POST | Hola desde Products',
        code: 'OK'
    });
}

const productsPut = (req = request, res = response) => {
    res.status(200).json({
        msg: 'PUT | Hola desde Products',
        code: 'OK'
    });
}

const productsDelete = (req = request, res = response) => {
    res.status(200).json({
        msg: 'DELETE | Hola desde Products',
        code: 'OK'
    });
}

module.exports = {
    productsGet,
    productsPost,
    productsPut,
    productsDelete
}