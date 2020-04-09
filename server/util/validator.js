const { check } = require('express-validator');
const User = require('../models/User');

module.exports = {
    registerUser: [
        check('username')
            .isLength({ min: 3, max: 10 })
            .withMessage('Username must be between 3 and 10 characters long!')
            .custom((value, { req }) => {
                return User.findOne({ username: value })
                    .then(userDoc => {
                        if (userDoc) {
                            return Promise.reject('Username already exists!');
                        }
                    });
            }),
        check('password')
            .isLength({ min: 3, max: 10 })
            .withMessage('Password must be between 3 and 10 characters long!'),

    ],

    createClub: [
        check('title')
            .isLength({ min: 3 })
            .withMessage('Title must be at least 3 characters long!'),
        check('imageUrl')
            .isURL()
            .withMessage('Image Url must be valid url!'),
        check('city')
            .isIn([ 'Sofia', 'Plovdiv', 'Varna', 'Burgas' ])
            .withMessage('Valid cities are Sofia, Plovdiv, Varna, Burgas!'),
        check('rank')
            .isIn([ 'Top', 'Medium', 'Low' ])
            .withMessage('Valid ranks are Top, Medium, Low!'),
        check('courts')
            .isInt({ min: 1 })
            .withMessage('Courts must be one or more!')
    ],

    createTournament: [
        check('title')
            .isLength({ min: 3 })
            .withMessage('Title must be at least 3 characters long!'),
        check('imageUrl')
            .isURL()
            .withMessage('Image Url must be valid url!'),
        check('balls')
            .isIn([ 'Dunlop', 'Wilson', 'Head' ])
            .withMessage('Valid balls are Dunlop, Wilson, Head!'),
        check('fee')
            .isInt({ min: 0 })
            .withMessage('Fee must be grater or equal to zero!')
    ]
};


