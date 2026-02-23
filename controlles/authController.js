const UserModels = require('../models/userModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d'
    })
}


exports.register = async (req, res, next) => {
    try {

        const { name, email, password } = req.body;

        const userExits = await UserModels.findOne({ email });
        if (userExits) {
            return res.status(400).json({
                message: 'User already exists'
            })
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const createUser = await UserModels.create({
            name, email, password: hashPassword
        })


        res.status(201).json({
            _id: createUser._id,
            name: createUser.name,
            email: createUser.email,
            token: generateToken(createUser._id),
            message: "Register User Successfully"
        })


    } catch (error) {
        console.log('register', error);
        res.status(500).json({
            message: error.message
        });
    }
}

exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await UserModels.findOne({ email });
        const checkPassword = await bcrypt.compare(password, user.password);
        if (user && checkPassword) {
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
                message: "Login User Successfully"
            })
        } else {
            res.status(401).json({ message: "Invalid email or password" });

        }

    } catch (error) {
        console.log('login', error);
        res.status(500).json({
            message: error.message
        });
    }
}


exports.getAllUser = async (req, res, next) => {
    try {

        const User = await UserModels.find().select('-password');
        res.status(200).json({
            User,
            message: "Get User Successfully"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}