const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    price : {
        type : Number ,
        required : true
    },
    rating : {
        type : Number,
        default:0
    },
    details: {
        type : String,
        required:true
    },
    company_id:{
        type:String
    }
})

module.exports = mongoose.model('Product',productSchema)