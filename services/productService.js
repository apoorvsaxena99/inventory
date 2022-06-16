const product=require('../models/dao/productDao');

const inventoryManagement = async(data)=>{
    try {
        if(data.length>0){
            var result=[];
            for(let i=0;i<data.length;i++){
            if(data[i].operation == "add"){
                let productval=await product.quantity(data[i].productId);
                if(productval==null){
                    result.push({"Status":"Failed","message":"Product Id not exist"});
                }else{
                let totalQuantity=productval.quantity+data[i].quantity;
                var updatedQuantity=await product.inventory({productId:data[i].productId,quantity:totalQuantity});
                if(updatedQuantity.matchedCount!=undefined){
                    var data=await product.details(data[i].productId);
                    result.push({"Status":"Success","message":"Quantity has been updated successfully","data":data});
                }else{
                    result.push({"Status":"Failed","message":"Quantity has not been updated"});
                }
            }
            }else if(data[i].operation == "subtract"){
                let productval=await product.quantity(data[i].productId);
                if(productval==null){
                    result.push({"Status":"Failed","message":"Product Id not exist"});
                }else{
                let totalQuantity=productval.quantity-data[i].quantity;
                if(totalQuantity<0){
                    totalQuantity=0;
                }
                var updatedQuantity=await product.inventory({productId:data[i].productId,quantity:totalQuantity});
                if(updatedQuantity.matchedCount!=undefined){
                    var data=await product.details(data[i].productId);
                    result.push({"Status":"Success","message":"Quantity has been updated successfully","data":data});
                }
            }
            }else{
                result.push({"Status":"Failed","message":"Operation can not be performed"});
            }
        }
        return result; 
    }else{
        if(data.operation == "add"){
            let productval=await product.quantity(data.productId);
            if(productval==null){
                return {"Status":"Failed","message":"Product Id not exist"};
            }else{
            let totalQuantity=productval.quantity+data.quantity;
            var updatedQuantity=await product.inventory({productId:data.productId,quantity:totalQuantity});            
            if(updatedQuantity.matchedCount!=undefined){
                var data=await product.details(data.productId);
                return {"Status":"Success","message":"Quantity has been updated successfully","data":data};
            }else{
                return {"Status":"Failed","message":"Quantity has not been updated"};
            }
        }
            
        }else if(data.operation == "subtract"){
            let productval=await product.quantity(data.productId);
            if(productval==null){
                return {"Status":"Failed","message":"Product Id not exist"};
            }else{
            let totalQuantity=productval.quantity-data.quantity;
            if(totalQuantity<0){
                totalQuantity=0;
            }
            var updatedQuantity=await product.inventory({productId:data.productId,quantity:totalQuantity});
            if(updatedQuantity.matchedCount!=undefined){
                var data=await product.details(data.productId);
                return {"Status":"Success","message":"Quantity has been updated successfully","data":data};
            }
        }
        }else{
            return {"Status":"Failed","message":"Operation can not be performed"};
        }
    }
        
    } catch (error) {
        return error;
    }
}

module.exports={
    "inventoryManagement":inventoryManagement
}