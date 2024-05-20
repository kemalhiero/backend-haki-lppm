const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const model = require('../models');
require('dotenv').config();

exports.register = async(req, res) => {
    try {

        const {nama, email, password, passwordConfirm} = req.body;

        if (password !== passwordConfirm) return res.status(401).send({ status: 'failed', message: 'Passwords do not match' });

        const emailUser = await model.user.findOne({ where: {email}, attributes: ['email'] });
        if (emailUser) return res.status(401).json({ status: 'failed', message: 'email sudah digunakan' });

        // hash password
        const salt = bcrypt.genSaltSync();
        const hashedPassword = bcrypt.hashSync(password, salt);

        await model.user.create({
            nama, email,
            role: 'user',
            password: hashedPassword
        });

        res.status(200).json({ status: 'succes', message: `Berhasil registrasi user ${nama}`});

    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}

exports.login = async(req, res) => {
    try {
        const {email, password} = req.body;

        if (!email || !password) {
            return res.status(400).json({
                status: 'failure',
                message: 'Email and Password are required'
            })
        }

        let userData = await model.user.findOne({ where: { email } });
        if (!userData || !( bcrypt.compareSync(password, userData.password))) {
            return res.status(400).json({
                status: 'failure',
                message: 'Email or Password is invalid'
            })
        };

        const token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: '1d'});

        await model.tokenSession.create({
            idUser: userData.id,
            token
        });

        return res.status(200).json({
            status: 'success',
            token
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({status: 'failed', message: error.message});
    }
};

exports.getUserData = async(req, res) => {
    try {
        return res.status(200).json(req.user);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    }
}
