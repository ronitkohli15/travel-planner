
var mongoose = require('mongoose');

var Schema  = mongoose.Schema;

var product = new Schema(
    {
        productName:String,
        productDescription:String,
        quantity:Number,
        price:Number,
        isDeleted:{ type: Boolean,default:false},
        islive:{type: Boolean,default:false}, 

        
    }
);

module.exports=mongoose.model('Product',product);