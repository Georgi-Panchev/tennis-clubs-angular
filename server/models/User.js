const mongoose = require('mongoose');
const encryption = require('../util/encryption');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: Schema.Types.String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 10
    },
    hashedPassword: {
        type: Schema.Types.String,
        required: true
    },
    salt: {
        type: Schema.Types.String,
        required: true
    },
    tournamentsAttended: [
        { type: Schema.Types.ObjectId, ref: 'Tournament' }
    ],
    roles: [ String ]
});

userSchema.method({
    authenticate: function (password) {
        const currentHashedPassword = encryption.generateHashedPassword(this.salt, password);

        return currentHashedPassword === this.hashedPassword;
    }
});

let User = mongoose.model('User', userSchema);

User.seedAdminUser = () => {
    User.find({})
        .then((users) => {
            if (users.length > 0) return;

            let salt = encryption.generateSalt();
            let hashedPassword = encryption.generateHashedPassword(salt, 'admin');

            User.create({
                username: 'admin',
                salt: salt,
                hashedPassword: hashedPassword,
                roles: ['Admin']
            });
        });
};

module.exports = User;
