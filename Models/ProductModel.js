const mongosse = require('mongoose');

const ProductSchema = new mongosse.Schema({
    ProductName:{
        type:String,
        required:true,
    },
    ProductCode:{
        type:String,
        required:true,
    },
    Image:{
        type:String,
        required:true,
    },
    UnitPrice:{
        type:String,
        required:true,
    },
    Qty:{
        type:String,
        required:true,
    },
    TotalPrice:{
        type:String,
    },
    CreateDate:{
        type:Date,
        default:Date.now()
    }



},{versionkey:false})


const ProductModel = new mongosse.model("productmodels",ProductSchema);

module.exports = ProductModel

