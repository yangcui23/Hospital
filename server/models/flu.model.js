const mongoose = require('mongoose');
const Schema = require('mongoose')

const FluSchema = new mongoose.Schema({
    birthday : {
        type : Date,
        require : true
    },
    vaccine :{
        type: String,
        require : true
    },
    date :{
        type: Date,
        require : true
    },
    location : {
        type: String,
        require : true
    },
    user_id : {
        type: String,
        require: true
    }
    
    

},{timestamps:true})

module.exports = mongoose.model('flu' , FluSchema)