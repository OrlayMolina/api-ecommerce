const { response, request } = require('express');
const User = require('../models/User.model');

const userGet = async (req = request, res = response) => {

    res.status(200).json({
        message: 'GET | Creando usuario ...',
        data: []
    });
}

module.exports = {
    userGet
}