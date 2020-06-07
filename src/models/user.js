const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
 
    name: {
        type: String,
        required: true,
    },
    rg: {
        type: String,
        required: true,
        unique: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    datanasc: {
        type: Date,
        required: true
    },
    tipoplano: {
        type: String,
        required: true
    },
    numdep: {
        type: Number
    },
});

const User = mongoose.model('User, UserSchema');

module.exports = User;