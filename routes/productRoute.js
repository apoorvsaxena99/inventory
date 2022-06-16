const express=require('express');
const router=express.Router();
const Products=require('../controller/controller');

router.post('/operation',async(req,res)=>{
    var result=await Products.operation(req.body);
    res.send(result);
})

module.exports=router;