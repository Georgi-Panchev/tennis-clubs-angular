const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.Promise = global.Promise;

module.exports = () => {
    mongoose.connect('mongodb://localhost:27017/tennis-clubs', {
        useNewUrlParser: true
    });
    const db = mongoose.connection;
    db.once('open', (error) => {
        if (error) {
            console.log(error);
        }

        User.seedAdminUser();

        console.log('Database ready...');
    });

    db.on('error', (reason) => {
        console.log(reason);
    });
};
