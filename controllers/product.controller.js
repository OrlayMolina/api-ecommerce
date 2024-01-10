const { response, request } = require('express');

const productsGet = (req = request, res = response) => {
    res.status(200).json({
        msg: 'GET | Hola desde Products',
        code: 'OK'
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