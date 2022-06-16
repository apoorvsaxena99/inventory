
const db=require('../../connection');
db();
const product=require('../schema/products');
const quantity= async(id)=>{
    try {
        var result=await product.findOne({"productId":id},{"_id":0,"quantity":1});
        if(result!=null){
            return result;
        }else{
            return null;
        }
    } catch (error) {
        return error;
    }
}
const details =async(id)=>{
    try {
        return await product.findOne({"productId":id},{"_id":0});
    } catch (error) {
        return error;
    }
}
const inventory = async(data)=>{
    try {
        return await product.updateOne({"productId":data.productId},{$set:{"quantity":data.quantity}});
    } catch (error) {
        return error;
    }
}
module.exports={
    "quantity":quantity,
    "inventory":inventory,
    "details":details
}