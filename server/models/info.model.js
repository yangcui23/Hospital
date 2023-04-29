const mongoose = require('mongoose');
const Schema = require('mongoose')

const InfoSchema = new mongoose.Schema({
    history: {
        type: String,
        require : [true,'Medical history is required']
    },
    symptoms: {
        type: String,
        require : true
    },
    phoneNum: {
        type: String,
        require : true
    },
    medication: {
        type: String,
        require : true
    },
    date: {
        type: Date,
        require : true
    },
    location: {
        type: String,
        require : true
    },

    user_id : {
        type: String,
        require: true
    }


}, { timestamps: true })

module.exports = mongoose.model('info', InfoSchema)