const mongoose = require('mongoose')

const { Schema, model } = mongoose
// schema definition



const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true
    }
    })
// create user model
const User = model('User', UserSchema)

//export user model

module.exports = User