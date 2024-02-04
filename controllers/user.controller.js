const { response, request } = require('express');
const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const salt = 10;

const userGet = async (req = request, res = response) => {

    const tokenInfo = req.user;
    const profileRaw = await User.findById(tokenInfo.id);
    const profile = {
        name: profileRaw.name,
        last_name: profileRaw.lastname,
        email: profileRaw.email,
        dob: profileRaw.dob
    }

    res.status(200).json({
        message: 'Datos cargados correctamente',
        data: profile
    });
}

const userPost = async (req = request, res = response) => {

    const body = req.body;
    let user = User(body);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    res.status(200).json({
        message: 'Usuario agregado correctamente',
        data: user
    });
}

const userPut = async (req = request, res = response) => {

    const id = req.user.id;
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

const loginPost = async (req = request, res = response) => {

    const body = req.body;
    const userInformationDb = await User.findOne({email: body.email, active: true});
    if(userInformationDb == null){
        res.status(404).json({
            message: 'User not find or not active',
            code: null
        });
    }

    const comparePassword = await bcrypt.compare(body.password, userInformationDb.password);

    if(!comparePassword){
        res.status(403).json({
            message: 'Invalid password',
            code: 'null'
        });
    }

    const payload = {
        id: userInformationDb._id,
        full_name : `${userInformationDb.name} ${userInformationDb.lastname}`,
        email: userInformationDb.email
    }

    res.status(200).json({
        message: 'Intento de login',
        code: jwt.sign(payload, process.env.JWT_SIGNATURE)
    });
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete,
    loginPost
}