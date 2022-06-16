const mongoose=require('mongoose');

var productSchema=new mongoose.Schema({
    productId:{
        type:Number
    },
    quantity:{
        type:Number
    }
});

var product=mongoose.model('Products',productSchema);
module.exports=product;