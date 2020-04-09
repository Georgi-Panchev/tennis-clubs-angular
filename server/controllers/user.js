const User = require('../models/User');
const Tournament = require('../models/Tournament');
const encryption = require('../util/encryption');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

module.exports = {
    register: (request, response, next) => {
        const { username, password } = request.body;

        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(422).json({
                success: false,
                message: errors.array()[0]['msg']
            });
        }

        const salt = encryption.generateSalt();
        const hashedPassword = encryption.generateHashedPassword(salt, password);

        User.create({
            username,
            hashedPassword,
            salt
        })
            .then((user) => {
                response.status(201)
                    .json({
                        success: true,
                        message: 'User Registered!',
                        user: { userId: user._id, username: user.username, roles: user.roles }
                    });
            })
            .catch((error) => {
                next(error);
            });
    },

    login: (request, response, next) => {
        const { username, password } = request.body;

        User.findOne({ username: username })
            .then((user) => {
                if (!user) {
                    return response.status(404)
                        .json({ success: false, message: 'Invalid Credentials!' });
                }

                if (!user.authenticate(password)) {
                    return response.status(400)
                        .json({ success: false, message: 'Invalid Credentials!' });
                }

                const token = jwt.sign({
                    username: username,
                    userId: user._id,
                    roles: user.roles
                }, 'verysecuresecret');

                response.status(200)
                    .json({
                        success: true,
                        message: 'User Logged In!',
                        token,
                        user: { userId: user._id, username: user.username, roles: user.roles }
                    });
            })
            .catch((error) => {
                next(error);
            });
    },

    profile: (request, response, next) => {
        let userId = request.userId;

        Tournament.find({})
            .where('playersRegistered').in(userId)
            .populate('club')
            .then((tournaments) => {
                response.status(200)
                    .json({ success: true, message: 'Tournaments Fetched!', tournaments });
            })
            .catch((error) => {
                next(error);
            });
    }
};

