const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },

    email: {
        type: 'string',
        required: true
    },
    age: {
        type: 'number',
        required: true
    },

});

module.exports = mongoose.model('User', UserSchema);