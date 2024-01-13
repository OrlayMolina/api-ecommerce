const { response, request } = require('express');
const User = require('../models/User.model');

const userGet = async (req = request, res = response) => {

    const users = await User.find();

    res.status(200).json({
        message: 'Datos cargados correctamente',
        data: users
    });
}

const userPost = async (req = request, res = response) => {

    const body = req.body;

    let user = User(body);
    await user.save();

    res.status(200).json({
        message: 'Usuario agregado correctamente',
        data: user
    });
}

const userPut = async (req = request, res = response) => {

    const { id } = req.query;
    const userToEdit = req.body;

    // new true me devuelve el registro cambiado
    const updatedUser = await User.findByIdAndUpdate(id, userToEdit, {new: true});

    res.status(200).json({
        message: 'Usuario actualizado correctamente',
        code: updatedUser
    });
}

const userDelete = async (req = request, res = response) => {

    const { id } = req.query;
    await User.findByIdAndDelete(id);

    res.status(200).json({
        message: 'Usuario eliminado correctamente  ',
        code: id
    });
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}