const { response, request } = require('express');
const User = require('../models/User.model');

const userGet = async (req = request, res = response) => {

    res.status(200).json({
        message: 'GET | Obtener usuario ...',
        data: []
    });
}

const userPost = async (req = request, res = response) => {

    res.status(200).json({
        message: 'POST | Creando usuario ...',
        data: []
    });
}

const userPut = async (req = request, res = response) => {

    res.status(200).json({
        message: 'PUT | Actualizar usuario ...',
        data: []
    });
}

const userDelete = async (req = request, res = response) => {

    res.status(200).json({
        message: 'DELETE | Eliminando usuario ...',
        data: []
    });
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}