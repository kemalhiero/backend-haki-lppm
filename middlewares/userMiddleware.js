require('dotenv').config();
const model = require('../models');
const jwt = require('jsonwebtoken');

exports.authMiddleware = async (req, res, next) => {

    const authHeader = req.get('Authorization');

    // jika token tidak ada, kembalikan respons error
    if (!authHeader) {
        return res.status(401).json({ succes: false, message: 'Tidak ada token atau sudah logout sebelumnya' });
    }

    const tokenHeader = authHeader.split(' ')[1];

    if (!tokenHeader) {
        return next(res.status(401).json({
            status: 401,
            message: 'Login terlebih dahulu!'
        }))
    }

    let decoded;
    try {
        decoded = jwt.verify(tokenHeader, process.env.JWT_SECRET);
    } 
    catch(err) {
        console.error(err);
        return next(res.status(401).json({
            status: 'failed',
            message: err.message
        }))
    }
    
    const currentUser = await model.user.findOne({
        where: { email : decoded.email },
        attributes: ['nama', 'email', 'role']
    });

    if(!currentUser) {
        return next(res.status(401).json({
            status: 401,
            message: "User sudah tidak ada, token sudah tidak bisa digunakan"
        }))
    };
    req.user = currentUser
    next()
}

exports.isStrongPassword = async (req, res) => {
    // Custom validation function for password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    if (!passwordRegex.test(req)) {
        throw new Error('Password must contain at least one uppercase letter, one digit, and be at least 6 characters long.');
    };    
}

