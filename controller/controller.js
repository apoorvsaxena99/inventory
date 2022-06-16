const productService=require('../services/productService');

const operation= async(data)=>{
    try {
        return await productService.inventoryManagement(data);
    } catch (error) {
        return error;
    }
}
module.exports={
    "operation":operation
}