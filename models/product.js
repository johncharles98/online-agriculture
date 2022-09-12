const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true 
    },
    price: {
        type: String,
        required: true 
    },
    type:{
        type: String, 
    },
    image: {
        type: String,
        required: true     
    },
    seller:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})


module.exports = mongoose.model("Product" , productSchema)